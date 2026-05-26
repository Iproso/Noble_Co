# Noble Collectors / نوبل كوليكتورز
# UI/UX Directions V2 — Mobile-App-Ready
# 18-05-2026

## 1. Document Purpose

This file defines the UI/UX direction, design system principles, smart platform behavior, mobile-app-ready interface rules, screen families, navigation behavior, Arabic/RTL requirements, category UI rules, and anti-drift design standards for Noble Collectors.

This is a source-of-truth design file. It does not describe anything as built, active, deployed, tested, app-store submitted, or approved.

---

## 2. UI North Star

Noble Collectors must look and feel like:

> A private collector office, museum-grade cultural archive, luxury advisory desk, and evidence-backed acquisition platform — not a generic marketplace, not a noisy auction site, not a SaaS dashboard with gold paint, and not a thin mobile website pretending to be an app.

The UI must communicate:

- trust
- discretion
- cultural depth
- luxury restraint
- provenance intelligence
- private access
- calm confidence
- operational seriousness
- Arabic/English excellence
- mobile-first elegance
- app-like readiness without duplicating the frontend

---

## 3. Non-Negotiable UI Laws

- Light mode first.
- Warm ivory/off-white base.
- Deep ink/charcoal typography.
- Muted antique gold/brass accents.
- Editorial spacing.
- Museum-like calmness.
- Mobile-first layout from day one.
- App-like mobile shell from day one.
- No marketplace clutter.
- No cheap urgency.
- No discount styling.
- No fake luxury gradients everywhere.
- No noisy badges.
- No generic SaaS hero sections.
- No dark-pattern popups.
- No flat forms pretending to be smart.
- Arabic must be first-class.
- True RTL must be first-class.
- Mobile must be designed, not squeezed.
- CMS-rendered pages must follow the design system.
- Public/private data boundaries must affect UI states.
- Every sensitive UI state must be honest about what is available and what is not.
- No Regulated Luxury Consumables UI.
- No wine/whisky/spirits UI modules.
- No public affiliate/coupon/referral UI.
- No thin app-wrapper UX.

---

## 4. Visual Identity Direction

### Base Colors

- ivory / warm white
- soft parchment
- warm stone
- deep ink
- charcoal

### Accent Colors

- antique gold
- muted brass
- soft champagne
- aged bronze

### Supporting Colors

- deep olive for heritage/cultural depth
- oxblood or deep burgundy only for rare premium accents
- soft slate for metadata
- warm gray for borders/dividers

### Status Colors

- Evidence Strong: calm green/olive
- Evidence Moderate: muted amber
- Evidence Limited: soft ochre
- Needs Review: restrained blue/slate
- Risk/Internal: controlled burgundy/red, not public unless appropriate
- Archived: neutral stone

Rules:

- no bright ecommerce colors
- no neon
- do not overuse gold
- gold should feel like fine detail, not decoration overload

---

## 5. Typography

### English

Use refined editorial display typography for headings and clean sans-serif typography for UI labels, metadata, body, forms, mobile screens, and admin screens.

### Arabic

Arabic must not feel like fallback.

Requirements:

- dedicated Arabic font
- proper line height
- proper spacing
- no compressed Arabic cards
- no broken mixed-direction metadata
- natural contemporary business Arabic

### Rules

- headings should breathe
- body copy must remain readable
- metadata should be quiet but clear
- Arabic and English must have equivalent dignity
- mobile Arabic screens must be manually checked for overflow and line breaks

---

## 6. Layout System

### Public Layout

Use:

- wide editorial sections
- generous whitespace
- large image moments
- refined card grids
- controlled CTAs
- clear hierarchy
- no infinite noisy feeds

### Collector Layout

Use:

- private account-office feel
- calm dashboard cards
- watchlist previews
- private room access panels
- condition request status
- concierge messages
- next best action prompts

### Seller / Owner Layout

Use:

- wizard steps
- evidence checklist
- review status timeline
- missing-information prompts
- save/continue later

### Admin Layout

Use:

- command dashboard
- queue/list views
- Kanban boards
- evidence preview panels
- audit sidebars
- risk flags
- status filters
- action confirmations

Avoid:

- pretty but low-information dashboards
- dangerous destructive controls
- raw JSON editors for operators

### Mobile Layout

Use:

- bottom navigation where appropriate
- thumb-friendly CTAs
- native-feeling sheet/drawer patterns
- mobile-first object cards
- mobile dossier pages
- sticky action bars where appropriate
- safe area awareness for future native wrapper
- offline/network states

Avoid:

- desktop tables squeezed into mobile
- hover-only interactions
- tiny CTAs
- modal overload
- endless scrolling without clear context

---

## 7. Core UI Components

### Public Components

- Header / Navigation
- Mobile Bottom Navigation
- Language Switcher
- Hero Section
- Trust Strip
- Artifact Card
- Category Card
- Luxury Collectible Card
- Collector Asset Dossier Card
- Artifact Detail Hero
- Evidence Label
- Review State Label
- Acquisition CTA Block
- Heritage Passport Preview Card
- Cost Clarity Panel
- Viewing & Inspection Panel
- Condition Request CTA
- Concierge CTA
- Legal & Trust Center Card
- Noble Library Card
- Journal Article Card
- Archive Record Card
- Footer

### Collector Components

- Collection Desk Summary
- Watchlist Card
- Collectors’ Salon Card
- Private Room Card
- Condition Request Card
- Sourcing Request Card
- Message Thread
- Notification Preferences
- Document Access Card
- Introduction Status Card

### Seller Components

- Smart Artifact Submission Wizard
- Photo Upload Panel
- Document Upload Panel
- Evidence Checklist
- Review Status Timeline
- Missing Evidence Prompt
- Sale Path Recommendation Card
- Seller Message Panel

### Admin Components

- Admin Command Header
- Review Queue Table
- Kanban Lane
- Evidence Preview Drawer
- Media Vault Viewer
- Passport Editor Panel
- Audit Trail Sidebar
- CMS Editor
- CMS Workflow Status Bar
- Role Permission Badge
- Sensitive Action Confirmation
- Public/Private Preview Toggle
- Category Risk Panel
- Legal Terms Version Panel
- Mobile Readiness Checklist Panel

### Growth Components

- Smart CTA Block
- Luxury Exit-Intent Prompt
- Save for Later Prompt
- Continue Draft Prompt
- Consent Banner
- Preference Center
- Lead Capture Mini-Form
- Bot-Safe Form Protection
- Introduce Collector/Estate/Object Card

### Mobile/App Components

- Install Prompt
- Offline Fallback Screen
- Network Status Banner
- Update Available Prompt
- Session Expired Screen
- Private Access Expired Screen
- Permission Explanation Sheet
- Push Notification Preference Sheet
- Mobile Upload Sheet
- Deep Link Landing State
- Account/Data Deletion Request Entry

---

## 8. Smart Platform UX

Noble must feel smart-by-default before AI.

Required UX patterns:

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
- mobile smart wizards must be one-hand usable where possible

---

## 9. Public Screen Families

### Landing Page

Sections:

- luxury header
- hero
- trust strip
- featured objects
- category salons
- Heritage Passport explanation
- Collectors’ Salon preview
- Sell / Submit teaser
- Noble Library teaser
- Market Archive teaser
- Concierge / Estate Collections section
- Noble Introductions Circle teaser, restrained
- Membership CTA
- footer

### Explore

Purpose:

Public discovery of curated collector assets.

Requirements:

- refined filters
- curated category entry points
- artifact/luxury collectible cards
- pagination or controlled loading
- no infinite clutter

### Category Pages

Each major category page should include:

- editorial category hero
- category explanation
- collecting relevance
- trust/evidence expectations
- featured public-safe objects
- related Noble Library entries
- related Collector Guides
- request/sell/concierge CTA

Categories:

- Cultural Assets
- Fine Art & Visual Culture
- Decorative Arts & Design
- Luxury Collectibles
- Collector Memorabilia
- Science, Space & Natural History
- Numismatics & Philately
- Collector Mobility & Ultra-Assets

Do not include Regulated Luxury Consumables.

### Artifact Detail

Sections:

- object hero
- object story
- facts
- media gallery
- evidence/provenance panel
- condition panel
- Heritage Passport preview
- Cost Clarity Panel where applicable
- Viewing & Inspection Panel where applicable
- acquisition path
- condition request
- concierge inquiry
- related knowledge links

### Luxury Collectible Detail

Must adapt by type.

Watch blocks:

- reference/model
- year/period
- material
- movement/caliber, if public-safe
- condition
- box/papers
- service/provenance notes
- review state
- request condition/authentication note

Jewelry blocks:

- material
- stones
- certificates/lab reports
- signed maison status
- period/style
- condition
- provenance
- compliance/review note where relevant

Handbag/trunk blocks:

- maison
- model
- material
- hardware
- condition
- accessories
- receipt/provenance
- review state

Design object blocks:

- designer/maker
- period/style
- material
- dimensions
- condition/restoration
- provenance
- logistics/display considerations

Rules:

- no fake authentication claims
- no brand affiliation unless real
- no investment claims
- no resale-app styling

### Auctions

Purpose:

Auction preview and registration, not live bidding unless authority exists.

Sections:

- auction calendar
- auction detail
- lot preview
- registration CTA
- buyer premium disclosure
- terms acceptance status
- condition request CTA
- viewing/inspection availability
- reminder/calendar CTA

### Collectors’ Salon

Purpose:

Public-facing private access module.

Sections:

- salon explanation
- private viewing types
- estate preview
- private sale salon
- auction preview salon
- request access CTA

### Legal & Trust Center

Purpose:

Make terms, policies, fees, privacy, data use, and trust rules accessible without destroying luxury feel.

Sections:

- legal/trust index
- buyer/seller/private sale terms
- auction rules
- payment and fees
- viewing/collection/shipping/custody
- privacy/data protection/cookies
- KYC/sanctions explanation
- IP/brand/museum disclaimers
- mobile app privacy/data use explanation
- account/data deletion explanation

### Noble Introductions Circle

Purpose:

Private introduction pathway, not public referral campaign.

Sections:

- discreet introduction explanation
- eligible introducer types
- introduce collector / estate / object / advisor CTAs
- privacy and consent explanation
- no public reward emphasis

---

## 10. Member Screens

### Collection Desk

Sections:

- watchlist summary
- private room access
- condition request status
- auction interest
- sourcing requests
- introduction status, if eligible
- recommended next actions

### Watchlist

Requirements:

- calm object cards
- status changes
- request similar
- condition request
- remove/save actions

### Collectors’ Salon / Private Rooms

Requirements:

- access state
- expiry state
- private content panels
- confidential price protection
- provenance packet CTA
- concierge messaging

### Condition Requests

Requirements:

- request wizard
- status tracking
- response view
- privacy-safe language

### Sourcing

Requirements:

- guided sourcing wizard
- budget/period/material/preference fields
- concierge status

### Introductions

Requirements:

- eligible introducer access only
- private introduction links
- double opt-in explanation
- introduction statuses
- no public earnings dashboard for members

---

## 11. Seller Screens

### Submit Artifact Wizard

Steps:

1. Purpose
2. Category
3. Photos / Media
4. Object Facts
5. History / Provenance
6. Condition / Restoration
7. Documents
8. Declaration
9. Review & Submit

Rules:

- save draft
- continue later
- mobile camera upload ready
- category-specific fields
- missing evidence shown clearly

### Seller Dashboard

Sections:

- submissions
- review status
- evidence requests
- messages
- sale path guidance
- consignment/payment status where applicable

---

## 12. Admin Screens

### Admin Dashboard

Widgets:

- new submissions
- evidence requests
- condition requests
- private room access requests
- CMS items needing review
- category risk alerts
- auction registrations
- legal/trust review alerts
- introduction leads
- payment/logistics alerts
- mobile readiness alerts where applicable

### CMS Admin

Screens:

- content list
- content editor
- translation editor
- workflow review
- SEO/SMC metadata
- version history
- rollback

### Legal & Trust Admin

Requirements:

- policy version editor
- terms acceptance records
- legal review status
- public preview
- localization state

### Artifact Intake Admin

Requirements:

- queue filters
- detail view
- media/evidence preview
- missing evidence controls
- status change
- sale path recommendation
- audit log

### Luxury Collectibles Admin

Requirements:

- watch profile editor
- jewelry/gemstone profile editor
- handbag/trunk profile editor
- design object profile editor
- modern collectibles profile editor
- mobility concierge profile editor
- category risk flags
- review state controls

### Mobile Readiness Admin

Requirements:

- app privacy data map
- mobile permission policy list
- push notification privacy copy
- deep link test state
- account/data deletion policy links
- app version readiness checklist

---

## 13. Navigation UX

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

### Mobile Public Nav

Prioritize:

- Explore
- Salon
- Submit
- Library
- Account

Secondary items live in menu drawer.

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
- Introductions, if eligible
- Account

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
- Legal & Trust Center
- Mobile Readiness
- Concierge
- Settings / Governance
- Audit Logs

---

## 14. CTA Rules

Use premium, restrained CTAs:

- Request Access
- Explore the Collection
- Submit an Artifact
- Request Condition Note
- Ask Concierge
- Request Private Viewing
- Save to Watchlist
- Request Similar Object
- Apply for Membership
- Request Certificate Review
- Request Provenance Packet
- Request Private Mobility Concierge
- Introduce a Collector
- Introduce an Estate

Avoid:

- Buy Now everywhere
- Hurry
- Limited Deal
- Discount
- Earn Commission
- Refer and Get Cash
- Last Chance unless genuinely auction-related and legally safe

---

## 15. Status Labels

Allowed:

- Private Preview
- Condition Notes Available
- Passport Available on Request
- Evidence Strong
- Research Ongoing
- Review Pending
- Provenance Packet Available on Request
- Requires Specialist Review
- Category Review Required
- Legal/Compliance Review Required
- Viewing Available
- Viewing by Appointment
- Cost Breakdown Available

Avoid unless proven:

- Certified Authentic
- Guaranteed
- AI Verified
- Officially Appraised
- Investment Grade
- App Store Ready
- Payment Enabled

---

## 16. Mobile + PWA UI Rules

Required mobile behavior:

- bottom navigation
- large touch targets
- sticky primary CTA where appropriate
- mobile object gallery
- readable Heritage Passport
- mobile upload flow
- offline fallback screen
- network status cues
- safe private-room behavior
- deep-link landing states
- privacy-safe notification preference screens
- permission explanation before native/browser permission prompt

PWA UI states:

- install prompt
- offline fallback
- update available prompt
- session expired
- private access expired
- upload failed/resume
- draft saved
- network unavailable

Rules:

- do not cache private screens
- do not show sensitive push text
- do not claim native app availability
- do not make app feel like a thin website wrapper

---

## 17. Future Native App UI Rules

The future native wrapper must preserve the same design system while feeling app-native enough to satisfy user expectations.

Required future app-like behaviors:

- app-safe navigation hierarchy
- mobile-first shell
- safe-area awareness
- deep-link handling
- permission explanation sheets
- push notification preferences
- secure session expiry screens
- account/data deletion access
- offline fallback
- app update available state

Do not:

- create separate mobile screens that duplicate logic
- use native permissions before user need
- expose sensitive private room/evidence/payment details in notifications
- submit a thin wrapper with weak mobile UX

---

## 18. Arabic / RTL UI Rules

Requirements:

- true RTL layout
- logical spacing properties
- proper Arabic typography
- translated navigation
- Arabic CMS fields
- Arabic form labels
- Arabic validation messages
- Arabic status labels
- Arabic metadata where relevant
- Arabic mobile nav

Rules:

- do not mirror all icons blindly
- directional icons should flip
- brand/logo symbols may not need flipping
- mixed Arabic/English object names require bidi safety

---

## 19. CMS UI Rules

CMS editor must support:

- multilingual tabs
- translation status
- review status
- SEO fields
- SMC fields
- JSON-LD safe fields
- source fields
- legal/IP review flag
- category/risk fields
- legal/trust version fields
- mobile/privacy/data-use fields where needed
- public/private visibility preview
- version history
- rollback

CMS-rendered pages must follow the design system.

---

## 20. Growth UI Rules

Growth prompts must feel like concierge assistance.

Allowed:

- Save this object for private review
- Request similar objects privately
- Continue your submission later
- Ask our concierge about this object
- Request Salon access
- Introduce an estate privately

Forbidden:

- spin wheels
- discounts
- aggressive countdowns
- repeated exit popups
- blocking overlays
- fake scarcity
- guilt language
- public commission language

Growth UI must be:

- consent-aware
- frequency-capped
- accessible
- dismissible
- privacy-safe
- Arabic/RTL-ready

---

## 21. Accessibility Rules

UI must support:

- keyboard navigation
- visible focus states
- readable contrast
- accessible modal focus trapping
- form labels
- error messages
- screen-reader-safe prompts
- responsive text scaling
- reduced motion option where needed

Luxury does not excuse inaccessible design.

---

## 22. Stitch / UI Builder Handoff Rules

When handing to Stitch or UI builders, provide:

- visual mood
- color tokens
- typography direction
- public nav
- mobile nav
- screen list
- component list
- layout rules
- Arabic/RTL requirement
- mobile-first requirement
- app-like PWA requirement
- no marketplace clutter rule
- CMS-rendered content requirement
- public/private state examples
- category/risk state examples
- permission/push/privacy state examples

Builder must not:

- create generic SaaS dashboards
- make it dark-only
- create ecommerce discount UI
- ignore Arabic
- ignore mobile
- ignore private/access states
- invent unsupported features
- reintroduce Regulated Luxury Consumables
- create public affiliate/coupon UI
- design thin-wrapper mobile UX

---

## 23. UI Proof Gates

Before any UI packet is accepted:

- desktop visual QA
- mobile visual QA
- Arabic/RTL visual QA
- accessibility pass
- public/private state check
- CMS-rendered content check
- category/risk state check
- PWA/mobile shell check where relevant
- app-like mobile behavior check where relevant
- permission/push/privacy-safe UX check where relevant
- no fake claims in copy
- no cheap marketplace patterns
- no private data leakage
- route ownership confirmed
- design system tokens used

---

## 24. Anti-Drift Checklist

Reject UI if it looks like:

- Shopify clone
- generic auction site
- generic SaaS admin
- noisy marketplace
- crypto/NFT dashboard
- fashion blog
- dark luxury cliché
- overdecorated gold theme
- AI-generated card clutter
- luxury resale clutter
- sneaker marketplace hype UI
- alcohol/spirits marketplace
- thin web app wrapper
- coupon/referral app

Accept UI if it feels like:

- private collector office
- museum archive
- luxury advisory desk
- cultural asset dossier
- quiet auction preview
- elegant collector salon
- premium editorial platform
- mobile-first collector companion

---

## 25. Final UI Direction

The Noble UI should make users feel:

- this is serious
- this is private
- this is culturally intelligent
- this is not a cheap marketplace
- my data will be handled carefully
- the objects are treated with dignity
- the platform understands collectors
- Arabic users are respected equally
- mobile experience is first-class
- categories feel curated, not chaotic
- future native app experience will not require a rebuild

The interface must earn trust before asking for conversion.

