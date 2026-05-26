# Noble Collectors / نوبل كوليكتورز
# AI Builder Skills + Execution Control V2 — Mobile-App-Ready
# 18-05-2026

## 1. Document Purpose

This file defines mandatory execution skills, no-drift rules, cost-control behavior, proof requirements, mobile-app-ready rules, deployment safety, and stop lines for any AI-agent code builder working on Noble Collectors.

It is intended for Codex, Antigravity, or any AI coding/build agent.

This is a source-of-truth control file. It does not describe anything as built, active, deployed, tested, integrated, submitted to app stores, or production-ready.

---

## 2. Source-of-Truth Hierarchy

When instructions conflict, follow this order:

1. Master Blueprint V3
2. SRS V3
3. Implementation Structure V3
4. Day-One Build Program
5. AI Builder Skills V2
6. UI/UX Directions
7. Current user implementation packet
8. Existing codebase conventions
9. AI builder judgment

If a prompt conflicts with the source-of-truth documents, the builder must stop and report the conflict.

---

## 3. Absolute Builder Principle

The AI builder must behave like a disciplined senior engineer under strict product governance.

Primary duty:

> Build only what aligns with the source documents, prove it, document it, and stop before drifting.

The AI builder must not:

- invent modules
- rename approved modules casually
- change architecture without impact note
- weaken security
- build fake integrations
- overclaim readiness
- expand scope without approval
- waste tokens/credits
- refactor broad areas unnecessarily
- touch unrelated files
- create duplicate systems
- ignore Arabic/RTL
- ignore CMS governance
- ignore PWA/native-wrapper readiness
- ignore app-store-readiness rules
- ignore deployment/production safety
- ignore public/private boundaries

---

## 4. Pre-Build Assumption

Treat Noble Collectors as not built unless a specific implementation proof packet proves otherwise.

Do not assume:

- production readiness
- connected providers
- working payments
- working KYC/sanctions
- working shipping/logistics
- legal review
- native app availability
- app-store submission readiness
- auction bidding authority
- AI valuation/authenticity authority
- museum/brand partnerships
- CMS content approval
- expert review capability

---

## 5. Non-Negotiable Builder Laws

- Arabic from day one.
- True RTL from day one.
- Smart-by-default before AI.
- PWA-first architecture.
- Mobile-first architecture.
- Future native-wrapper readiness.
- App-store-readiness-aware architecture.
- One frontend codebase.
- No duplicate mobile frontend.
- CMS is first-class.
- Public DTOs before public pages.
- Security zones must be respected.
- No private data in public HTML, APIs, JSON-LD, sitemap, llms files, Open Graph, CMS output, or service-worker cache.
- No fake auction authority.
- No fake payment capability.
- No fake KYC/sanctions clearance.
- No fake shipping/logistics integration.
- No fake legal authority.
- No AI authenticity, valuation, or certification claims.
- Every sensitive action must be auditable.
- Every module must be modular and future-upgrade-ready.
- No Regulated Luxury Consumables.
- No alcohol/wine/spirits categories or flows.
- No public affiliate/coupon/referral behavior.

---

## 6. Cost-Control Operating Mode

Use **surgical mode** by default.

Surgical mode means:

- inspect only necessary files
- change the smallest number of files
- touch only the owning module
- avoid broad refactors
- run targeted tests first
- run full build only at meaningful checkpoints
- avoid generating excessive docs
- avoid exploring unrelated modules
- patch small and prove
- stop after proof is gathered

### Command Cost Rules

Before running commands:

1. Prefer static inspection.
2. Run targeted typecheck/lint/test for changed area.
3. Run full build only when scope justifies it.
4. Do not repeatedly run expensive commands after every tiny edit.
5. If a command fails, inspect the exact error and patch directly.
6. Do not brute-force fixes.

### Token/Credit Rules

- Do not scan the entire repo unless cross-cutting architecture or security demands it.
- Do not regenerate files wholesale unless necessary.
- Do not ask the AI agent to “improve everything.”
- Use small packets.
- Batch related edits.
- Stop at proof.

---

## 7. Mandatory Pre-Task Checklist

Before coding, identify:

1. Roadmap phase
2. Owning module
3. User context: public/member/seller/admin/internal
4. Data touched
5. What must never leak
6. Required DTO
7. Security zone
8. CMS impact
9. Arabic/RTL impact
10. PWA/mobile impact
11. Native bridge/app-store readiness impact
12. Deployment/production impact
13. Audit requirement
14. Tests/proof required
15. Explicit non-scope

If any answer is unknown, inspect the minimum necessary files or stop and report the gap.

---

## 8. Mandatory Post-Task Report

Every coding task must end with:

```txt
Packet:
Status:
Scope completed:
Files changed:
Routes affected:
Backend/data impact:
Frontend/UI impact:
CMS impact:
Security/public-private impact:
Arabic/RTL impact:
PWA/mobile impact:
Native bridge/app-store readiness impact:
Deployment/production impact:
Category/risk impact:
Tests/commands run:
Proof results:
Claims allowed:
Claims forbidden:
Known gaps:
Next safe step:
```

Keep it concise.

---

## 9. Core Builder Skills

### Skill 1 — Source Alignment

Before coding, map the task to:

- Master Blueprint section
- SRS requirement
- Implementation phase
- owning module
- affected route/entity/DTO
- proof gate

### Skill 2 — Scope Control

Define:

- scope
- non-scope
- files expected to change
- files forbidden to touch
- claims allowed
- claims forbidden

If broad, reduce to smallest safe packet.

### Skill 3 — Public DTO Discipline

Any public route or public machine-readable output must use explicit DTO whitelisting.

Forbidden:

- raw database rows in public pages
- hiding private fields only in frontend
- storage paths in public payloads
- internal passport/genome/evidence fields publicly exposed

Required:

- public DTO function
- DTO proof/test
- public/private leak check

### Skill 4 — Security-First Engineering

For features involving user data, private content, admin, media, evidence, payment, auction, KYC, logistics, CMS publishing, referrals, or app/mobile permissions, security must be designed before UI.

Required checks:

- who can read
- who can write
- what is public
- what is private
- what DTO is used
- server/rules authorization
- audit requirement
- cache/metadata leak risk
- app/mobile cache risk

### Skill 5 — CMS Governance

Any public content must respect CMS governance.

Do not hardcode long-term public page content if it belongs in CMS.

CMS must support:

- workflow states
- multilingual fields
- versioning
- rollback
- SEO/SMC fields
- legal/IP review state
- Legal & Trust Center content
- public-safe output

### Skill 6 — Arabic/RTL Discipline

Every user-facing feature must include Arabic/RTL consideration.

Required:

- translation keys or localized content model
- logical spacing where possible
- direction-safe layout
- Arabic labels not machine-literal
- mobile RTL considered

### Skill 7 — PWA/Mobile Discipline

Every public/member/seller feature must be mobile-first and PWA-safe.

Required:

- responsive layout
- touch-friendly UI
- safe offline/cache behavior
- native-bridge adapter use where relevant
- no private content in service-worker cache

### Skill 8 — Native Bridge Discipline

Feature screens must not directly call browser/native APIs when an adapter is required.

Use adapters for:

- notifications
- camera
- file upload
- share
- deep links
- storage
- auth sessions
- haptics
- biometrics
- secure storage
- network status
- app updates
- permissions
- privacy consent
- analytics consent
- app-store compliance state

### Skill 9 — App Store Readiness Discipline

The builder must preserve future Apple/Google readiness.

Do not:

- create a thin wrapper dependency
- request permissions too early
- use push notifications for sensitive private content
- hide privacy/data use flows
- ignore account/data deletion readiness
- hardcode misleading app capability claims

Required:

- privacy/data map impact noted when data changes
- permission rationale noted when permission is introduced
- deep link security considered
- account deletion/data export impact considered

### Skill 10 — Deployment Discipline

Deployment-related work must preserve:

- environment separation
- no secrets in frontend
- no dev auth in production
- safe migrations
- rollback path
- health checks
- logging/monitoring
- rate limiting
- bot protection
- security headers

### Skill 11 — Luxury UX Discipline

Forbidden:

- discount badges
- loud countdowns
- fake urgency
- noisy grids
- excessive badges
- generic SaaS dashboards
- cheap resale UI
- dark-pattern popups

Required:

- calm hierarchy
- editorial spacing
- restrained CTAs
- trust-first layout
- collector-grade dignity

### Skill 12 — Workflow-First Product Logic

Use:

- Wizard for multi-step intake/applications/registration
- Kanban for operational queues
- List for filtering/scanning
- Timeline/Gantt for dependencies/history
- Dossier for Heritage Passport
- Salon layout for private collector access

No shallow wizard theater.

### Skill 13 — Category-Aware Architecture

Do not flatten all assets into generic product fields.

Use category-specific metadata for:

- watches
- jewelry/gemstones
- handbags/trunks
- design objects
- modern collectibles
- mobility/ultra-assets
- cultural assets
- manuscripts/books/maps
- numismatics/philately
- science/natural history

Risk tier must drive workflow.

---

## 10. Stage-Specific Builder Rules

### Phase 0 — Source Pack Lock

Ensure source files align before coding.

### Phase 1 — Architecture + Stack Lock

Produce stack decision matrix, app-store readiness checklist, route map, module map, role/permission matrix, entity map, DTO map, CMS model, security zone map, category risk matrix, native bridge plan, deployment plan, and proof template.

### Phase 2 — Design System + UI Foundation

Focus on tokens, shells, typography, Arabic typography, mobile nav, layouts, and reusable patterns.

### Phase 3 — Backend + DB Foundation

Focus on auth/roles, permissions, DB schemas, DTO layer, audit foundation, consent records, category taxonomy, CMS base schema, media/evidence base schema, and mobile readiness records.

### Phase 4 — CMS + Legal Trust Foundation

Focus on CMS workflow, content versioning, Legal & Trust Center, terms acceptance, app privacy/data use pages, and account/data deletion pages.

### Phase 5 — Media Vault + Evidence Vault

Focus on private originals, EXIF/GPS stripping, public variants, signed URLs, evidence vault, and access logs.

### Phase 6 — Intake + Category Smart Forms

Focus on smart intake wizard, category-specific metadata, draft save/resume, evidence checklist, review status, and admin intake queue.

### Phase 7 — Trust Spine + Review States

Focus on Evidence Readiness Score, review states, confidence labels, risk flags, acquisition path, and missing evidence.

### Phase 8 — Public Discovery + Luxury Collectibles

Focus on Explore, category pages, cards, object detail, Cost Clarity Panel, Viewing & Inspection Panel, CTAs, and SEO/SMC.

### Phase 9 — Member Experience + Collectors’ Salon

Focus on Collection Desk, Watchlist, Collectors’ Salon, Private Rooms, access/expiry/revocation, condition requests, sourcing, and messages.

### Phase 10 — Noble Library + Market Archive

Focus on Heritage Atlas, Museum Index, Maison Heritage, Collector Guides, Glossary, and Market Archive.

### Phase 11 — Growth Intelligence + Introductions Circle

Focus on consent, smart CTAs, exit-intent, lead routing, CRM, abandonment recovery, introduction links, double opt-in, conflict disclosure, and reward eligibility.

### Phase 12 — Auction Preview + Registration

Focus on auction calendar, lot preview, registration, terms acceptance, buyer premium disclosure, viewing/inspection integration, and reminders. No live bidding.

### Phase 13 — Commercial + Logistics Foundation

Focus on manual invoice model, payment status proof model, bank transfer instruction model, finance audit, viewing appointment, shipping request, and custody records.

### Phase 14 — Advanced PWA + Mobile Readiness QA

Focus on install prompt, service worker, offline fallback, public-safe cache, deep links, mobile upload, secure session, network status, and native bridge validation.

### Phase 15 — Production Deployment Foundation

Focus on staging/production environments, CI/CD gates, secrets, logging, monitoring, backups, rollback, security headers, rate limiting, and uptime checks.

### Phase 16 — Future Mobile App Packaging Readiness

Focus on native wrapper assessment, app-store compliance checklist, privacy/data safety mapping, app icon/splash assets, native permission map, deep links, push notification privacy copy, account/data deletion proof, and store listing draft.

---

## 11. Naming Control

Approved:

- Collectors’ Salon = public-facing premium module
- Private Rooms = internal/access-controlled subfeature
- Noble Library = cultural intelligence layer
- Maison Heritage = luxury house/brand history
- Collector Asset Taxonomy = category system
- Luxury Collectibles Desk = controlled non-antique luxury collectible module
- Legal & Trust Center = policy/compliance/trust content module
- Noble Introductions Circle = private introduction model
- Trusted Referral Engine = internal introduction/referral engine

Forbidden:

- Collactor’s Salon
- Collector’s Salon as main public module
- Wiki as public Noble Library name
- Luxury Brands Wiki
- Museum Directory as generic scraped concept
- Regulated Luxury Consumables
- wine/whisky/spirits categories
- public affiliate/coupon/referral program

---

## 12. Claims Control

Allowed when source-only:

- planned
- target architecture
- designed to support
- future-ready
- proof required before activation
- provider integration not yet active
- source-of-truth requirement

Forbidden without proof:

- live
- production-ready
- fully secure
- legally approved
- payment enabled
- KYC verified
- sanctions cleared
- shipping integrated
- auction bidding active
- native app available
- app-store ready
- AI verified
- certified authentic
- guaranteed valuation
- museum affiliated
- brand authorized

---

## 13. Emergency Stop Rules

Stop and report if you find:

- private data exposed publicly
- storage paths exposed
- admin route unprotected
- role checks only in UI
- auction bid logic on client
- payment state change without proof
- KYC/compliance claim without process
- CMS publishing bypass
- Arabic/RTL ignored on user-facing feature
- service worker caching private data
- unreviewed AI-generated public historical/legal/provenance content
- false museum/brand affiliation
- Regulated Luxury Consumables reintroduced
- wine/whisky/spirits modules created
- broad refactor not requested
- duplicate mobile frontend created
- direct native/browser API calls where adapter needed
- sensitive push notification content exposed
- app-store readiness conflict
- production config exposing secrets/dev auth
- architecture conflict with source docs

---

## 14. Codex Kickoff Prompt

```txt
You are working on Noble Collectors / نوبل كوليكتورز.

Before coding, follow these source documents:
1. Master Blueprint V3 — 18-05-2026
2. SRS V3 — 18-05-2026
3. Implementation Structure V3 — 18-05-2026
4. Day-One Build Program — 18-05-2026
5. AI Builder Skills V2 — 18-05-2026
6. UI/UX Directions — 18-05-2026

Treat the platform as source-of-truth/planning unless proof shows otherwise.

Execute only the requested packet. Do not drift, invent modules, change architecture, weaken security, overclaim readiness, duplicate mobile frontend, or ignore mobile-app readiness.

Mandatory laws:
- Arabic from day one.
- True RTL from day one.
- CMS is first-class.
- PWA-first and native-wrapper-ready.
- App-store-readiness-aware architecture.
- Public DTOs before public pages.
- No private data in public HTML/API/JSON-LD/sitemap/llms/Open Graph/service-worker cache.
- Security zones must be respected.
- No fake auction/payment/KYC/shipping/legal/AI claims.
- No Regulated Luxury Consumables.
- No wine/whisky/spirits modules.
- No public affiliate/coupon/referral behavior.
- Every sensitive action must be auditable.
- Cost-control mode: inspect only necessary files, patch surgically, run targeted tests first, avoid broad refactors.

Before changing files, output:
- phase
- owning module
- scope
- non-scope
- files expected to touch
- security boundary
- mobile/app-store impact
- proof plan

After changes, output the mandatory proof report.
```

---

## 15. Final Builder North Star

Build a modular, multilingual, PWA-first, mobile-app-ready luxury collector asset platform with built-in CMS governance, strict public/private boundaries, evidence-backed trust systems, controlled artifact intake, Noble Library cultural intelligence, Collectors’ Salon private access, Heritage Passport intelligence, Legal & Trust Center, Cost Clarity, Viewing & Inspection, Noble Introductions Circle, Luxury Collectibles Desk, and future-ready auction/payment/KYC/logistics/AI/native-wrapper foundations.

Success means:

- no drift
- no fake claims
- no wasted credits
- no security shortcuts
- no shallow UI
- no broken Arabic
- no duplicated architecture
- no uncontrolled content
- no private leaks
- no excluded categories reintroduced
- no mobile rebuild later
- no app-store readiness surprises
- clear proof after every step

