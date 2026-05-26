# Noble Collectors / نوبل كوليكتورز
# Software Requirements Specification / SRS V3 — Mobile-App-Ready
# 18-05-2026

## 1. Document Purpose

This SRS defines the functional requirements, non-functional requirements, data requirements, security requirements, mobile-app-ready requirements, localization requirements, module requirements, proof expectations, and stop lines for Noble Collectors.

This file is a source-of-truth planning document for starting the platform. It does not describe anything as built, active, deployed, tested, integrated, connected, submitted to app stores, or production-ready.

---

## 2. Product Scope

Noble Collectors shall support a curated luxury collector asset platform covering:

- Cultural Assets
- Fine Art & Visual Culture
- Decorative Arts & Design
- Luxury Collectibles
- Collector Memorabilia
- Science, Space & Natural History
- Numismatics & Philately
- Collector Mobility & Ultra-Assets

The system shall exclude Regulated Luxury Consumables entirely.

---

## 3. User Roles

The platform shall support the following role families:

- Public Visitor
- Registered Member
- Approved Collector
- Verified Collector
- Seller / Owner
- Estate / Advisor
- Professional Introducer
- Trusted Advisor
- Concierge
- Reviewer
- Specialist
- Auction Operator
- Finance Operator
- Logistics Operator
- CMS Viewer
- CMS Editor
- Native Language Reviewer
- Legal/IP Reviewer
- SEO/SMC Manager
- Publisher
- Admin
- Platform Owner

---

## 4. Functional Requirements

### FR-001 Public Discovery

The system shall allow public users to browse public-safe collector assets through curated pages and object detail pages.

Requirements:

- public DTOs only
- category filters
- curated category pages
- no private data leakage
- no raw internal records on public routes
- no open resale behavior
- no Regulated Luxury Consumables

### FR-002 Collector Asset Taxonomy

The system shall support the Collector Asset Taxonomy covering Cultural Assets, Fine Art & Visual Culture, Decorative Arts & Design, Luxury Collectibles, Collector Memorabilia, Science/Space/Natural History, Numismatics & Philately, and Collector Mobility & Ultra-Assets.

The system shall not support wine, whisky, rare spirits, alcohol-related collectible trading, or alcohol marketplace flows.

### FR-003 Category Risk Classification

The system shall classify categories and objects using risk tiers:

- Tier 0 — Public-safe editorial/reference only
- Tier 1 — Standard collectible review
- Tier 2 — Specialist review required
- Tier 3 — Legal/compliance review required
- Tier 4 — Restricted/gated/licensed/partner-only

Risk tier shall affect intake, evidence, review, public visibility, private room eligibility, auction preview eligibility, private sale eligibility, acquisition path, and legal/compliance escalation.

### FR-004 Built-In CMS

The system shall provide a built-in CMS for governed content, including landing pages, page sections, Journal, Noble Library, Heritage Atlas, Museum Index, Maison Heritage, Collector Guides, Glossary, category pages, legal/disclaimer content, email templates, notification templates, SEO records, SMC records, version history, rollback, and multilingual publishing states.

### FR-005 CMS Workflow

CMS content shall support these states:

- Draft
- Source Review Needed
- Native Language Review Needed
- Legal/IP Review Needed
- Security/Public-Safe Review Needed
- Approved for Public Preview
- Scheduled
- Published
- Archived
- Superseded

Sensitive content shall not publish without required review state.

### FR-006 Artifact / Collector Asset Intake

The system shall provide guided seller, owner, advisor, and estate intake with purpose selection, category selection, category-specific metadata, media upload, document upload, ownership declaration, provenance notes, condition/restoration notes, save draft, continue later, evidence request response, review status tracking, risk tier assignment, and sale path recommendation.

No submission shall become public automatically.

### FR-007 Category-Specific Metadata

The system shall support category-specific metadata schemas for watches, jewelry/gemstones, handbags/trunks, design objects, mobility assets, cultural assets, rare books/manuscripts, numismatics, science/natural history, and modern collectibles.

### FR-008 Media Vault

The system shall provide a protected media and document vault with private originals, EXIF/GPS/device metadata stripping for public variants, thumbnails, signed URL access, media visibility state, media review state, and no raw storage paths in public DTOs.

### FR-009 Trust Spine

The system shall support Evidence Readiness Score, Missing Evidence Checklist, Confidence Label System, Condition Completeness, Provenance Strength, Risk Flags, Acquisition Path Recommender, Collector Access Tier, and Review State System.

Trust labels and scores must be explainable and must not imply authenticity, legal clearance, or valuation.

### FR-010 Evidence Readiness Score

The system shall support deterministic Evidence Readiness scoring with 0–100 score range, base score, deductions, hard blockers, category-specific scoring, score snapshot, recalculation triggers, reviewer override with reason, and audit events.

### FR-011 Review State System

Allowed labels include Evidence Strong, Evidence Moderate, Evidence Limited, Research Ongoing, Review Pending, Specialist Review Required, Specialist Review Completed, Passport Available on Request, Provenance Packet Available on Request, and Condition Notes Available.

Forbidden unless separately proven: Certified Authentic, Guaranteed, AI Verified, Officially Appraised, Investment Grade.

### FR-012 Heritage Passport

The system shall support Heritage Passport records with public-safe preview, private dossier, version history, evidence links, custody timeline, provenance timeline, condition/restoration records, and public/private visibility controls.

### FR-013 Artifact Genome

The system shall support an internal Artifact Genome model. It shall be internal by default and not exposed publicly unless explicitly curated and scrubbed.

### FR-014 Collectors’ Salon

The system shall provide Collectors’ Salon as the public-facing private access module and Private Rooms as internal/access-controlled spaces.

Requirements:

- invite/approval access
- expiry
- revocation
- access logs
- confidential pricing controls
- provenance packet requests
- room messaging
- no public caching of confidential content
- access token alone is not enough

### FR-015 Auction Preview

The system shall support auction calendar, auction preview, lot preview, auction registration interest, terms acceptance, bidder approval state, buyer premium disclosure, cost clarity, viewing/inspection availability, calendar reminders, and condition report request.

The system shall not support live bidding until trusted auction authority is separately implemented and proven.

### FR-016 Auction Timing Metadata

The system shall support lot close time, staggered close interval, closure-change notice, reminder state, calendar integration, and auction watch state without activating live bidding.

### FR-017 Private Sales Desk

The system shall support private sale inquiries and workflows including request price, buyer interest tracking, seller preference tracking, concierge-led workflow, confidential access, private offer routing, cost clarity where applicable, and terms acceptance where applicable.

### FR-018 Luxury Collectibles Desk

The system shall support Watch Desk, Jewelry & Gemstone Desk, Handbag & Trunk Desk, Design Object Desk, Modern Collectibles Desk, Collector Mobility Concierge, and Regulated Asset Review excluding wine/spirits/alcohol entirely.

### FR-019 Noble Library

The system shall support Heritage Atlas, Museum Index, Maison Heritage, Collector Guides, and Glossary & Taxonomy.

Rules:

- source-backed only
- review state required
- no false affiliation
- no copied restricted content
- no AI-published content without human review

### FR-020 Legal & Trust Center

The system shall provide a Legal & Trust Center with Auction Rules, Buyer Terms, Seller Terms, Private Sale Terms, Distance Sale / Remote Acquisition Terms, Refund & Returns Policy, Payment & Bank Transfer Instructions, Buyer Premium & Fees, Viewing & Collection Policy, Shipping / Custody Policy, Privacy Policy, Personal Data Protection, Cookie Policy, KYC / Sanctions Review Explanation, IP / Brand Affiliation Disclaimer, Museum / Institution Affiliation Disclaimer, Mobile App Privacy / Data Use Explanation, and Account / Data Deletion Explanation.

Requirements:

- CMS-managed
- versioned
- multilingual
- legally reviewed where required
- public-safe
- accepted/acknowledged where required
- terms version stored when accepted

### FR-021 Terms Acceptance Record

The system shall store terms acceptance records for auctions, private sales, remote acquisitions, seller submissions, introductions/referral terms, privacy/data policies where applicable, and other sensitive workflows.

Record fields:

- terms type
- terms version
- user ID
- timestamp
- locale
- action context
- related object/auction/request
- IP/device context where legally appropriate

### FR-022 Cost Clarity Panel

The system shall provide cost clarity where applicable, including current bid or price state, buyer premium, VAT/tax note, platform/service fee if any, shipping/viewing/storage note, payment method, estimated total, and invoice finalization disclaimer.

No paid, confirmed, won, or cleared state shall be shown without trusted backend/provider/manual proof.

### FR-023 Viewing & Inspection Workflow

The system shall support viewing available/unavailable state, viewing method, appointment window, viewing location type, ID/access requirement, condition viewing note, custody state, and appointment request status.

### FR-024 Growth Intelligence

The system shall support Visitor Intent Scoring, Smart CTA Engine, Luxury Exit-Intent System, Lead Capture Orchestration, Form Intelligence Engine, Abandonment Recovery Engine, Consent & Privacy Preference Engine, Anti-Annoyance Frequency Engine, Lead Quality Score, Marketing Attribution Engine, Notification Eligibility Engine, Journey State Machine, CRM / Lead Pipeline, Bot & Abuse Protection, and Experimentation Governance.

Rules:

- no dark patterns
- no fake urgency
- no discount popups
- consent-aware tracking
- no sensitive content in prompts/notifications

### FR-025 Noble Introductions Circle

The system shall support Noble Introductions Circle as a private introduction model and Trusted Referral Engine internally.

Submodules:

- Introducer Eligibility
- Private Introduction Links
- Double Opt-In Consent
- Referral Lead Capture
- Relationship Disclosure
- Conflict Disclosure
- Lead Routing
- Referral Quality Score
- Reward Eligibility Engine
- Reward Approval Workflow
- Professional Introducer Agreement
- Referral Fraud / Abuse Detection
- Referral Audit Log
- Privacy & Marketing Consent Control
- Referral Terms Acceptance
- CRM Integration

Rules:

- introductions never bypass review, KYC, legal/compliance, category risk, evidence readiness, or private access rules
- no public affiliate/coupon behavior
- no hidden advisor commissions
- no self-referrals
- double opt-in consent required

### FR-026 Member Account

The system shall support Collection Desk, Watchlist, Collectors’ Salon, Auctions, Offers, Condition Requests, Sourcing, Documents, Messages, Account Settings, and Introductions if eligible.

### FR-027 Seller Account

The system shall support My Submissions, Review Status, Evidence Requests, Sale Path, Offers, Consignment, Payments, and Messages.

### FR-028 Admin / Operator Control

The system shall support Dashboard, Applications, CMS, Artifact Intake, Artifacts, Collector Asset Taxonomy, Luxury Collectibles Desk, Auctions, Private Sales, Heritage Passport, Artifact Genome, Evidence Vault, Inquiries, Condition Reports, Finance, Logistics, Market Archive, Noble Library, Growth Intelligence, Introductions Circle, Concierge, Legal & Trust Center, Settings / Governance, and Audit Logs.

### FR-029 PWA Foundation

The system shall support PWA architecture including app manifest, app icons/splash metadata, service worker, offline fallback, install prompt UX, mobile app shell, bottom navigation, public-safe cache strategy, network status UX, and update available state.

The service worker shall not cache private rooms, evidence vault files, admin routes, payment pages, KYC/compliance pages, protected documents, confidential price data, or referral relationship data.

### FR-030 Native Bridge Adapter Layer

The system shall include adapters for:

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

Feature screens shall call adapters, not raw browser/native APIs, when native-app readiness requires abstraction.

### FR-031 Mobile App Readiness

The system shall be structured for future iOS/Android wrapper without duplicate frontend.

Requirements:

- one design system
- one service/business logic layer
- shared route strategy where practical
- shared localization
- shared DTO contracts
- secure auth/session model
- deep-link readiness
- push-notification privacy model
- permission minimization model
- future app icon/splash asset readiness

### FR-032 App Store Privacy/Data Readiness

The system shall maintain a privacy/data mapping sufficient to support future Apple App Store privacy details and Google Play Data Safety disclosures.

The system shall track:

- data categories collected
- purpose of collection
- whether data is linked to user
- whether data is shared with third parties
- retention expectations
- deletion/export pathways
- consent basis where relevant

### FR-033 Account and Data Deletion Readiness

The system shall support a clear account/data deletion request pathway, subject to legal retention and transaction/audit constraints.

User-facing explanation shall be included in the Legal & Trust Center.

### FR-034 Mobile Permission Readiness

The system shall define permission rationale for camera, files/photos, notifications, biometrics, storage, and sharing.

Permissions shall be requested only when user action requires them, not on first launch.

---

## 5. Non-Functional Requirements

### NFR-001 Security

The system must enforce role-based and object-level access control. UI-only access control is forbidden.

### NFR-002 Privacy

Private documents, raw media, notes, provenance packets, internal Heritage Passport records, Artifact Genome, bidder data, seller identity, payment data, referral relationship data, and legal/KYC notes must remain protected.

### NFR-003 Public DTO Safety

Public routes and public machine-readable outputs must use explicit DTO whitelisting.

### NFR-004 Performance

Public pages should support SSR/static rendering where technically possible, optimized media, pagination, lazy loading, and cache discipline.

### NFR-005 PWA Readiness

The system must support PWA-first architecture, app manifest, service worker, offline fallback, mobile app shell, and native-bridge adapter structure.

### NFR-006 Native Wrapper Readiness

The system must not duplicate frontends for future native iOS/Android wrappers. Native-only behavior must be abstracted behind adapters.

### NFR-007 App Store Readiness

The system must preserve future Apple App Store and Google Play readiness by supporting privacy disclosures, permission minimization, account/data deletion explanation, app-like mobile UX, legal links, and no thin-wrapper dependency.

### NFR-008 Localization

The system must support English and Arabic from day one, with future support for French, German, Russian, and Dutch.

Arabic must be true RTL and native-quality.

### NFR-009 CMS Governance

CMS content must support workflow states, review gates, versioning, rollback, multilingual publishing, SEO/SMC output, and public-safe serialization.

### NFR-010 Auditability

Sensitive actions must create audit events.

### NFR-011 Accessibility

The system should follow accessible UI behavior including keyboard navigation, visible focus states, labels, readable contrast, and modal focus handling.

### NFR-012 Cost Control

The system should avoid unnecessary AI calls, unbounded queries, unnecessary real-time listeners, excessive public media bandwidth, duplicate frontend builds, and unnecessary native app rebuild work.

### NFR-013 Legal and Claim Safety

The system must not overclaim legal, compliance, payment, KYC, shipping, auction, AI, authenticity, valuation, museum, brand, referral, introducer, or native app capabilities.

---

## 6. Security Zones

### Zone 0 — Public Knowledge

Includes landing pages, public artifacts, Noble Library, Journal, Archive, public category pages, and public Legal & Trust Center pages.

Rules:

- public DTO only
- no private fields
- no private JSON hydration
- no private cache leakage

### Zone 1 — Member

Includes account, watchlist, condition requests, sourcing requests, membership status, messages, and eligible introductions.

Rules:

- authenticated only
- owner-scoped
- no cross-user reads

### Zone 2 — Collectors’ Salon / Private Access

Includes Collectors’ Salon, private rooms, confidential previews, private pricing, provenance packet access.

Rules:

- access token alone is not enough
- user + access record + expiry + revocation required
- no public cache

### Zone 3 — Evidence Vault / Heritage Intelligence

Includes raw media, evidence, private passport, Artifact Genome, legal notes, internal review notes.

Rules:

- private storage
- short-lived signed URLs
- append-only/superseded evidence
- strict roles

### Zone 4 — Commercial / Compliance

Includes invoices, payment status, KYC status, sanctions review, legal review, custody records, professional introducer fee decisions.

Rules:

- least privilege
- no payment success without proof
- no KYC/sanctions clearance without process
- no referral payout without approval/contract where relevant

### Zone 5 — Auction Authority

Includes bid submission, bid validation, reserve, auction clock, winner selection, close.

Rules:

- trusted server only
- no client-side winner logic
- no offline bidding
- reserve never exposed

---

## 7. Data Entities

Required conceptual entities include User, UserProfile, Role, Permission, ConsentRecord, CollectorAssetCategory, CategoryRiskProfile, CategoryRequirementSet, CategoryMetadataSchema, CollectorAsset, ArtifactSubmission, EvidenceRequest, MediaAsset, MediaVariant, DocumentAsset, EvidenceItem, HeritagePassport, PassportVersion, ArtifactGenome, CustodyEvent, ProvenanceTimelineEvent, ConditionRecord, PrivateRoom, RoomAccess, Auction, AuctionLot, AuctionRegistration, ConditionRequest, ConciergeRequest, ViewingAppointment, CostBreakdown, TermsAcceptanceRecord, LegalTrustPage, SourcingRequest, LeadRecord, CRMRecord, CMSContent, CMSVersion, SEORecord, SMCRecord, AuditEvent.

Luxury collectible profile entities:

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

Introduction/referral entities:

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

Mobile/app readiness entities:

- MobilePermissionPolicy
- AppPrivacyDataMap
- DeviceSession
- PushNotificationPreference
- DeepLinkRecord
- AppVersionRecord
- AccountDeletionRequest
- DataExportRequest

---

## 8. Navigation Requirements

### Public Nav

- Explore
- Auctions
- Collectors’ Salon
- Heritage Passport
- Sell / Submit
- Estate Collections
- Noble Library
- Journal
- Concierge
- Membership
- العربية / language switch

### Member Nav

- My Collection Desk
- Watchlist
- Collectors’ Salon
- Auctions
- Offers
- Condition Requests
- Sourcing
- Documents
- Messages
- Account
- Introductions, if eligible

### Seller Nav

- My Submissions
- Review Status
- Evidence Requests
- Sale Path
- Offers
- Consignment
- Payments
- Messages

### Admin Nav

- Dashboard
- Applications
- CMS
- Artifact Intake
- Artifacts
- Collector Asset Taxonomy
- Luxury Collectibles Desk
- Auctions
- Private Sales
- Heritage Passport
- Artifact Genome
- Evidence Vault
- Inquiries
- Condition Reports
- Finance
- Logistics
- Market Archive
- Noble Library
- Growth Intelligence
- Introductions Circle
- Concierge
- Legal & Trust Center
- Mobile Readiness
- Settings / Governance
- Audit Logs

---

## 9. Proof Requirements

Every module must prove:

- role access behavior
- public/private boundary
- DTO safety
- Arabic/RTL behavior
- CMS impact where applicable
- PWA/mobile behavior where applicable
- audit events where sensitive
- category/risk handling where applicable
- cost clarity accuracy where applicable
- terms version acceptance where applicable
- mobile permission/privacy impact where applicable
- no fake claims
- no excluded categories reintroduced

---

## 10. Stop Lines

- Do not include Regulated Luxury Consumables.
- Do not create wine/whisky/spirits modules.
- Do not create alcohol marketplace, concierge, or auction flows.
- Do not create public affiliate/coupon/referral behavior.
- Do not create open resale behavior.
- Do not imply brand/museum affiliation.
- Do not use restricted logos/images.
- Do not claim authentication without process.
- Do not claim investment returns.
- Do not allow seller self-publishing.
- Do not expose private evidence, seller identity, buyer identity, bidder identity, reserve price, internal passport/genome data, referral relationship data, or raw media.
- Do not build duplicate native/mobile frontends.
- Do not submit a thin web wrapper as a native app.
- Do not request device permissions before user need.
- Do not store sensitive evidence/docs in mobile cache.
- Do not move auction/payment/KYC/legal authority to app/client.

