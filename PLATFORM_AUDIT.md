# Noble Collectors — Full Platform Audit Report

**Audit Date:** 2026-05-26  
**Scope:** Full codebase — `noble-collectors/`  
**Framework:** Next.js 16.2.6 (App Router)  
**Language:** TypeScript 5.x  
**Runtime:** Node.js 22+

---

## 1. Project Overview

| Attribute | Value |
|-----------|-------|
| **Purpose** | Private luxury collectibles marketplace — bilingual (EN/AR), RTL-compatible |
| **Stack** | Next.js 16 + Supabase (Postgres) + Drizzle ORM + Tailwind CSS v4 + next-intl |
| **Auth** | Supabase SSR (production session) / `__dev_session` cookie bypass (dev) |
| **Monorepo?** | No — single-package Next.js app |
| **CI** | GitHub Actions — Node 22, `npm ci && npm run build` |
| **Hosting target** | Vercel Pro |
| **Monitoring** | Sentry + PostHog (consent-gated) |

### Key Numbers

| Metric | Count |
|--------|-------|
| Database tables | 44+ (15 schema files) |
| Public routes | 26 pages |
| Admin routes | 27 pages |
| API handlers | 12 (2 empty) |
| DTO types | 22 (24 files, Zod-validated) |
| Native bridge adapters | 17 |
| Layout components | 13 |
| Test files | 2 |
| i18n messages | ~200 EN keys, full AR mirror |
| Design tokens | 5 token files (color, type, space, motion) |
| Trust spine states | 9 review states, 8 risk flags, 6 acquisition paths |

---

## 2. Architecture

### Directory Layout
```
noble-collectors/
  src/
    app/
      [locale]/       ← i18n-routed pages (en/ar)
        admin/        ← 27 admin panel pages
        account/      ← 14 member account pages
        seller/       ← 8 seller portal pages
        public/       ← explore, auctions, library, journal, etc.
      api/v1/         ← 12 API endpoint handlers
      globals.css     ← Design tokens + Tailwind v4 theme
      manifest.ts     ← PWA manifest
      sitemap.ts      ← Bilingual sitemap
      robots.ts       ← Robots.txt config
    components/
      layouts/        ← AdminShell, PublicShell, MemberShell, SellerShell, MobileShell, PwaShell
      ui/             ← ArtifactCard, CategoryCard, TrustLabel, CTAButton, ThemeToggle
      trust/          ← EvidenceScoreBadge, ReviewStateBadge, EvidenceScorePanel, AcquisitionPathCard
      patterns/       ← WizardLayout, DossierLayout, SalonLayout, KanbanLayout, TimelineLayout, TermsAcceptance
      media/          ← MediaUploader, MediaGallery, SignedMediaViewer
      pwa/            ← NetworkStatus, InstallPrompt, UpdateNotification
      features/       ← auctions/, consignor-intake/, compliance/, discovery/, global/, growth/, introductions/, member/, salon/
    lib/
      auth/           ← 5 files: server, session, middleware-helpers, dev-bypass, index
      db/             ← client.ts + schema/ (15 files, 44+ tables)
      trust-spine/    ← 6 files: evidence-score, review-states, risk-flags, acquisition-path
      security/       ← 5 files: cors, csrf, rate-limit, rls
      media/          ← 3 files: upload, security
      mock/           ← Mock data: auctions, explore, library, seller
    dto/              ← 24 files (22 DTOs + index + test)
    cms/              ← Editor, renderer, blocks, workflow, seo, templates
    native-bridge/    ← 17 adapter files + index
    design-system/    ← tokens/ (color, type, space, motion)
    features/         ← consignor-intake/ (wizard, schemas, checklist)
    middleware.ts     ← Auth guard + i18n routing
  supabase/
    migrations/       ← 0000_initial_schema.sql + 0001_rls_policies.sql
    seed.sql          ← Default data
```

### Layout Composition
```
App Root ([locale]/layout.tsx)
  ├── PWAShell (NetworkStatus + InstallPrompt + UpdateNotification)
  │   └── PublicShell (Header + Footer + MobileBottomNav + ConsentBanner)
  │       └── {page}
  ├── AdminShell (AdminNav sidebar + AdminHeader + content)
  │   └── {page}
  ├── MemberShell (Header + MemberNav sidebar)
  │   └── {page}
  ├── SellerShell (Header + SellerNav sidebar)
  │   └── {page}
  └── MobileShell (minimal layout + bottom nav)
```

### Auth Flow
```
Request → middleware.ts
  ├── isProtectedPath()?
  │   ├── checkAuth(): check __dev_session cookie (dev bypass)
  │   │   └── if no cookie → supabase.auth.getUser()
  │   └── no user? → redirect /{locale}/login
  └── i18n routing (next-intl)
```

---

## 3. Database Schema

**15 schema files** in `src/lib/db/schema/`:

| Schema File | Core Tables |
|-------------|-------------|
| `identity.ts` | users, roles, permissions, user_profiles, sessions |
| `cms.ts` | cms_entries, cms_versions, cms_reviews, cms_media_assets, cms_glossary_terms, cms_journal_articles, cms_email_templates |
| `artifact.ts` | collector_assets, asset_categories, asset_taxonomy, asset_attributes, asset_media, condition_reports, provenance_records, restoration_records |
| `passport.ts` | heritage_passports, passport_documents, passport_reviews |
| `auction.ts` | auctions, auction_lots, auction_bids, auction_registrations |
| `market.ts` | market_archive_records, price_estimates |
| `evidence.ts` | evidence_vault_files, access_logs |
| `orders.ts` | orders, invoices, payments, buyer_premiums |
| `logistics.ts` | shipments, tracking_events, storage_records |
| `salon.ts` | salon_rooms, room_access, room_members, room_activity |
| `membership.ts` | membership_applications, membership_tiers |
| `introductions.ts` | introducer_profiles, referral_leads, introduction_meetings |
| `growth.ts` | lead_capture, consent_records, analytics_events |
| `legal.ts` | legal_policy_versions, terms_acceptance_records |
| `library.ts` | library_entries, heritage_atlas_entries, museum_profiles, maison_heritage_profiles, collector_guides, archive_records |

### Security Zones (RLS)
| Zone | Policy | Access |
|------|--------|--------|
| 0 | `public_read` | Public visibility = true |
| 1 | `owner_scoped` | user_id = auth.uid() |
| 2 | `salon_access` | Room access record (expiry-aware) |
| 3 | `evidence_vault` | Roles: reviewer, specialist, admin |
| 4 | `commercial` | Roles: finance_operator, admin, platform_owner |
| 5 | `auction_authority` | service_role only |

---

## 4. Route Inventory

### Public Routes (26 pages)
`/`, `/explore/`, `/explore/[category]/`, `/auctions/`, `/auctions/[slug]/`, `/artifacts/[slug]/`, `/archive/`, `/archive/[slug]/`, `/journal/`, `/journal/[slug]/`, `/collectors-salon/`, `/concierge/`, `/estate-collections/`, `/heritage-passport/`, `/introductions/`, `/login/`, `/membership/`, `/offline/`, `/sell/`, `/submit-artifact/`, `/library/`, `/library/glossary/`, `/library/guides/`, `/library/heritage-atlas/`, `/library/maison-heritage/`, `/library/museums/`, `/luxury-collectibles/`, `/luxury-collectibles/[category]/`, `/legal-trust/`, `/legal-trust/[slug]/`, `/legal-trust/data-deletion/`, `/legal-trust/privacy-policy/`, plus 14 `/account/*` + 8 `/seller/*` sub-routes

### Admin Routes (27 pages)
Dashboard, Applications, Inquiries, CMS (overview + pages/library/journal/glossary), Artifact Intake, Artifacts, Artifact Genomes, Asset Taxonomy, Condition Reports, Auctions, Private Sales, Heritage Passports, Luxury Collectibles, Market Archive, Evidence Vault, Orders & Finance, Logistics, Noble Library, Growth Intelligence, Introductions Circle, Legal & Trust Center, Mobile Readiness, Settings & Governance, Audit Logs

### API Routes (12 handlers)
| Endpoint | Method | Notes |
|----------|--------|-------|
| `/api/v1/health` | GET | Rate-limited 5 req/s, memory stats |
| `/api/v1/auctions` | GET | Active auction listing |
| `/api/v1/auctions/register` | POST | Zod validation + terms acceptance |
| `/api/v1/invoices` | POST | Create invoice |
| `/api/v1/introductions/invite` | POST | Referral lead |
| `/api/v1/growth/consent` | POST | Consent record |
| `/api/v1/growth/lead` | POST | Lead capture |
| `/api/v1/media/upload` | POST | Rate-limited 10/min, MIME validated, EXIF strip, audit |
| `/api/v1/media/signed-url` | POST | Generate signed URL |
| `/api/v1/submissions/draft` | POST/PUT | Save draft |
| `/api/v1/shipping/request` | POST | Shipping request |
| `/api/v1/viewing/request` | POST | Viewing appointment |
| `/api/v1/cms/` | — | Empty (planned) |
| `/api/v1/legal/` | — | Empty (planned) |

---

## 5. CMS System

### Block-Based Content Model
- **5 block types:** Heading, Paragraph, Image, CTA, CardGrid
- **10 content types:** page, category_page, journal_article, legal_policy, heritage_atlas_entry, museum_profile, maison_heritage_profile, collector_guide, glossary_term, email_template
- **10-state workflow:** draft → pending_review → legal_review → ip_review → security_review → approved → scheduled → published → archived → draft (revision)
- **Mandatory gates:** Legal review, IP review, Security review before approval
- **SEO:** Each entry has meta title, description, OG image, JSON-LD structured data

### CMS Architecture
```
cms/
  editor/
    CMSBlockEditor.tsx   ← Block-by-block editor
    CMSRenderer.tsx      ← Server-side renderer
    Toolbar.tsx
  blocks/                ← Block type definitions
    HeadingBlock.tsx
    ParagraphBlock.tsx
    ImageBlock.tsx
    CTABlock.tsx
    CardGridBlock.tsx
  workflow/
    CMSWorkflow.tsx      ← 10-state workflow with review gates
    ReviewGate.tsx
  seo/
    CmsSeoEditor.tsx     ← SEO metadata editor
    StructuredData.tsx   ← JSON-LD generator
  templates/
    PageTemplate.tsx
    JournalTemplate.tsx
```

---

## 6. Trust Spine

### Evidence Score (0–100)
| Component | Max Points |
|-----------|-----------|
| Photos | 25 (base 10 + 10 for ≥3 + 5 for ≥5) |
| Documents | 15 (base 10 + 5 for ≥2) |
| Provenance | 25 (verified=25, detailed=20, basic=10, none=0) |
| Condition Report | 15 |
| Certificate | 10 |
| Passport | 10 |
| **Total** | **100** |

### Labels
| Threshold | Label | Color |
|-----------|-------|-------|
| ≥80 | Evidence Strong | green |
| ≥60 | Evidence Moderate | yellow |
| ≥30 | Evidence Limited | orange |
| <30 | Needs Review | red |

### Review States (8)
pending → research_ongoing → review_pending → specialist_review_required → specialist_review_completed → passport_available → provenance_packet_available → condition_notes_available

### Risk Flags (8)
- **Critical (3):** legal_review_required, cultural_property_concern, sanctions_review
- **Warning (3):** incomplete_provenance, high_risk_category, missing_evidence
- **Info (2):** requires_specialist, condition_concern

### Acquisition Paths (6)
| Path | Access Required | Approval Required |
|------|----------------|-------------------|
| Public Listing | No | No |
| Private Salon | Yes | No |
| Private Sale | Yes | Yes |
| Auction Preview | Yes | Yes |
| Concierge Only | Yes | Yes |
| Restricted | Yes | Yes |

---

## 7. DTO Layer

**22 Zod-validated DTOs** across 24 files, all with `toPublic*()` transformers:

| DTO Group | Types |
|-----------|-------|
| Artifacts | `PublicArtifactCardDTO`, `PublicArtifactDetailDTO` |
| Categories | `PublicCollectorAssetCategoryDTO` |
| Luxury | `PublicWatchDTO`, `PublicJewelryDTO`, `PublicHandbagDTO` |
| Auctions | `PublicAuctionDTO`, `PublicAuctionLotDTO` |
| Library | `PublicLibraryPageDTO`, `PublicGlossaryTermDTO` |
| Legal | `PublicLegalTrustPageDTO` |
| Passport | `PublicPassportPreviewDTO` |
| Commercial | `PublicInvoiceDTO`, `PublicViewingAppointmentDTO`, `PublicShippingRequestDTO`, `PublicPaymentDTO` |
| Media | `PublicMediaVariantDTO` |
| Growth | `PublicLeadCaptureDTO`, `PublicConsentRecordDTO` |
| Introductions | `PublicIntroducerProfileDTO`, `PublicReferralLeadDTO` |
| Modern | `PublicModernCollectibleDTO` |
| Design | `PublicDesignObjectDTO` |
| Archive | `PublicArchiveRecordDTO` |
| Museum/Maison | `PublicMuseumProfileDTO`, `PublicMaisonHeritageDTO` |
| Journal | `PublicJournalArticleDTO` |
| Cost | `PublicCostClarityDTO`, `PublicViewingAvailabilityDTO` |
| Membership | `PublicMembershipApplicationDTO` |
| Compliance | `PublicAppVersionDTO`, `PublicComplianceChecklistDTO` |
| Deletion | `PublicDeletionRequestDTO`, `PublicDataExportRequestDTO` |

All transformers map `snake_case` DB columns → `camelCase` DTO fields with `.parse()` validation.

---

## 8. Security

### Rate Limiting
- **In-memory** `Map<string, { count, resetAt }>` — NOT production-ready (lost on restart, not shared across instances)
- Default window: 30 req / 60s per key

### CORS
- Single allowed origin from `NEXT_PUBLIC_SITE_URL`
- Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- Headers: Content-Type, Authorization, X-CSRF-Token

### CSRF
- SHA-256 token generation with minute-level time window
- Secret from `CSRF_SECRET` env var (random fallback)

### Media Security
- MIME whitelist: JPEG, PNG, WebP, AVIF, TIFF, PDF, XML, TXT
- Path traversal prevention: rejects `..`, leading `/`, backslash
- EXIF/GPS stripping via `?strip=all` transform parameter

---

## 9. Native Bridge (17 Adapters)

Notifications, Camera, File Upload, Share, Deep Links, Storage, Auth Session, Payments, Haptics, Biometrics, Secure Storage, Network Status, App Updates, Permissions, Privacy Consent, Analytics Consent, App Store Compliance

---

## 10. Testing

**Critically low coverage — only 2 test files:**

| File | Tests |
|------|-------|
| `src/dto/public-artifact.test.ts` | 5 (Zod validation) |
| `src/lib/trust-spine/evidence-score.test.ts` | 8 (evidence scoring logic) |
| **Total** | **13 tests across 2 files** |

**Untested areas:** All API handlers, all security modules (CORS, CSRF, rate-limit), all DTOs except artifact, all media upload logic, all native adapters, all layout components, all feature components, all CMS workflow, all admin pages.

---

## 11. Deployment Readiness

### ✅ Production-Ready
- Bilingual routing and RTL support
- Security headers in `next.config.ts`
- DTO validation layer
- PWA support (manifest, service worker, offline page, install prompt)
- SEO (sitemap with alternates, robots, JSON-LD)
- Rate limiting on critical endpoints
- CSRF protection
- Zone-based RLS policies
- Error boundaries (admin error page, global error handling)
- Dev auth bypass for local development

### ❌ Gaps / Risks
| Issue | Severity | Details |
|-------|----------|---------|
| Test coverage | **Critical** | Only 13 tests across entire codebase |
| In-memory rate limiter | **High** | Lost on restart, not shared across Vercel instances |
| `supabaseAdmin` service_role in media upload | **High** | Bypasses all RLS — any authenticated user could upload |
| Missing env validation at startup | **Medium** | `.env` uses placeholder keys, no validation on boot |
| Placeholder .env values | **Medium** | Will crash on deploy without real Supabase credentials |
| Empty API routes | **Low** | `/api/v1/cms/` and `/api/v1/legal/` are empty stubs |
| CMS dynamic routes not implemented | **Low** | CMS overview links to 10 content type routes that don't exist |
| No login UI component | **Low** | Login page exists with dev bypass but no production auth UI |
| No email system | **Low** | `src/emails/` directory doesn't exist |
| Discrepant nav link | **Low** | Admin nav links to `/admin/dashboard` (now resolved) |

---

## 12. Q&A

### Q: Is the platform bilingual?
**A:** Yes — full English/Arabic support with RTL layout switching. All UI text, labels, error messages, DTO descriptions, and admin pages use `isRtl` ternaries. i18n messages in `src/messages/en/` and `src/messages/ar/`.

### Q: How does authentication work?
**A:** Two modes:
1. **Production:** Supabase SSR sessions via `@supabase/ssr` cookie-based auth. Middleware checks `auth.getUser()` on protected routes. Admin layout additionally verifies role (admin/reviewer/specialist/platform_owner).
2. **Development:** Setting `__dev_session=mock_admin` cookie bypasses all auth and returns a mock admin user. Set via the `/login` page's "Dev Login" button.

### Q: What database does it use?
**A:** PostgreSQL 15 via Supabase. Schema managed with Drizzle ORM. 44+ tables across 15 schema files. 2 migration files (schema + RLS policies).

### Q: Is it production-ready?
**A:** Partially. The architecture, security model, design system, and bilingual support are solid. Critical gaps are: **test coverage** (13 tests total), **rate limiter** is in-memory (won't work on Vercel's serverless), **media upload uses service_role** (bypasses RLS), and **missing env validation**.

### Q: What is the Trust Spine?
**A:** A deterministic evidence scoring engine that calculates a 0–100 readiness score for artifacts based on photos, documents, provenance depth, condition reports, certificates, and passports. Combined with 8 review states, 8 risk flags, and 6 acquisition paths to determine how an artifact can be accessed or sold.

### Q: How is media handled?
**A:** Supabase Storage in a `media` bucket. Originals stored privately under `originals/{assetId}/`, public variants under `public/{assetId}/`, thumbnails under `thumbnails/{assetId}/`. All uploads MIME-validated, path-sanitized, and EXIF-stripped. Access via expiring signed URLs with full audit logging.

### Q: What's the CMS workflow?
**A:** 10-state workflow: draft → pending_review → legal_review → ip_review → security_review → approved → scheduled → published → archived → back to draft for revisions. Mandatory legal, IP, and security review gates before publication.

### Q: What frontend state management is used?
**A:** None beyond React's built-in `useState`/`useEffect` and Server Components. No Redux, Zustand, or Jotai. Data is fetched server-side via Supabase queries.

### Q: Is there a mobile app?
**A:** No native mobile app, but the platform has a comprehensive PWA (service worker, manifest, offline page, install prompt) plus 17 native bridge adapters for future WebView/Capacitor integration, covering camera, biometrics, payments, deep links, and more.

### Q: What's missing?
**A:** 
- Email notification system
- CMS dynamic `[type]` routes (linked from overview but not implemented)
- Production login UI (only dev bypass exists)
- API routes for CMS CRUD and legal policy management
- Most of the admin pages are still feature stubs (UI shells with module descriptions)
- Complete test coverage
