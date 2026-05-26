# Noble Collectors — Full Remaining Work Plan
## 24-05-2026

**Current state:** 125 routes, 0 build errors, Phases 0–9 complete.  
**Total gap:** ~80 routes + infrastructure, APIs, PWA, native bridge, SEO, admin/seller panels.

---

## PHASE 10 — Noble Library + Market Archive
**Priority: HIGH | Routes needed: 8 new | DTOs needed: 4 | i18n: 3 namespaces**

### 10.1 Library Detail Pages (6 routes)
| Route | Action | Assets Needed |
|---|---|---|
| `/library/heritage-atlas/[slug]` | Create page | HeritageAtlasEntry + PublicArchiveRecordDTO |
| `/library/museums/[slug]` | Create page | MuseumProfile + PublicMuseumProfileDTO |
| `/library/maison-heritage/[slug]` | Create page | MaisonHeritageProfile + PublicMaisonHeritageDTO |
| `/library/guides/[slug]` | Create page | CollectorGuide article renderer |
| `/library/glossary` | Create page | GlossaryTerm + PublicGlossaryTermDTO (exists) + A–Z navigation |
| `/archive` | Create page | ArchiveRecord + PublicArchiveRecordDTO |
| `/archive/[slug]` | Create page | Archive detail from ArchiveRecord |

### 10.2 Missing DTOs (4)
- `PublicArchiveRecordDTO` — `src/dto/public-archive.ts`
- `PublicMuseumProfileDTO` — `src/dto/public-museum.ts`
- `PublicMaisonHeritageDTO` — `src/dto/public-maison.ts`
- `PublicCollectorAssetCategoryDTO` — `src/dto/public-category.ts`

### 10.3 i18n Namespaces (3)
- `library` — heritage-atlas, museums, maison-heritage, guides, glossary
- `archive` — title, subtitle, noRecords, browse
- `library-detail` — shared detail page keys

### 10.4 Data Layer
- Extend `src/lib/mock/` with mock library entries, museum profiles, maison heritage records, glossary terms, archive records
- Or wire to CMS for dynamic content

---

## PHASE 11 — Growth Intelligence + Introductions Circle
**Priority: HIGH | Routes: 3 new | DTOs: 1 new | i18n: 2 namespaces**

### 11.1 Public Pages
| Route | Action |
|---|---|
| `/introductions` | Create page — Noble Introductions Circle explanation |

### 11.2 Growth Components
- Smart CTA Orchestration engine
- Lead capture mini-form component
- Consent banner + preference center
- Abandonment recovery hooks
- Introduction cards and double opt-in flow

### 11.3 i18n Namespaces
- `introductions` — title, subtitle, howItWorks, privacy, cta
- `growth` — smartCta, consent, leadCapture

### 11.4 API Endpoints
- `POST /api/v1/growth/lead` — lead capture
- `POST /api/v1/growth/consent` — consent preferences
- `POST /api/v1/introductions/invite` — introduction invitation

---

## PHASE 12 — Auction Preview + Registration
**Priority: HIGH | Routes: 3 new | DTOs: existing | i18n: 2 namespaces**

### 12.1 Public Pages
| Route | Action |
|---|---|
| `/auctions/[slug]` | Create page — auction detail with lots |

### 12.2 Components
- AuctionDetail hero
- LotGrid / LotCard
- Registration form + terms acceptance
- Buyer premium disclosure
- Calendar reminder CTA

### 12.3 i18n Namespace
- `auctions` — keys for public auction pages (separate from member auctions keys)

### 12.4 API Endpoints
- `POST /api/v1/auctions/register` — registration intent
- `GET /api/v1/auctions` — auction list

---

## PHASE 13 — Commercial + Logistics Foundation
**Priority: MEDIUM | Routes: 0 new pages | Backend: entities + API**

### 13.1 Backend
- Invoice model (schema exists partially)
- Payment status proof model
- Bank transfer instruction model
- Finance audit log
- Viewing appointment schema
- Shipping request schema
- Custody records schema

### 13.2 API Endpoints
- `POST /api/v1/invoices` — create manual invoice
- `POST /api/v1/viewing/request` — viewing appointment
- `POST /api/v1/shipping/request` — shipping request

---

## PHASE 14 — Advanced PWA + Mobile Readiness QA
**Priority: HIGH | Routes: 0 new | Infrastructure: PWA foundation**

### 14.1 PWA (Complete rebuild needed)
| Asset | Action |
|---|---|
| `public/manifest.json` (or `src/app/manifest.ts`) | Create with app name, icons, theme, display mode |
| `public/icons/` | Generate PWA icon set (192, 512, maskable) |
| `public/sw.js` (or `src/app/sw.ts`) | Service worker — public-safe cache only |
| Offline fallback page | Create `src/app/offline/page.tsx` |
| Install prompt component | Create `src/components/mobile/InstallPrompt.tsx` |
| Update available component | Create update notification |
| Network status banner | Create `src/components/mobile/NetworkStatus.tsx` |
| `next.config.ts` PWA config | Add withPWA plugin or headers |

### 14.2 Service Worker Cache Rules
- Cache: public DTO pages, CMS content, library, static assets
- Never cache: `/account/*`, `/admin/*`, evidence vault, private rooms, payment/KYC pages

### 14.3 Mobile/App Shells
| Shell | Action |
|---|---|
| `MobileShell` | Create — wraps mobile-optimized layout |
| `PWAShell` | Create — wraps PWA-specific shell with install/offline/update UX |

---

## PHASE 15 — Production Deployment Foundation
**Priority: MEDIUM | Infrastructure**

### 15.1 Environments
- Staging environment configuration
- Production environment configuration
- Environment variable + secrets management (e.g. dotenv, Vercel env)

### 15.2 CI/CD
- Build/test gate pipeline configuration
- TypeScript check, lint, build steps
- Migration automation

### 15.3 Infrastructure
- Security headers (CSP, HSTS, X-Frame-Options)
- Rate limiting strategy
- Health check endpoint
- Logging/monitoring setup
- Backup/restore plan
- Error tracking integration

---

## PHASE 16 — Future Mobile App Packaging Readiness
**Priority: LOW | Infrastructure + docs**

### 16.1 Native Bridge Adapters (17 total — all missing)
Create `src/native-bridge/` with stub adapters:

| Adapter | File |
|---|---|
| notificationAdapter | `src/native-bridge/notificationAdapter.ts` |
| cameraAdapter | `src/native-bridge/cameraAdapter.ts` |
| fileUploadAdapter | `src/native-bridge/fileUploadAdapter.ts` |
| shareAdapter | `src/native-bridge/shareAdapter.ts` |
| deepLinkAdapter | `src/native-bridge/deepLinkAdapter.ts` |
| storageAdapter | `src/native-bridge/storageAdapter.ts` |
| authSessionAdapter | `src/native-bridge/authSessionAdapter.ts` |
| paymentAdapter | `src/native-bridge/paymentAdapter.ts` |
| hapticsAdapter | `src/native-bridge/hapticsAdapter.ts` |
| biometricAdapter | `src/native-bridge/biometricAdapter.ts` |
| secureStorageAdapter | `src/native-bridge/secureStorageAdapter.ts` |
| networkStatusAdapter | `src/native-bridge/networkStatusAdapter.ts` |
| appUpdateAdapter | `src/native-bridge/appUpdateAdapter.ts` |
| permissionAdapter | `src/native-bridge/permissionAdapter.ts` |
| privacyConsentAdapter | `src/native-bridge/privacyConsentAdapter.ts` |
| analyticsConsentAdapter | `src/native-bridge/analyticsConsentAdapter.ts` |
| appStoreComplianceAdapter | `src/native-bridge/appStoreComplianceAdapter.ts` |

### 16.2 App Store Readiness
- App icon/splash screen assets
- Privacy/data safety mapping doc
- Permission rationale strings
- Deep/universal link map
- Push notification privacy copy
- Account/data deletion flow proof
- Store listing content draft

---

## SELLER ROUTES (Cross-cutting priority)
**Priority: HIGH | Routes: 9 new | i18n: 1 namespace | Components: 5+**

### Missing Routes
| Route | Action |
|---|---|
| `/seller` | Create — seller dashboard with stats |
| `/seller/submissions/[id]` | Create — submission detail |
| `/seller/evidence-requests` | Create — evidence requests list |
| `/seller/review-status` | Create — review status tracker |
| `/seller/sale-path` | Create — sale path recommendations |
| `/seller/offers` | Create — offers received |
| `/seller/consignment` | Create — consignment |
| `/seller/payments` | Create — payment history |
| `/seller/messages` | Create — seller messages |

### Components Needed
- SellerSubmissionCard · SellerDashboardStats · EvidenceRequestCard
- ReviewStatusTimeline · SalePathCard · SellerOfferCard
- SellerMessageThread

### i18n
- `seller` namespace (all keys)

---

## ADMIN ROUTES (Cross-cutting priority)
**Priority: HIGH | Routes: 26 new | i18n: 1 namespace | Components: 10+**

### Priority Admin Routes (First Wave — 15 most critical)
| Route | Action |
|---|---|
| `/admin` | Create — admin command dashboard |
| `/admin/applications` | Create — membership/access applications |
| `/admin/cms/pages` | Create — CMS pages list |
| `/admin/cms/library` | Create — CMS library content manager |
| `/admin/cms/journal` | Create — journal article manager |
| `/admin/cms/glossary` | Create — glossary term manager |
| `/admin/artifacts` | Create — artifact list/detail |
| `/admin/collector-asset-taxonomy` | Create — category management |
| `/admin/luxury-collectibles` | Create — luxury profile editor |
| `/admin/auctions` | Create — auction management |
| `/admin/inquiries` | Create — inquiry queue |
| `/admin/condition-reports` | Create — condition report queue |
| `/admin/settings-governance` | Create — platform settings |
| `/admin/audit-logs` | Create — audit log viewer |

### Components Needed
- AdminDashboard · ApplicationCard · CmsPageList · CmsEditor
- ArtifactReviewTable · AuditTrailViewer · CategoryRiskPanel

---

## PUBLIC ROUTES (Remaining 11)
**Priority: MEDIUM (after seller/admin)**

| Route | Action |
|---|---|
| `/journal` | Create — journal article listing |
| `/journal/[slug]` | Create — journal article detail |
| `/introductions` | Create — Noble Introductions Circle page |
| `/auctions/[slug]` | Create — auction detail with lots |
| `/library/heritage-atlas/[slug]` | Include in Phase 10 |
| `/library/museums/[slug]` | Include in Phase 10 |
| `/library/maison-heritage/[slug]` | Include in Phase 10 |
| `/library/guides/[slug]` | Include in Phase 10 |
| `/library/glossary` | Include in Phase 10 |
| `/archive` | Include in Phase 10 |
| `/archive/[slug]` | Include in Phase 10 |

---

## INFRASTRUCTURE GAPS (Cross-cutting)

### Missing DTOs (6)
- PublicCollectorAssetCategoryDTO · PublicLuxuryCollectibleDTO
- PublicArchiveRecordDTO · PublicJournalArticleDTO
- PublicMuseumProfileDTO · PublicMaisonHeritageDTO

### CMS Editor + Templates (2 directories empty)
- `src/cms/editor/` — CMS content editor (rich text, block editor)
- `src/cms/templates/` — Content type-specific renderers

### SMC / SEO (4 assets missing)
- `public/robots.txt` — robots exclusion
- `src/app/sitemap.ts` — XML sitemap generation
- `public/llms.txt` / `llms-full.txt` — AI crawler guidance
- `src/app/json-ld.ts` — JSON-LD structured data component

### Error Pages (3 missing)
- `src/app/[locale]/not-found.tsx` — 404 page
- `src/app/[locale]/error.tsx` — error boundary
- `src/app/[locale]/loading.tsx` — loading state

### Supabase
- `supabase/migrations/` — empty (no DDL migrations)
- `supabase/policies/` — empty (no RLS SQL policies)

### Middleware Migration
- `src/middleware.ts` — deprecation warning: migrate to `proxy` convention

### Form Components
- `src/components/forms/` — empty dir, no reusable form primitives

---

## RECOMMENDED EXECUTION ORDER

```
Week 1:
  ├── Phase 10: Noble Library + Market Archive (8 routes + 4 DTOs)
  ├── Missing 6 DTOs (cross-cutting)
  └── Seller Routes (9 routes)

Week 2:
  ├── Admin Routes — First Wave (15 routes)
  ├── Phase 12: Auction Preview (1 route + components)
  └── Public Routes — remaining 11 (journal, archive, etc.)

Week 3:
  ├── Phase 11: Growth Intelligence + Introductions (3 routes)
  ├── Phase 14: PWA Foundation (manifest, sw, offline)
  └── Error pages + SMC/SEO (robots, sitemap, llms, JSON-LD)

Week 4:
  ├── Phase 13: Commercial + Logistics (backend entities)
  ├── Phase 15: Production Foundation (CI/CD, infra)
  ├── Phase 16: Native Bridge (17 adapters)
  └── Middleware migration + Supabase migrations
```

---

## ROUTE COUNT PROJECTION

| Area | Current | Planned | Projected Total |
|---|---|---|---|
| Public routes | 26 | +11 | 37 |
| Member routes | 13 | +0 | 13 |
| Seller routes | 1 | +9 | 10 |
| Admin routes | 3 | +26 | 29 |
| API routes | 3 | +10 | 13 |
| **Total** | **46** | **+56** | **~102** |
| (with SSG/ISR variants) | 125 | — | ~102 unique route patterns |

---

## KEY METRICS

| Metric | Current | Target |
|---|---|---|
| Build errors | 0 | 0 |
| TypeScript strict | passes | passes |
| Routes | 125 | ~102 unique |
| DTOs | 14 | 20 |
| i18n namespaces | 10 | ~18 |
| Locales | 2 (en/ar) | 2+ (fr, de future) |
| Shells | 4 | 6 (+ MobileShell, PWAShell) |
| Native adapters | 0 | 17 |
| PWA assets | 0 | manifest + sw + icons |
| SEO assets | 0 | robots + sitemap + llms + JSON-LD |
| Error pages | 0 | 3 (404, error, loading) |
| Supabase migrations | 0 | ≥1 per schema change |
| Middleware | deprecated | migrated to proxy |
