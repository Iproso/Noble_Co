# Noble Collectors / نوبل كوليكتورز
# Master Blueprint V3 — Mobile-App-Ready Source of Truth
# 18-05-2026

## 1. Document Purpose

This Master Blueprint defines the strategic product identity, category scope, module families, trust architecture, luxury positioning, mobile-app-ready direction, referral/introduction model, navigation, and stop lines for Noble Collectors / نوبل كوليكتورز.

This file is a source-of-truth planning document for starting the platform. It must not be interpreted as a build report, deployment proof, production-readiness claim, provider integration record, app-store submission record, or completion status.

---

## 2. Platform Identity

Noble Collectors is a modular, multilingual, PWA-first, mobile-app-ready luxury collector asset platform for serious collectors, estate owners, family offices, advisors, institutions, sellers, designers, and curated-object buyers.

The platform helps users discover, review, acquire, document, preserve, privately access, and responsibly manage exceptional collector assets through evidence-backed trust, controlled intake, Heritage Passport intelligence, Noble Library cultural context, Collectors’ Salon private access, private-sale workflows, auction-readiness discipline, collector-grade documentation, and discreet private introductions.

### Noble is not

- a generic e-commerce marketplace
- a basic antique shop
- a volume resale app
- a generic auction clone
- an open third-party listing platform
- a public flea-market platform
- a generic wiki
- an AI appraisal tool
- a discount-driven luxury resale website
- an influencer affiliate marketplace
- a thin mobile website wrapper pretending to be a native app

### Noble should feel like

- a private collector office
- a museum-grade cultural archive
- a luxury advisory desk
- a cultural asset dossier system
- an elegant collector salon
- a secure evidence vault
- a premium editorial platform
- a trusted private-introduction network
- a mobile-first collector companion

---

## 3. Positioning

### Short Positioning

> Private access and evidence-backed intelligence for exceptional collector assets.

### Expanded Positioning

> Noble Collectors is a luxury collector asset platform for cultural assets, fine art, design, luxury collectibles, memorabilia, science and historical objects, numismatics, and selected ultra-assets — governed by evidence-backed trust, private access, category-specific review, collector-grade documentation, discreet private introductions, and mobile-app-ready architecture.

### Core Differentiation

Noble is:

- broader than antiques
- more curated than resale marketplaces
- more controlled than open auction aggregators
- more culturally intelligent than generic luxury listings
- more evidence-aware than normal luxury resale
- more private than public marketplaces
- more modular and future-ready than single-category auction sites
- mobile-app-ready without forcing a separate frontend rebuild

---

## 4. Non-Negotiable Product Laws

- Arabic is mandatory from day one.
- True RTL is mandatory from day one.
- Smart-by-default comes before AI.
- PWA-first is mandatory.
- Mobile-first is mandatory.
- Future native-wrapper readiness is mandatory.
- App-store-readiness-aware architecture is mandatory.
- One frontend codebase is mandatory.
- No duplicate mobile frontend.
- No React Native rebuild unless a future strategy explicitly replaces the chosen path.
- Built-in CMS is first-class, not optional.
- Security zones are mandatory.
- Public DTOs are mandatory for public output.
- No private data in public HTML, public APIs, JSON-LD, sitemap, llms files, Open Graph, public CMS output, or service-worker cache.
- No fake auction authority.
- No fake payment capability.
- No fake KYC/sanctions clearance.
- No fake shipping/logistics integration.
- No fake legal authority.
- No AI authenticity, AI valuation, or AI certification claims.
- Every sensitive action must be auditable.
- Every module must be modular and future-upgrade-ready.
- Every public page must feel luxury, calm, and credible.
- Every complex workflow should be wizard-first.
- Kanban/List/Gantt/Timeline views should be used only where they fit the workflow.
- No shallow wizard theater.
- No flat forms pretending to be smart.
- No dead-end flows.
- No broken bilingual assumptions.
- No fake enterprise complexity.
- No generic content-farm behavior.
- No false museum, maison, expert, legal, or institutional affiliation.
- No open seller self-publishing.
- No public affiliate/coupon/referral behavior.

---

## 5. Mobile-App-Ready Product Law

Noble must be built so that once the web/PWA platform is mature, the same codebase can become a native iOS/Android wrapper without rebuilding core screens, business logic, design system, API contracts, localization, or trust rules.

Primary product path:

- PWA and responsive web platform

Future mobile path:

- Native iOS/Android wrapper using the same web codebase through a suitable bridge, such as Capacitor or equivalent technology, when business proof justifies app-store release.

The future mobile app must not be a weak thin wrapper. It must feel like a meaningful collector companion with app-like navigation, safe permissions, mobile-first flows, secure sessions, privacy disclosures, legal/trust access, and native capability readiness.

### Mobile-readiness principles

- one design system
- one route system where practical
- one service layer
- one business logic layer
- one public/private DTO discipline
- one localization system
- adapter-based native capabilities
- app-store privacy/data readiness
- secure deep links
- privacy-safe push notifications
- account/data deletion readiness
- permission minimization

---

## 6. App Store Readiness Principles

The platform must be designed from day one so future Apple App Store and Google Play submission does not require major product rewrite.

### Apple readiness principles

- privacy policy accessible in-app
- accurate app privacy details readiness
- App Tracking Transparency readiness if tracking is used
- clear permission purpose strings
- no unnecessary permissions
- meaningful app functionality beyond a thin website wrapper
- native-feeling navigation and app shell
- account deletion/support flow readiness
- safe UGC/content moderation approach where relevant
- legal/terms links accessible
- no misleading claims

### Google Play readiness principles

- privacy policy available in-app and for Play Console
- Data Safety disclosure readiness
- Android App Bundle readiness
- signing/release management readiness
- permission minimization
- runtime permission explanation
- clear data collection/use/share disclosure
- safe account/data deletion flows where applicable
- store listing asset readiness

---

## 7. Explicit Category Exclusion

The category family previously considered as **Regulated Luxury Consumables** is excluded entirely.

Do not include:

- wine
- whisky
- rare spirits
- alcohol-related collectible trading
- alcohol marketplace flows
- alcohol concierge flows
- alcohol auction flows
- consumable luxury goods requiring alcohol licensing or similar regulated handling

---

## 8. Collector Asset Taxonomy

Noble must be broader than antiques while remaining curated, controlled, evidence-aware, and luxury-grade.

The platform category architecture is named:

## Collector Asset Taxonomy

### A. Cultural Assets

Includes antiquities only where legal and properly documented, Islamic and Middle Eastern art, manuscripts, rare books, maps, historical documents, archival collections, archaeological-sensitive objects under strict review, and regional decorative/cultural objects.

Rules:

- legal/cultural-property review required where relevant
- provenance expectations are high
- public claims must be cautious
- Heritage Passport and Evidence Vault support are central

### B. Fine Art & Visual Culture

Includes modern and contemporary art, old masters, regional art, Middle Eastern art, photography, prints and editions, sculpture, and works on paper.

Rules:

- condition and provenance must be visible through safe trust labels
- no authenticity claims without real review
- no investment-return claims

### C. Decorative Arts & Design

Includes furniture, silver, ceramics, glass, rugs and carpets, lighting, collectible design, objets d’art, and design objects for luxury interiors.

Rules:

- dimensions, condition, material, restoration, and logistics notes are important
- strong fit for interior designers, estate collections, and private residences

### D. Luxury Collectibles

Includes watches, jewelry, gemstones, signed maison jewelry, handbags, trunks, archival luxury accessories, vintage maison objects, and exceptional limited-edition luxury pieces.

Rules:

- trademark-safe presentation required
- no brand affiliation unless real
- no logo use unless licensed or clearly permitted
- authentication/review state must be explicit
- box/papers/service/provenance records should be tracked where relevant
- sanctions/AML/compliance review may be required for high-value objects

### E. Collector Memorabilia

Includes sports memorabilia, entertainment memorabilia, music memorabilia, cinema posters, celebrity/provenance objects, sneakers and streetwear curated only, and modern pop-culture collectibles curated only.

Rules:

- must remain curated and luxury-aligned
- avoid hype-market clutter
- grading/authentication state must be clear
- should live under a controlled Modern Collectibles experience where needed

### F. Science, Space & Natural History

Includes scientific instruments, astrolabes, globes, telescopes, early technology objects, space exploration memorabilia, minerals, meteorites, fossils gated, and natural history specimens gated.

Rules:

- legal/ethical review required for sensitive natural history items
- provenance/export/import documentation may be required
- public educational context should be supported through Noble Library

### G. Numismatics & Philately

Includes coins, medals, currency, stamps, historical paper money, and commemorative issues.

Rules:

- grading and specialist review are important
- counterfeit risk must be handled
- storage/security notes may be required

### H. Collector Mobility & Ultra-Assets

Includes collector cars, historically important motorcycles, racing objects, concours-level mobility assets, collector garages as estate/concierge context, and luxury real estate/yachts/private aviation only as concierge/partner context, not core marketplace categories.

Rules:

- title, inspection, shipping, insurance, storage, and jurisdiction complexity are high
- should start as concierge/partner workflow, not open marketplace
- no ownership/transfer/legal claims unless supported by provider/process

---

## 9. Category Risk Classification

Every category and object must carry a risk classification.

| Risk Tier | Meaning |
|---|---|
| Tier 0 | Public-safe editorial/reference only |
| Tier 1 | Standard collectible review |
| Tier 2 | Specialist review required |
| Tier 3 | Legal/compliance review required |
| Tier 4 | Restricted, gated, licensed, or partner-only |

Rules:

- Risk tier affects intake requirements.
- Risk tier affects public visibility.
- Risk tier affects evidence requirements.
- Risk tier affects review workflow.
- Risk tier affects acquisition path.
- Risk tier affects Collectors’ Salon, public preview, auction preview, and private sale eligibility.

---

## 10. Major Module Families

A. Public Discovery Layer  
B. Collector Experience Layer  
C. Seller / Owner / Estate Intake Layer  
D. Trust Spine Layer  
E. Heritage Intelligence Layer  
F. Auction Workflow Layer  
G. Private Sales & Concierge Layer  
H. Commercial Foundation Layer  
I. Logistics & Custody Layer  
J. Legal, Compliance & Risk Layer  
K. Admin / Operator Control Layer  
L. Built-In CMS & Content Governance Layer  
M. SMC / Public Knowledge Layer  
N. Noble Library / Public Cultural Knowledge Layer  
O. Collector Asset Taxonomy Layer  
P. Luxury Collectibles Desk Layer  
Q. Legal & Trust Center Layer  
R. Cost Clarity + Viewing & Inspection Layer  
S. Noble Introductions Circle Layer  
T. PWA / Mobile Readiness Layer  
U. Native Bridge / App Store Readiness Layer  
V. Growth Intelligence & Lead Capture Layer  
W. Localization & Global Language Layer

---

## 11. Public Navigation

Primary public nav:

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

### Explore Dropdown

- Cultural Assets
- Fine Art & Visual Culture
- Decorative Arts & Design
- Luxury Collectibles
- Collector Memorabilia
- Science, Space & Natural History
- Numismatics & Philately
- Collector Mobility & Ultra-Assets

Do not include Regulated Luxury Consumables.

### Noble Library Dropdown

- Heritage Atlas
- Museum Index
- Maison Heritage
- Collector Guides
- Glossary & Taxonomy

### Trust / Legal Footer Links

- Legal & Trust Center
- Auction Rules
- Buyer Terms
- Seller Terms
- Private Sale Terms
- Payment & Bank Transfer Instructions
- Buyer Premium & Fees
- Viewing & Collection Policy
- Shipping / Custody Policy
- Refund & Returns Policy
- Privacy Policy
- Personal Data Protection
- Cookie Policy
- KYC / Sanctions Review Explanation
- Brand / Maison Affiliation Disclaimer
- Museum / Institution Affiliation Disclaimer
- Mobile App Privacy / Data Use Explanation
- Account / Data Deletion Explanation

---

## 12. Naming Decisions

Use:

- **Collectors’ Salon** as the public-facing premium private-access module.
- **Private Rooms** as the internal/access-controlled subfeature.
- **Noble Library** as the public cultural knowledge layer.
- **Maison Heritage** for luxury house/brand history.
- **Collector Asset Taxonomy** for the category system.
- **Luxury Collectibles Desk** for watches, jewelry, handbags, design objects, modern collectibles, and mobility concierge.
- **Legal & Trust Center** for public terms, policies, compliance explanations, and trust documentation.
- **Noble Introductions Circle** for the private introduction/referral program.
- **Trusted Referral Engine** as the internal operational referral system.

Do not use:

- Collactor’s Salon
- Collector’s Salon as the main module
- Wiki as the public knowledge name
- Luxury Brands Wiki
- Museum Directory as a scraped/generic directory
- public affiliate program
- coupon referral program
- Regulated Luxury Consumables

---

## 13. Trust Spine

Core trust systems:

- Evidence Readiness Score
- Missing Evidence Checklist
- Confidence Label System
- Condition Completeness
- Provenance Strength
- Risk Flagging
- Acquisition Path Recommender
- Collector Access Tier
- Review State System

Allowed trust labels:

- Evidence Strong
- Evidence Moderate
- Evidence Limited
- Research Ongoing
- Review Pending
- Specialist Review Required
- Specialist Review Completed
- Passport Available on Request
- Provenance Packet Available on Request
- Condition Notes Available

Forbidden unless legally and operationally proven:

- Certified Authentic
- Guaranteed
- AI Verified
- Officially Appraised
- Investment Grade

---

## 14. Heritage Intelligence

Includes:

- Heritage Passport
- Public Passport Preview
- Private Passport Dossier
- Artifact Genome
- Evidence Vault
- Custody Timeline
- Provenance Timeline
- Condition/Restoration Record
- Version History

Rules:

- Heritage Passport is an evidence system, not decorative certification.
- Artifact Genome is internal by default.
- Evidence should be append-only or superseded, not silently deleted.
- Public views must be scrubbed.

---

## 15. Legal & Trust Center

Noble requires a formal Legal & Trust Center.

Required pages:

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
- Mobile App Privacy / Data Use Explanation
- Account / Data Deletion Explanation

Rules:

- CMS-managed
- versioned
- legally reviewed where required
- multilingual
- public-safe
- accepted/acknowledged where required
- terms version stored when accepted

---

## 16. Cost Clarity + Viewing & Inspection

### Cost Clarity Panel

Where applicable, show:

- current bid or price state
- buyer premium
- VAT/tax note
- platform/service fee, if any
- shipping/viewing/storage note
- payment method
- estimated total
- invoice finalization disclaimer

Stop line:

- no paid, confirmed, won, or cleared state without trusted backend/provider/manual proof

### Viewing & Inspection Layer

Where applicable, show:

- viewing available / unavailable
- viewing method: in-person, remote, partner, private salon
- appointment window
- viewing location type
- ID/access requirement
- condition viewing note
- custody state
- appointment request status

---

## 17. Native Bridge / App Store Readiness Layer

Required adapter families:

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

- screens must not call native/browser APIs directly where an adapter should exist
- web/PWA implementations come first
- future native implementations replace adapter internals later
- auth/payment/KYC/auction authority never moves to client/native layer

---

## 18. Noble Introductions Circle

Public-facing name:

## Noble Introductions Circle

Internal operational engine:

## Trusted Referral Engine

Purpose:

Allow trusted members, advisors, family offices, estate professionals, designers, dealers, and partners to privately introduce qualified collectors, sellers, estates, institutions, or exceptional objects to Noble.

This is not a public affiliate program.

Rules:

- introductions never bypass review, KYC, legal/compliance, category risk, evidence readiness, or private access rules
- double opt-in consent required
- no contact-list uploading without consent
- no self-referrals
- no hidden advisor commissions
- no public commission banners
- no public leaderboards
- no MLM structure
- no coupon/discount language
- professional introducer fees require agreement, disclosure, and approval
- referral rewards should be private, controlled, and luxury-safe

---

## 19. Wealthy Persona Psychology

### Legacy Builder

Hook: Preserve the story behind what your family owns.

### Trophy Collector

Hook: Access rare objects before they reach the open market.

### Cultural Patron

Hook: Collect with cultural depth, not noise.

### Quiet Investor

Hook: Acquire with evidence, not guesswork.

### Design Collector

Hook: Source rare objects for meaningful spaces.

### NextGen Collector

Hook: Collect what defines your era — with trust and provenance.

---

## 20. Stop Lines

- Do not include Regulated Luxury Consumables.
- Do not create wine/whisky/spirits modules.
- Do not create alcohol marketplace, concierge, or auction flows.
- Do not create public affiliate/coupon/referral behavior.
- Do not create open resale behavior.
- Do not imply brand affiliation.
- Do not imply museum/institution affiliation.
- Do not use restricted logos/images.
- Do not claim authentication without process.
- Do not claim investment returns.
- Do not accept high-risk cultural/natural history objects without review logic.
- Do not allow seller self-publishing.
- Do not expose private evidence, seller identity, buyer identity, bidder identity, reserve price, internal passport/genome data, referral relationship data, or raw media.
- Do not build a duplicate mobile frontend.
- Do not submit a thin web wrapper to app stores.
- Do not request mobile permissions before user need is clear.
- Do not move auction/payment/KYC/legal authority to the app/client.

