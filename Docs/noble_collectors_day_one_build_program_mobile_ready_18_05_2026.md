# Noble Collectors / نوبل كوليكتورز
# Day-One Build Program + Mobile-App-Ready Execution Pack
# 18-05-2026

## 1. Document Purpose

This file defines the day-one build program for Noble Collectors / نوبل كوليكتورز across skills, phases, UI/UX, smart platform behavior, marketing/lead capture, frontend, backend, database, deployment, production readiness, PWA, and future mobile app readiness.

This is a source-of-truth execution planning file for starting the platform correctly. It does not claim any feature, integration, deployment, mobile app, provider connection, payment, KYC, shipping, auction authority, or AI capability is already active.

---

## 2. Source-of-Truth Alignment

This file must align with:

1. Noble Collectors Master Blueprint V2 — 18-05-2026
2. Noble Collectors SRS V2 — 18-05-2026
3. Noble Collectors Implementation Structure V2 — 18-05-2026
4. Noble Collectors AI Builder Skills — 18-05-2026
5. Noble Collectors UI/UX Directions — 18-05-2026

If this file conflicts with the Master Blueprint or SRS, the Master Blueprint and SRS win.

---

## 3. Absolute Day-One Decision

Noble Collectors must be built as:

- PWA-first
- mobile-first
- future native-wrapper-ready
- app-store-readiness-aware
- one frontend codebase
- one design system
- one route system
- one business logic layer
- one API contract
- one localization system
- one public/private DTO boundary

The platform must not be built in a way that later forces a separate rebuild for iOS and Android.

---

## 4. Mobile App Readiness Law

Primary product path:

- PWA and responsive web platform

Future mobile path:

- native iOS/Android wrapper using the same web codebase, likely through a native bridge such as Capacitor or equivalent technology after platform maturity

The codebase must be structured so that future mobile apps can reuse:

- screens
- routes where practical
- design system
- service layer
- business logic
- API contracts
- localization
- DTO rules
- auth/session logic
- smart forms
- growth/lead logic
- CMS-rendered content

Native app work may later add:

- native shell configuration
- app icons and launch screens
- store assets
- native push notification setup
- native secure storage
- biometric unlock
- deep links / universal links / app links
- camera/file plugins
- native sharing
- native haptics
- native update/version controls

But native app work must not duplicate the product frontend.

---

## 5. App Store Readiness Requirements

The platform must be designed from day one to avoid future Apple App Store and Google Play rejection risks.

### 5.1 Apple App Store Readiness

Future iOS app readiness requires:

- privacy policy accessible in-app
- accurate app privacy details
- clear user consent for tracking/personalization where required
- App Tracking Transparency readiness if tracking is used
- permission purpose strings for camera, photos, notifications, biometrics, files, and related capabilities
- no unnecessary permissions
- meaningful app functionality beyond a thin website wrapper
- no broken web links pretending to be native app flow
- native-feeling navigation and app shell
- account deletion/support flow where applicable
- safe user-generated content moderation logic where applicable
- legal/terms links accessible
- no misleading claims
- no fake payment/KYC/shipping/auction/AI capability

### 5.2 Google Play Readiness

Future Android app readiness requires:

- privacy policy link in Play Console and in-app
- accurate Data Safety disclosures
- Android App Bundle publishing readiness
- signing/release management readiness
- target API / SDK compliance monitoring
- permission minimization
- runtime permission explanations
- clear data collection/use/share disclosures
- no deceptive behavior
- no device/network abuse
- safe account and data deletion flows where applicable
- store listing assets readiness
- production/release track discipline

### 5.3 Future Store Submission Stop Line

Do not submit the future mobile app until:

- mobile shell is complete
- app has meaningful native-app-level UX
- privacy policy and data disclosure are accurate
- permissions are minimized and justified
- push notifications are privacy-safe
- deep links are secure
- account/session handling is safe
- legal/terms pages are accessible
- user data deletion/export requirements are addressed
- no fake provider/auction/payment/KYC/shipping/AI claims exist

---

## 6. Day-One Native Bridge Adapters

All native-adjacent behavior must go through adapters from day one.

Required adapters:

- notificationAdapter
- cameraAdapter
- fileUploadAdapter
- shareAdapter
- deepLinkAdapter
- storageAdapter
- authSessionAdapter
- paymentAdapter
- hapticsAdapter
- biometricAdapter
- secureStorageAdapter
- networkStatusAdapter
- appUpdateAdapter
- permissionAdapter
- privacyConsentAdapter
- analyticsConsentAdapter
- appStoreComplianceAdapter

Rules:

- screens must not call platform/browser/native APIs directly where an adapter should exist
- web/PWA implementations come first
- native implementations can replace adapter internals later
- auth/payment/KYC/auction authority never moves to client/native layer

---

## 7. Build Streams

The platform must be built through controlled streams.

## Stream A — AI Builder Skills + Execution Control

Purpose:

Prevent AI-agent drift, wasted tokens, fake claims, broad refactors, and architecture damage.

Deliverables:

- source-of-truth hierarchy
- Codex kickoff prompt
- Antigravity audit prompt
- packet template
- proof template
- cost-control rules
- security stop lines
- no-drift rules
- mobile-readiness rules
- UI/UX no-drift rules
- Arabic/RTL rules
- CMS rules
- public DTO rules
- category risk rules
- app-store readiness rules

Cost-control rules:

- inspect only needed files
- patch surgically
- avoid broad refactors
- run targeted tests first
- run full builds only at checkpoints
- do not generate excessive docs
- stop after proof

---

## Stream B — Design System + UI Foundation

Purpose:

Build the visual and interaction system before feature screens.

Deliverables:

- color tokens
- typography tokens
- Arabic typography rules
- spacing/radius/shadow/border tokens
- status colors
- focus states
- motion rules
- responsive breakpoints
- mobile bottom navigation pattern
- public shell
- member shell
- seller shell
- admin shell
- PWA/mobile shell
- dossier layout
- salon layout
- wizard layout
- kanban/list/timeline patterns
- CMS content rendering components
- category cards
- luxury collectible cards
- cost clarity panel
- viewing/inspection panel
- legal/trust page layout
- introduction prompt/card pattern

UI law:

- private collector office
- museum-grade cultural archive
- luxury advisory desk
- evidence-backed acquisition platform
- no Shopify clone
- no noisy auction clone
- no generic SaaS dashboard
- no resale clutter
- no dark luxury cliché

---

## Stream C — UI/UX Smart Platform Behavior

Purpose:

Make the platform smart-by-default before AI.

Required patterns:

- Smart Wizard
- Guided Intake
- Smart Forms
- Smart Defaults
- Missing Evidence Checklist
- Category-Specific Questions
- Next Best Action
- Role-Aware Dashboard
- Contextual Trust Labels
- Risk-Aware CTAs
- Save/Continue Later
- Explainable Status
- No Dead-End States
- Plug-and-Play Module Entry Points

Rules:

- no flat forms for complex workflows
- no shallow wizard theater
- every step must have purpose
- every user should know what is missing, why it matters, and what happens next

---

## Stream D — Smart Marketing + Growth Intelligence

Purpose:

Capture qualified leads, detect interest, and build the Noble lead database without bothering visitors or damaging luxury trust.

Required systems:

- Visitor Intent Scoring
- Smart CTA Engine
- Luxury Exit-Intent System
- Lead Capture Orchestration
- Form Intelligence Engine
- Abandonment Recovery Engine
- Consent & Privacy Preference Engine
- Anti-Annoyance Frequency Engine
- Lead Quality Score
- Marketing Attribution Engine
- Notification Eligibility Engine
- Journey State Machine
- CRM / Lead Pipeline
- Bot & Abuse Protection
- Experimentation Governance
- Noble Introductions Circle / Trusted Referral Engine

Allowed prompts:

- Save this object for private review
- Request a condition note
- Request similar objects privately
- Continue your submission later
- Ask Concierge
- Request Salon access
- Introduce an Estate
- Introduce a Collector

Forbidden prompts:

- discount popups
- fake urgency
- blocking overlays
- spin wheels
- repeated exit traps
- guilt language
- aggressive coupon/referral language
- public commission banners

Rules:

- no behavior tracking without consent where legally required
- no sensitive content in popups, emails, or push notifications
- no creepy personalization language
- no dark patterns
- luxury restraint is mandatory

---

## Stream E — Frontend

Purpose:

Build modular user-facing screens and role shells.

Required shells:

- PublicShell
- MemberShell
- SellerShell
- AdminShell
- MobileShell
- PWAShell

Required feature families:

- public-discovery
- artifacts
- collector-asset-taxonomy
- luxury-collectibles
- auctions
- heritage-passport
- collectors-salon
- private-rooms
- legal-trust-center
- cost-clarity
- viewing-inspection
- introductions-circle
- consignor-intake
- seller-dashboard
- account
- concierge
- market-archive
- noble-library
- journal
- admin
- finance
- logistics
- growth-intelligence
- settings-governance

Frontend rules:

- public routes use public DTOs
- private routes require authorization
- Arabic/RTL present from day one
- mobile-first layouts
- no private data in client hydration
- no fake status states
- no direct native/browser API calls where adapter exists

---

## Stream F — Backend

Purpose:

Build authority, data protection, workflows, and auditability.

Required backend domains:

- Identity & Access
- Public DTO Boundary
- CMS
- Collector Asset Taxonomy
- Category Risk Classification
- Artifact / Collector Asset Intake
- Media Vault
- Evidence Vault
- Trust Spine
- Heritage Passport
- Artifact Genome
- Collectors’ Salon / Private Rooms
- Private Sales Desk
- Luxury Collectibles Desk
- Auction Preview
- Legal & Trust Center
- Terms Acceptance
- Cost Clarity
- Viewing & Inspection
- Commercial / Finance Foundation
- Logistics / Custody Foundation
- Legal / Compliance / Risk
- Noble Library
- Growth Intelligence
- Noble Introductions Circle / Trusted Referral Engine
- Audit & Governance
- SMC / SEO / AI Discovery
- PWA / Native Bridge Support
- Localization

Backend rules:

- authorization server-side/rules-side
- no UI-only security
- every sensitive action audited
- no payment success without proof
- no KYC/sanctions clearance without process
- no live auction bidding before trusted authority
- no seller self-publishing

---

## Stream G — Database / Data Model

Purpose:

Design scalable, modular data foundation.

Required data areas:

- users/roles/permissions
- consent records
- collector asset categories
- category risk profiles
- category metadata schemas
- artifact/submission records
- luxury collectible profiles
- media/document/evidence records
- trust spine scores
- Heritage Passport
- Artifact Genome
- Collectors’ Salon/private rooms
- auction preview and registration
- legal/trust pages and versions
- terms acceptance records
- cost breakdown records
- viewing/inspection records
- CMS content and versions
- Noble Library records
- lead/CRM records
- introduction/referral records
- audit logs

Database rules:

- explicit ownership fields
- tenant/user scope where needed
- immutable audit where possible
- soft delete/supersession for sensitive records
- versioning for CMS/legal/terms/evidence
- public/private visibility fields
- category-specific metadata without schema chaos
- indexing for public discovery and admin queues

---

## Stream H — Deployment + Production Readiness

Purpose:

Prepare safe environments and release discipline.

Required environments:

- local development
- preview/staging
- production

Required deployment controls:

- environment variable management
- secrets management
- build pipeline
- lint/typecheck/test gates
- migration process
- rollback process
- CDN/media strategy
- logging/monitoring
- error tracking
- backup/restore plan
- security headers
- CSP strategy
- rate limiting
- bot protection
- uptime/health checks
- audit log retention policy

Production readiness rules:

- no production deploy without proof packet
- no secrets in frontend
- no debug/dev auth in production
- no provider claim without provider proof
- no app-store submission before mobile readiness proof

---

## Stream I — SMC / SEO / AI Discovery

Purpose:

Make public-safe Noble content discoverable by search engines and AI crawlers without leaking private data.

Required outputs:

- robots.txt
- sitemap.xml
- llms.txt
- llms-full.txt
- JSON-LD
- Open Graph metadata
- Twitter/X card metadata
- canonical URLs
- hreflang
- public OpenAPI manifest, if exposed

Rules:

- public DTO only
- no private data
- no internal passport/genome
- no evidence vault files
- no private room content
- no false affiliation
- no authenticity/valuation/legal overclaiming

---

## Stream J — Legal / Compliance / Trust Content

Purpose:

Prepare the platform for serious high-value transactions and future app-store review.

Required public trust pages:

- Auction Rules
- Buyer Terms
- Seller Terms
- Private Sale Terms
- Distance Sale / Remote Acquisition Terms
- Refund & Returns Policy
- Payment & Bank Transfer Instructions
- Buyer Premium & Fees
- Viewing & Collection Policy
- Shipping / Custody Policy
- Privacy Policy
- Personal Data Protection
- Cookie Policy
- KYC / Sanctions Review Explanation
- IP / Brand Affiliation Disclaimer
- Museum / Institution Affiliation Disclaimer
- App Privacy / Mobile App Data Use Explanation
- Account/Data Deletion Explanation

Rules:

- CMS-managed
- versioned
- multilingual
- legally reviewed where required
- accepted/acknowledged where required
- terms version stored

---

## 8. Day-One Build Phases

## Phase 0 — Source Pack Lock

Goal:

Lock all source files before coding.

Required files:

- Master Blueprint
- SRS
- Implementation Structure
- AI Builder Skills
- UI/UX Directions
- Day-One Build Program

Proof:

- files aligned
- no Regulated Luxury Consumables
- no mobile rebuild risk
- no fake capability claims

---

## Phase 1 — Architecture + Stack Lock

Goal:

Choose stack and architecture with no drift.

Deliver:

- stack decision matrix
- app-store readiness checklist
- security zone map
- database/entity map
- route map
- DTO map
- CMS model
- category risk matrix
- native bridge adapter plan
- deployment environment plan

Proof:

- stack supports SSR/PWA/mobile-wrapper/CMS/security/Arabic/RTL
- public/private boundary mapped
- app-store future risks documented

---

## Phase 2 — Design System + UI Foundation

Goal:

Build Noble design language before feature screens.

Deliver:

- tokens
- typography
- Arabic typography
- shells
- layout patterns
- mobile nav
- wizard pattern
- card patterns
- dossier/salon/legal/CMS layouts

Proof:

- desktop/mobile/RTL visual QA
- accessibility baseline
- no generic SaaS/resale style

---

## Phase 3 — Backend + DB Foundation

Goal:

Build secure authority and data foundation.

Deliver:

- auth/roles
- permissions
- DB schemas
- DTO layer
- audit foundation
- consent records
- category taxonomy
- CMS base schema
- media/evidence base schema

Proof:

- role access tests
- DTO tests
- audit event creation
- no private data in public payloads

---

## Phase 4 — CMS + Legal Trust Foundation

Goal:

Make content and legal/trust pages governed from the start.

Deliver:

- CMS editor
- CMS workflow
- content versioning
- rollback
- multilingual fields
- Legal & Trust Center content model
- terms acceptance model
- SEO/SMC fields

Proof:

- draft/review/publish works
- legal pages versioned
- terms acceptance record works
- Arabic/RTL CMS rendering works

---

## Phase 5 — Media Vault + Evidence Vault

Goal:

Protect files before public object workflows.

Deliver:

- private originals
- public variants
- EXIF/GPS stripping
- thumbnails
- signed URLs
- evidence vault
- media access logs

Proof:

- original paths not public
- signed URLs expire
- public variants scrubbed

---

## Phase 6 — Intake + Category Smart Forms

Goal:

Build controlled seller/owner/estate intake.

Deliver:

- smart intake wizard
- category-specific metadata
- draft save/resume
- evidence checklist
- review status
- admin intake queue

Proof:

- no auto-publish
- category logic works
- Arabic/RTL wizard works
- review status audited

---

## Phase 7 — Trust Spine + Review States

Goal:

Make the platform smart-by-default through evidence logic.

Deliver:

- Evidence Readiness Score
- review states
- confidence labels
- risk flags
- acquisition path recommender
- missing evidence logic

Proof:

- score explains itself
- no authenticity/valuation/legal claim
- category-specific blockers work

---

## Phase 8 — Public Discovery + Luxury Collectibles

Goal:

Build public category browsing and object presentation.

Deliver:

- Explore
- category pages
- artifact cards
- luxury collectible cards
- object detail
- Cost Clarity Panel
- Viewing & Inspection Panel
- CTAs
- SEO/SMC output

Proof:

- public DTO only
- no private data in HTML/metadata
- mobile/RTL QA
- no resale clutter

---

## Phase 9 — Member Experience + Collectors’ Salon

Goal:

Build private collector experience.

Deliver:

- Collection Desk
- Watchlist
- Collectors’ Salon
- Private Rooms
- access/expiry/revocation
- condition requests
- sourcing requests
- messages

Proof:

- unauthorized access blocked
- private content not cached
- access logs created

---

## Phase 10 — Noble Library + Market Archive

Goal:

Build public cultural intelligence and archive authority.

Deliver:

- Heritage Atlas
- Museum Index
- Maison Heritage
- Collector Guides
- Glossary & Taxonomy
- Market Archive

Proof:

- source/review states exist
- no false affiliation
- no restricted content copied

---

## Phase 11 — Growth Intelligence + Introductions Circle

Goal:

Build smart lead capture and trusted introductions.

Deliver:

- consent engine
- smart CTAs
- luxury exit-intent
- lead routing
- CRM pipeline
- abandonment recovery
- introduction links
- double opt-in
- conflict disclosure
- reward eligibility

Proof:

- no dark patterns
- consent respected
- no sensitive prompt leakage
- no public affiliate behavior

---

## Phase 12 — Auction Preview + Registration

Goal:

Build auction discovery without live bidding authority.

Deliver:

- auction calendar
- lot preview
- registration
- terms acceptance
- buyer premium disclosure
- viewing/inspection integration
- reminders

Proof:

- no live bidding
- reserve hidden
- terms version stored

---

## Phase 13 — Commercial + Logistics Foundation

Goal:

Prepare manual commercial and custody workflows without fake integrations.

Deliver:

- manual invoice model
- payment status proof model
- bank transfer instruction model
- finance audit
- viewing appointment
- shipping request
- custody records

Proof:

- no fake payment success
- no fake shipping provider
- payment/custody changes audited

---

## Phase 14 — Advanced PWA + Mobile Readiness QA

Goal:

Make the web platform app-like and future-wrapper-safe.

Deliver:

- install prompt
- service worker
- offline fallback
- public-safe cache
- deep links
- mobile upload polish
- secure session behavior
- network status UX
- native bridge validation

Proof:

- PWA installable
- private content not cached
- mobile journeys pass QA
- native bridge adapters intact

---

## Phase 15 — Production Deployment Foundation

Goal:

Prepare safe production operation.

Deliver:

- staging/production environments
- CI/CD gates
- secrets management
- logging/monitoring
- backups
- rollback
- security headers
- rate limiting
- uptime checks

Proof:

- production config has no dev auth
- secrets not exposed
- build/test gates pass
- rollback documented

---

## Phase 16 — Future Mobile App Packaging Readiness

Goal:

Prepare for actual iOS/Android wrapper after platform maturity.

Deliver:

- native wrapper assessment
- app-store compliance checklist
- privacy/data safety mapping
- app icon/splash assets
- native permission map
- deep link/universal link map
- push notification privacy copy
- account/data deletion flow proof
- store listing content draft

Proof:

- not a thin website wrapper
- privacy disclosures accurate
- permissions minimized
- app-store legal/support links ready

---

## 9. Mobile-App-Ready Stop Lines

- Do not build a separate React Native frontend now.
- Do not duplicate screens for mobile.
- Do not call native APIs directly from feature screens.
- Do not submit a thin web wrapper to app stores.
- Do not request permissions before user need is clear.
- Do not use push notifications for sensitive private content.
- Do not track users without consent where required.
- Do not store sensitive evidence/docs in mobile cache.
- Do not move auction/payment/KYC/legal authority to the app/client.

---

## 10. Production Stop Lines

- No provider claim before provider proof.
- No payment success without verified manual/provider proof.
- No KYC/sanctions clearance without process/provider.
- No shipping guarantee without provider/process.
- No live auction bidding before trusted authority.
- No production deploy with dev auth enabled.
- No private data in public output.
- No Regulated Luxury Consumables.
- No public affiliate/coupon referral system.

---

## 11. Final Build North Star

Noble Collectors must be built as:

> A modular, multilingual, PWA-first, mobile-app-ready luxury collector asset platform with built-in CMS governance, smart-by-default workflows, private collector access, evidence-backed trust, controlled category risk, Noble Library cultural intelligence, Cost Clarity, Viewing & Inspection, Legal & Trust Center, Noble Introductions Circle, and future-ready foundations for native apps, auction authority, payments, KYC, logistics, and advanced intelligence.

Success means:

- no mobile rebuild later
- no fake capability claims
- no security shortcuts
- no broken Arabic/RTL
- no generic marketplace UI
- no wasted AI-builder credits
- no public/private data leaks
- no app-store readiness surprises

