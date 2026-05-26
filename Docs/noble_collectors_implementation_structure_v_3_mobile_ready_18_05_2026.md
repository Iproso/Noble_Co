# Noble Collectors / نوبل كوليكتورز
# Implementation Structure V3 — Mobile-App-Ready
# 18-05-2026

## 1. Document Purpose

This file defines the implementation structure for Noble Collectors: backend domains, frontend feature folders, database structure, route structure, deployment streams, mobile-app-ready architecture, module sequencing, scalability rules, versioning principles, proof expectations, and AI-builder execution boundaries.

This file is a source-of-truth implementation starter. It does not describe anything as built, active, deployed, tested, integrated, connected, submitted to app stores, or production-ready.

---

## 2. Implementation Philosophy

Noble must be implemented as a modular trust platform, not as pages stitched together.

The implementation must preserve:

- luxury positioning
- Arabic/RTL
- PWA-first structure
- mobile-first structure
- future native-wrapper readiness
- app-store-readiness-aware architecture
- one frontend codebase
- built-in CMS governance
- public/private data boundaries
- category risk classification
- Legal & Trust Center discipline
- Cost Clarity and Viewing/Inspection logic
- Noble Introductions Circle consent and conflict controls
- smart-by-default workflows
- smart marketing with restraint
- no fake auction/payment/KYC/shipping/legal/AI claims
- no Regulated Luxury Consumables
- no public affiliate/coupon/referral behavior
- no duplicate mobile frontend

---

## 3. Stack Decision Requirement

Before implementation starts, the final stack must be selected through a decision matrix.

The stack must support:

- SSR/static public pages
- strict object-level authorization
- protected media
- public DTO serialization
- multilingual EN/AR + future languages
- true RTL
- PWA installability
- native-wrapper-ready architecture
- audit logging
- CMS workflows
- Legal & Trust Center versioning
- terms acceptance records
- future auction authority
- scalable file/media handling
- app-store privacy/data mapping
- deployment pipelines
- cost-control at runtime and build time

Candidate stack families may include:

- Firebase/Firestore-centered architecture
- Next.js + Supabase/Postgres/RLS
- Hybrid SSR frontend + Firebase backend
- Postgres core + protected object storage + dedicated auction authority service

No stack may be selected because it is trendy. It must protect trust, privacy, scalability, cost, future operations, and future mobile wrapper readiness.

---

## 4. Day-One Build Streams

### Stream A — AI Builder Skills + Execution Control

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

### Stream B — Design System + UI Foundation

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

### Stream C — Smart Platform UX

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

### Stream D — Smart Marketing + Growth Intelligence

Purpose:

Capture qualified leads, detect interest, and build Noble’s lead database without bothering visitors or damaging luxury trust.

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

### Stream E — Frontend

Purpose:

Build modular user-facing screens and role shells.

Required shells:

- PublicShell
- MemberShell
- SellerShell
- AdminShell
- MobileShell
- PWAShell

### Stream F — Backend

Purpose:

Build authority, data protection, workflows, and auditability.

Required domains are listed in Section 5.

### Stream G — Database / Data Model

Purpose:

Design scalable, modular data foundation with versioning, ownership, visibility, audit, and category-specific metadata.

### Stream H — Deployment + Production Readiness

Purpose:

Prepare safe environments and release discipline.

Required environments:

- local development
- preview/staging
- production

Required controls:

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

### Stream I — SMC / SEO / AI Discovery

Purpose:

Make public-safe Noble content discoverable without leaking private data.

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

### Stream J — Legal / Compliance / Trust Content

Purpose:

Prepare the platform for serious high-value transactions and future app-store review.

Required public trust pages include Legal & Trust Center, app privacy, data use, and account/data deletion explanation.

---

## 5. Backend Domains

Required backend domains:

1. Identity & Access
2. Public DTO Boundary
3. Built-In CMS
4. Collector Asset Taxonomy
5. Category Risk Classification
6. Artifact / Collector Asset Intake
7. Media Vault
8. Evidence Vault
9. Trust Spine
10. Heritage Passport
11. Artifact Genome
12. Collectors’ Salon / Private Rooms
13. Private Sales Desk
14. Luxury Collectibles Desk
15. Auction Preview
16. Legal & Trust Center
17. Terms Acceptance
18. Cost Clarity
19. Viewing & Inspection
20. Commercial / Finance Foundation
21. Logistics / Custody Foundation
22. Legal / Compliance / Risk
23. Noble Library
24. Growth Intelligence
25. Noble Introductions Circle / Trusted Referral Engine
26. Audit & Governance
27. SMC / SEO / AI Discovery
28. PWA / Native Bridge Support
29. Mobile App Readiness / App Store Compliance Mapping
30. Localization

---

## 6. Backend Entity Groups

### Identity & Access

- User
- UserProfile
- Role
- Permission
- MembershipApplication
- CollectorAccessTier
- AdminRole
- SessionAudit
- ConsentRecord

### Collector Asset Taxonomy

- CollectorAssetCategory
- CollectorAssetSubcategory
- CategoryRiskProfile
- CategoryRequirementSet
- CategoryMetadataSchema
- CategoryReviewPolicy
- CategoryVisibilityPolicy
- CategoryLocalizationRecord

### Artifact / Intake

- CollectorAsset
- ArtifactSubmission
- SubmissionDraft
- EvidenceRequest
- SubmissionStatusHistory
- OwnerDeclaration
- SubmissionMedia
- SubmissionDocument

### Media / Evidence

- MediaAsset
- MediaVariant
- DocumentAsset
- WatermarkProfile
- MediaAccessLog
- EvidenceItem
- EvidenceVersion
- EvidenceAccessLog

### Trust Spine

- EvidenceReadinessScore
- EvidenceScoreSnapshot
- MissingEvidenceItem
- ConfidenceLabel
- RiskFlag
- ReviewState
- AcquisitionPathRecommendation

### Heritage Intelligence

- HeritagePassport
- PassportVersion
- CustodyEvent
- ProvenanceTimelineEvent
- ConditionRecord
- RestorationRecord
- ArtifactGenome
- GenomeAttribute
- ResearchGap

### Luxury Collectibles

- WatchProfile
- JewelryProfile
- GemstoneProfile
- HandbagProfile
- TrunkProfile
- DesignObjectProfile
- ModernCollectibleProfile
- MobilityAssetProfile
- AuthenticityReviewState
- SpecialistReviewState
- MaisonReference

### Collectors’ Salon / Private Rooms

- SalonRoom
- PrivateRoom
- RoomAccess
- RoomInvite
- RoomNarrative
- ConfidentialPrice
- ProvenancePacketRequest
- RoomAccessLog
- RoomMessage

### Auction Preview

- Auction
- AuctionLot
- AuctionRegistration
- AuctionTermsAcceptance
- BidderApproval
- BuyerPremiumPolicy
- LotWatchlist
- LotTimingMetadata
- AuctionReminder

Future auction authority entities only when required:

- Bid
- BidAudit
- AuctionClock
- IdempotencyRecord
- AuctionCloseRecord
- WinnerRecord
- ReserveEvaluation

### Legal & Trust Center

- LegalTrustPage
- LegalTrustVersion
- PolicyReviewState
- TermsAcceptanceRecord
- BuyerTerms
- SellerTerms
- AuctionRules
- PrivateSaleTerms
- RefundReturnPolicy
- PaymentInstructionPolicy
- ViewingCollectionPolicy
- ShippingCustodyPolicy
- PrivacyPolicy
- DataProtectionPolicy
- CookiePolicy
- KycSanctionsExplanation
- BrandAffiliationDisclaimer
- MuseumInstitutionDisclaimer
- MobileAppPrivacyNotice
- AccountDataDeletionPolicy

### Cost Clarity

- CostBreakdown
- BuyerPremiumRule
- TaxVatNote
- ServiceFeeNote
- StorageFeeNote
- ShippingEstimateNote
- PaymentMethodNote
- InvoiceFinalizationDisclaimer

### Viewing & Inspection

- ViewingAvailability
- ViewingAppointment
- ViewingLocationType
- ViewingWindow
- InspectionRequest
- InspectionStatus
- CustodyState
- ConditionViewingNote

### CMS

- CMSContent
- CMSVersion
- CMSWorkflowState
- CMSReview
- TranslationRecord
- SEORecord
- SMCRecord
- LegalContentBlock
- EmailTemplate
- NotificationTemplate

### Noble Library

- HeritageAtlasEntry
- MuseumProfile
- MaisonHeritageProfile
- CollectorGuide
- GlossaryTerm
- TaxonomyTerm
- SourceReference
- EditorialReviewState

### Growth Intelligence

- VisitorIntentSignal
- VisitorIntentScore
- SmartCTAConfig
- LeadRecord
- CRMRecord
- JourneyState
- AbandonmentRecord
- NotificationPreference
- AttributionRecord
- BotRiskSignal
- ExperimentRecord

### Noble Introductions Circle

- IntroducerProfile
- IntroductionInvitation
- ReferralLead
- ReferralConsentRecord
- RelationshipDisclosure
- ConflictDisclosure
- ReferralTermsAcceptance
- ReferralQualityScore
- ReferralRewardRule
- ReferralRewardEligibility
- ReferralRewardApproval
- ReferralPayoutRecord, only if cash payout exists
- ReferralAbuseFlag
- ReferralAuditEvent

### Mobile / App Readiness

- MobilePermissionPolicy
- AppPrivacyDataMap
- DeviceSession
- PushNotificationPreference
- DeepLinkRecord
- AppVersionRecord
- AccountDeletionRequest
- DataExportRequest
- AppStoreComplianceChecklist

### Commercial / Logistics

- Invoice
- PaymentStatus
- ManualPaymentVerification
- BuyerPremium
- SellerCommission
- SellerPayout
- RefundDispute
- ObjectLocation
- PickupRequest
- ShippingRequest
- HandoverCondition

### Audit

- AuditEvent
- SecurityEvent
- AdminActionLog
- VisibilityChangeLog
- AccessLog
- ReviewDecisionLog
- RoleChangeLog
- DataExportLog

---

## 7. Public DTO Families

Required public-safe DTOs:

- PublicArtifactCardDTO
- PublicArtifactDetailDTO
- PublicCollectorAssetCategoryDTO
- PublicLuxuryCollectibleDTO
- PublicWatchDTO
- PublicJewelryDTO
- PublicHandbagDTO
- PublicDesignObjectDTO
- PublicPassportPreviewDTO
- PublicAuctionDTO
- PublicAuctionLotDTO
- PublicCostClarityDTO
- PublicViewingAvailabilityDTO
- PublicLegalTrustPageDTO
- PublicArchiveRecordDTO
- PublicJournalArticleDTO
- PublicLibraryPageDTO
- PublicMuseumProfileDTO
- PublicMaisonHeritageDTO
- PublicGlossaryTermDTO

Rules:

- whitelist only
- no raw database rows
- no storage paths
- no private evidence
- no internal passport/genome
- no reserve price
- no bidder identity
- no referral relationship data

---

## 8. Frontend Structure

Recommended structure:

```txt
src/
  app/
    AppShell
    PublicShell
    MemberShell
    SellerShell
    AdminShell
    MobileShell
    PWAShell

  design-system/
    tokens/
    components/
    patterns/
    layouts/
    icons/
    rtl/

  pwa/
    manifest
    serviceWorkerRegistration
    offlineFallback
    installPrompt

  native-bridge/
    notificationAdapter
    cameraAdapter
    fileUploadAdapter
    shareAdapter
    deepLinkAdapter
    storageAdapter
    authSessionAdapter
    paymentAdapter
    hapticsAdapter
    biometricAdapter
    secureStorageAdapter
    networkStatusAdapter
    appUpdateAdapter
    permissionAdapter
    privacyConsentAdapter
    analyticsConsentAdapter
    appStoreComplianceAdapter

  cms/
    editor/
    renderer/
    blocks/
    templates/
    seo/
    workflow/

  features/
    public-discovery/
    artifacts/
    collector-asset-taxonomy/
    luxury-collectibles/
    auctions/
    heritage-passport/
    collectors-salon/
    private-rooms/
    legal-trust-center/
    cost-clarity/
    viewing-inspection/
    introductions-circle/
    consignor-intake/
    seller-dashboard/
    account/
    concierge/
    market-archive/
    noble-library/
    journal/
    admin/
    finance/
    logistics/
    growth-intelligence/
    mobile-readiness/
    settings-governance/
```

Each feature should contain:

```txt
screens/
components/
services/
adapters/
state/
types/
schemas/
```

---

## 9. Route Structure

### Public Routes

- `/`
- `/explore`
- `/explore/[category]`
- `/artifacts/[slug]`
- `/luxury-collectibles`
- `/luxury-collectibles/[category]`
- `/auctions`
- `/auctions/[slug]`
- `/collectors-salon`
- `/heritage-passport`
- `/sell`
- `/submit-artifact`
- `/estate-collections`
- `/concierge`
- `/membership`
- `/introductions`
- `/journal`
- `/journal/[slug]`
- `/library`
- `/library/heritage-atlas`
- `/library/heritage-atlas/[slug]`
- `/library/museums`
- `/library/museums/[slug]`
- `/library/maison-heritage`
- `/library/maison-heritage/[slug]`
- `/library/guides`
- `/library/guides/[slug]`
- `/library/glossary`
- `/archive`
- `/archive/[slug]`
- `/legal-trust`
- `/legal-trust/[slug]`

Public routes must use public DTOs only.

### Member Routes

- `/account`
- `/account/collection-desk`
- `/account/watchlist`
- `/account/collectors-salon`
- `/account/private-rooms`
- `/account/auctions`
- `/account/offers`
- `/account/condition-requests`
- `/account/sourcing`
- `/account/documents`
- `/account/messages`
- `/account/introductions`
- `/account/settings`

### Seller Routes

- `/seller`
- `/seller/submissions`
- `/seller/submissions/[id]`
- `/seller/evidence-requests`
- `/seller/review-status`
- `/seller/sale-path`
- `/seller/offers`
- `/seller/consignment`
- `/seller/payments`
- `/seller/messages`

### Admin Routes

- `/admin`
- `/admin/applications`
- `/admin/cms`
- `/admin/cms/pages`
- `/admin/cms/library`
- `/admin/cms/journal`
- `/admin/cms/glossary`
- `/admin/artifact-intake`
- `/admin/artifacts`
- `/admin/collector-asset-taxonomy`
- `/admin/luxury-collectibles`
- `/admin/auctions`
- `/admin/private-sales`
- `/admin/heritage-passports`
- `/admin/artifact-genomes`
- `/admin/evidence-vault`
- `/admin/inquiries`
- `/admin/condition-reports`
- `/admin/orders-finance`
- `/admin/logistics`
- `/admin/market-archive`
- `/admin/noble-library`
- `/admin/growth-intelligence`
- `/admin/introductions-circle`
- `/admin/legal-trust-center`
- `/admin/mobile-readiness`
- `/admin/settings-governance`
- `/admin/audit-logs`

---

## 10. PWA / Native Bridge Structure

Primary product path: PWA.

Future mobile path: native iOS/Android wrapper using the same web codebase.

Rules:

- no duplicate frontend
- one design system
- one route system where practical
- one business logic layer
- one API contract
- native-only behavior behind adapters

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

Forbidden offline authority:

- auction bidding
- payment confirmation
- KYC/sanctions approval
- legal authority
- private room authorization decisions
- evidence vault access

---

## 11. Implementation Sequencing

This is capability sequencing, not a claim of build status.

### Phase 0 — Source Pack Lock

Deliver:

- Master Blueprint
- SRS
- Implementation Structure
- AI Builder Skills
- UI/UX Directions
- Day-One Build Program

### Phase 1 — Architecture + Stack Lock

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

### Phase 2 — Design System + UI Foundation

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

### Phase 3 — Backend + DB Foundation

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
- mobile/app readiness records

### Phase 4 — CMS + Legal Trust Foundation

Deliver:

- CMS editor
- CMS workflow
- content versioning
- rollback
- multilingual fields
- Legal & Trust Center content model
- terms acceptance model
- SEO/SMC fields
- app privacy/data use pages
- account/data deletion pages

### Phase 5 — Media Vault + Evidence Vault

Deliver:

- private originals
- public variants
- EXIF/GPS stripping
- thumbnails
- signed URLs
- evidence vault
- media access logs

### Phase 6 — Intake + Category Smart Forms

Deliver:

- smart intake wizard
- category-specific metadata
- draft save/resume
- evidence checklist
- review status
- admin intake queue

### Phase 7 — Trust Spine + Review States

Deliver:

- Evidence Readiness Score
- review states
- confidence labels
- risk flags
- acquisition path recommender
- missing evidence logic

### Phase 8 — Public Discovery + Luxury Collectibles

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

### Phase 9 — Member Experience + Collectors’ Salon

Deliver:

- Collection Desk
- Watchlist
- Collectors’ Salon
- Private Rooms
- access/expiry/revocation
- condition requests
- sourcing requests
- messages

### Phase 10 — Noble Library + Market Archive

Deliver:

- Heritage Atlas
- Museum Index
- Maison Heritage
- Collector Guides
- Glossary & Taxonomy
- Market Archive

### Phase 11 — Growth Intelligence + Introductions Circle

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

### Phase 12 — Auction Preview + Registration

Deliver:

- auction calendar
- lot preview
- registration
- terms acceptance
- buyer premium disclosure
- viewing/inspection integration
- reminders

No live bidding in this phase.

### Phase 13 — Commercial + Logistics Foundation

Deliver:

- manual invoice model
- payment status proof model
- bank transfer instruction model
- finance audit
- viewing appointment
- shipping request
- custody records

### Phase 14 — Advanced PWA + Mobile Readiness QA

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

### Phase 15 — Production Deployment Foundation

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

### Phase 16 — Future Mobile App Packaging Readiness

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

### Phase 17 — Trusted Auction Authority

Only after legal and technical readiness.

Deliver:

- trusted bid endpoint
- server-owned clock
- idempotency records
- bid validation
- race-condition protection
- reserve evaluation
- anti-sniping/extension logic if used
- auction close
- winner selection
- order generation
- audit events

### Phase 18 — Provider Integrations

Potential integrations:

- payment provider
- KYC/sanctions provider
- logistics provider
- email provider
- push notification provider
- search provider
- analytics provider
- external CRM
- museum/open-data APIs

### Phase 19 — Advanced Intelligence + Future Versions

Potential capabilities:

- Collector Taste Graph
- Quiet Drop Engine
- Similar Sourcing Radar
- market intelligence
- AI-assisted admin/editorial workflows
- collection insight dashboard
- family office workspace
- institution portal
- native wrapper packaging

---

## 12. Versioning Strategy

Use versioning for:

- APIs
- DTOs
- CMS content
- Legal & Trust Center policies
- Terms Acceptance records
- database migrations
- design system tokens
- workflows
- modules
- app privacy/data maps
- mobile permission policies
- proof packets

Example:

```txt
/api/v1/public/artifacts
/api/v1/member/watchlist
/api/v1/admin/intake
```

---

## 13. Proof Pack Template

Every implementation packet must report:

- scope completed
- non-scope preserved
- routes added/changed
- backend entities changed
- DTOs added/changed
- security rules/policies changed
- public/private boundary proof
- Arabic/RTL proof
- mobile/PWA proof
- CMS impact
- SEO/SMC impact
- category risk impact
- Legal & Trust Center impact
- Cost Clarity impact
- Viewing/Inspection impact
- Introductions Circle impact
- app-store/mobile-readiness impact
- cost impact
- tests performed
- browser QA performed
- known gaps
- rollback notes
- claims allowed
- claims forbidden

---

## 14. Implementation Stop Lines

- Do not include Regulated Luxury Consumables.
- Do not build alcohol/wine/spirits modules.
- Do not build public affiliate/coupon/referral behavior.
- Do not build seller self-publishing.
- Do not build open resale marketplace behavior.
- Do not build live auction bidding before trusted authority.
- Do not build fake payment/KYC/shipping/legal integrations.
- Do not expose private data through public routes, CMS, SMC, Open Graph, JSON-LD, or service worker cache.
- Do not build a duplicate mobile frontend.
- Do not submit a thin web wrapper to app stores.
- Do not call native APIs directly from feature screens where adapter abstraction is required.
- Do not request mobile permissions before user need is clear.

