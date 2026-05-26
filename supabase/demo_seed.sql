-- ============================================================
-- Noble Collectors — Demo Seed Data
-- Uses hardcoded UUIDs for predictable references.
-- Run AFTER 0000_initial_schema + 0001_rls_policies + seed.sql
-- ============================================================

-- ── 1. Demo Users ────────────────────────────────────────────
INSERT INTO users (id, email, role_id, locale, is_active, last_login_at) VALUES
  ('a0000000-0000-4000-8000-000000000001', 'demo@noblecollectors.com', (SELECT id FROM roles WHERE name='member'), 'en', true, now() - interval '2 hours'),
  ('a0000000-0000-4000-8000-000000000002', 'reviewer@noblecollectors.com', (SELECT id FROM roles WHERE name='reviewer'), 'en', true, now() - interval '30 minutes'),
  ('a0000000-0000-4000-8000-000000000003', 'specialist@noblecollectors.com', (SELECT id FROM roles WHERE name='specialist'), 'en', true, now() - interval '1 day'),
  ('a0000000-0000-4000-8000-000000000004', 'admin@noblecollectors.com', (SELECT id FROM roles WHERE name='admin'), 'en', true, now() - interval '5 minutes'),
  ('a0000000-0000-4000-8000-000000000005', 'ahmed@example.com', (SELECT id FROM roles WHERE name='member'), 'ar', true, now() - interval '1 week'),
  ('a0000000-0000-4000-8000-000000000006', 'elena@example.com', (SELECT id FROM roles WHERE name='member'), 'en', true, null);

INSERT INTO user_profiles (user_id, display_name, bio, nationality, metadata) VALUES
  ('a0000000-0000-4000-8000-000000000001', 'Demo Collector', 'A sample collector account for platform exploration. This user has submitted several artifacts.', 'US', '{"tier":"standard","interests":["watches","jewelry"]}'::jsonb),
  ('a0000000-0000-4000-8000-000000000002', 'Claire Dubois', 'Senior reviewer specializing in fine art and antiques.', 'FR', '{"tier":"staff","specialties":["art","antiques"]}'::jsonb),
  ('a0000000-0000-4000-8000-000000000003', 'Marcus Wei', 'Horological specialist and independent watchmaker.', 'CH', '{"tier":"staff","credentials":["CW21","WOSTEP"]}'::jsonb),
  ('a0000000-0000-4000-8000-000000000004', 'Sarah Al-Farsi', 'Platform administrator & compliance officer.', 'AE', '{"tier":"admin"}'::jsonb),
  ('a0000000-0000-4000-8000-000000000005', 'أحمد العمري', NULL, 'SA', '{"tier":"vip"}'::jsonb),
  ('a0000000-0000-4000-8000-000000000006', 'Elena Vogt', NULL, 'DE', '{"tier":"standard"}'::jsonb);

-- ── 2. Collector Assets ──────────────────────────────────────
-- Fetch category IDs into temp variables approach: just use subqueries.

-- 2a. Patek Philippe Calatrava (Watches)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, title_ar, description_en, year_period, maison, maker, provenance_summary, condition_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000001', 'patek-calatrava-5227g', (SELECT id FROM collector_asset_categories WHERE slug='fine-watches'), 2, 'Patek Philippe Calatrava 5227G', 'باتيك فيليب كالاترافا 5227G', 'A pristine Patek Philippe Calatrava ref. 5227G in white gold with a hobnail-patterned case band and a stunning silver opaline dial. Part of the current collection, acquired directly from an authorised dealer in 2022.', '2022', 'Patek Philippe', 'Patek Philippe SA', 'Acquired new from Bucherer Zurich, December 2022. Full set with box, papers, and warranty.', 'Excellent — unpolished, original strap, minor desk-diving marks on clasp. Running within COSC spec.', 'verified', 92, 'high confidence', true, '{"reference":"5227G-001","movement":"Caliber 324 S C","case_material":"18k White Gold","year":2022}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO watch_profiles (asset_id, reference, year, material, movement_type, caliber, condition, box_papers, service_history) VALUES
  ('b0000000-0000-4000-8000-000000000001', '5227G-001', '2022', '18k White Gold', 'Automatic', 'Caliber 324 S C', 'Excellent — unpolished, minor clasp wear', true, 'Serviced by Bucherer March 2025 — no issues found.');

-- 2b. Rolex Daytona (Watches)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, description_en, year_period, maison, maker, provenance_summary, condition_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000002', 'rolex-daytona-116500ln', (SELECT id FROM collector_asset_categories WHERE slug='fine-watches'), 2, 'Rolex Daytona Cosmograph 116500LN', 'A steel Rolex Daytona 116500LN with black ceramic bezel, purchased at retail in 2019. Accompanied by full set and recent service invoice.', '2019', 'Rolex', 'Rolex SA', 'Original owner, purchased at Bucherer Geneva, July 2019. Full set with chronometer certificate, warranty card, and all links.', 'Very good — light surface scratches consistent with careful use. Bezel and crystal flawless. Serviced 2024.', 'verified', 88, 'high confidence', true, '{"reference":"116500LN-0001","movement":"Caliber 4130","case_material":"904L Steel","year":2019}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO watch_profiles (asset_id, reference, year, material, movement_type, caliber, condition, box_papers, service_history) VALUES
  ('b0000000-0000-4000-8000-000000000002', '116500LN-0001', '2019', '904L Stainless Steel', 'Automatic', 'Caliber 4130', 'Very good — light surface wear, serviced 2024', true, 'Rolex Geneva service center, March 2024 — full movement overhaul, new gaskets.');

-- 2c. Van Cleef & Arpels Alhambra (Jewelry)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, title_ar, description_en, year_period, maison, maker, provenance_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000003', 'vca-alhambra-vintage', (SELECT id FROM collector_asset_categories WHERE slug='fine-jewelry'), 2, 'Van Cleef & Arpels Vintage Alhambra Necklace', 'عقد فان كليف أند آربلز فينتج ألمبرا', 'A 20-motif Vintage Alhambra necklace in carnelian and yellow gold, dating from the 2000s. Each motif is the iconic clover shape set with polished carnelian.', '2000s', 'Van Cleef & Arpels', 'Van Cleef & Arpels', 'Acquired at a private auction in Monaco, 2018. Accompanied by a certificate of authenticity and VCA service pouch.', 'verified', 85, 'high confidence', true, '{"collection":"Vintage Alhambra","material":"18k Yellow Gold","stones":"Carnelian","motifs":20}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO jewelry_profiles (asset_id, material, stones, certificates, maison, period, condition) VALUES
  ('b0000000-0000-4000-8000-000000000003', '18k Yellow Gold', '[{"stone":"Carnelian","cut":"cabochon","quantity":20}]'::jsonb, '["VCA Certificate of Authenticity 2018"]'::jsonb, 'Van Cleef & Arpels', '2000s', 'Excellent — light patina on chain, motifs clean and undamaged.');

-- 2d. Hermès Birkin 30 (Handbags)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, title_ar, description_en, year_period, maison, maker, provenance_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000004', 'hermes-birkin30-eto4', (SELECT id FROM collector_asset_categories WHERE slug='handbags-accessories'), 1, 'Hermès Birkin 30 Sellier Epsom Noir', 'هيرميس بيركين 30 سيليير إبسوم نوار', 'A classic Birkin 30 in Noir Epsom leather with palladium hardware. Date stamp T (2023) in excellent condition. Includes clochette, lock, keys, dust bag, and box.', '2023', 'Hermès', 'Hermès Paris', 'Original purchase from Hermès Faubourg Saint-Honoré, Paris, March 2023. Receipt and full set available.', 'verified', 90, 'high confidence', true, '{"model":"Birkin 30","leather":"Epsom","hardware":"Palladium","color":"Noir","stamp":"T"}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO handbag_profiles (asset_id, maison, model, material, hardware, condition, accessories) VALUES
  ('b0000000-0000-4000-8000-000000000004', 'Hermès', 'Birkin 30 Sellier', 'Epsom calfskin', 'Palladium', 'Excellent — gently used, corners intact, no scratches on hardware', '["Clochette","Lock","Keys (2)","Dust bag","Sleeping bag","Rain cover","Box","Receipt"]'::jsonb);

-- 2e. Banksy — Girl with Balloon (Art)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, title_ar, description_en, year_period, provenance_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000005', 'banksy-girl-balloon', (SELECT id FROM collector_asset_categories WHERE slug='fine-art'), 3, 'Banksy — Girl with Balloon (Signed Print)', 'بانكسي — فتاة مع بالون (طبعة موقعة)', 'A signed Banksy screen print in colours, 2004. Numbered from an edition of 150. This is the iconic image of a young girl reaching for a heart-shaped balloon.', '2004', 'Purchased from a private collector in London, 2021. Accompanied by Pest Control certificate and provenance letter.', 'verified', 94, 'high confidence', true, '{"edition":"150","medium":"Screenprint on paper","signature":"Signed and numbered","framed":true}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

-- 2f. Patek Philippe Grand Complications (Watches — private)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, year_period, maison, maker, provenance_summary, condition_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000006', 'patek-5270g-grand-complication', (SELECT id FROM collector_asset_categories WHERE slug='fine-watches'), 2, 'Patek Philippe Grand Complications 5270G', '2021', 'Patek Philippe', 'Patek Philippe SA', 'Acquired from a Geneva-based collector who owned it from new. Serviced by Patek in 2024.', 'Mint — full set, unworn condition, still with protective stickers until 2024.', 'verified', 96, 'high confidence', false, '{"reference":"5270G-001","movement":"Caliber CH 29-535 PS Q","case_material":"18k White Gold","complications":["Perpetual Calendar","Chronograph","Moon Phases"]}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO watch_profiles (asset_id, reference, year, material, movement_type, caliber, condition, box_papers, service_history) VALUES
  ('b0000000-0000-4000-8000-000000000006', '5270G-001', '2021', '18k White Gold', 'Manual-wind', 'Caliber CH 29-535 PS Q', 'Mint — unworn condition, protective stickers removed 2024', true, 'Patek Philippe Geneva, Jan 2024 — routine check, no issues.');

-- 2g. Cartier Love Bracelet (Jewelry)
INSERT INTO collector_assets (id, slug, category_id, risk_tier, title_en, year_period, maison, provenance_summary, review_state, evidence_score, confidence_label, public_visibility, category_metadata, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000007', 'cartier-love-bracelet', (SELECT id FROM collector_asset_categories WHERE slug='fine-jewelry'), 1, 'Cartier Love Bracelet — Rose Gold', '2020', 'Cartier', 'Purchased new at Cartier Dubai Mall, October 2020.', 'verified', 80, 'high confidence', true, '{"model":"Love Bracelet","material":"18k Rose Gold","size":"17","screwdriver":true}'::jsonb, 'a0000000-0000-4000-8000-000000000001');

INSERT INTO jewelry_profiles (asset_id, material, certificates, maison, period, condition) VALUES
  ('b0000000-0000-4000-8000-000000000007', '18k Rose Gold', '["Cartier Certificate 2020"]'::jsonb, 'Cartier', '2020', 'Excellent — light surface scratches, screwdriver included.');

-- ── 3. Media Assets ──────────────────────────────────────────
INSERT INTO media_assets (id, asset_id, original_filename, storage_path, mime_type, file_size, width, height, is_public, visibility_state, review_state, uploaded_by) VALUES
  ('c0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000001', 'calatrava_5227g_front.jpg', 'demo/calatrava_5227g_front.jpg', 'image/jpeg', 4200000, 2400, 2400, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000001', 'calatrava_5227g_back.jpg', 'demo/calatrava_5227g_back.jpg', 'image/jpeg', 3800000, 2400, 2400, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000002', 'daytona_116500ln_front.jpg', 'demo/daytona_116500ln_front.jpg', 'image/jpeg', 5100000, 2400, 2400, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000003', 'vca_alhambra_necklace.jpg', 'demo/vca_alhambra_necklace.jpg', 'image/jpeg', 3900000, 2400, 3200, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000005', 'b0000000-0000-4000-8000-000000000004', 'birkin30_noir_front.jpg', 'demo/birkin30_noir_front.jpg', 'image/jpeg', 4600000, 2400, 2400, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000004', 'birkin30_noir_stamp.jpg', 'demo/birkin30_noir_stamp.jpg', 'image/jpeg', 3100000, 2400, 1800, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000007', 'b0000000-0000-4000-8000-000000000005', 'banksy_girl_balloon.jpg', 'demo/banksy_girl_balloon.jpg', 'image/jpeg', 5700000, 2800, 3600, true, 'public', 'approved', 'a0000000-0000-4000-8000-000000000001'),
  ('c0000000-0000-4000-8000-000000000008', 'b0000000-0000-4000-8000-000000000006', 'patek_5270g_front.jpg', 'demo/patek_5270g_front.jpg', 'image/jpeg', 4400000, 2400, 2400, false, 'private', 'approved', 'a0000000-0000-4000-8000-000000000001');

-- ── 4. Heritage Passports ─────────────────────────────────────
INSERT INTO heritage_passports (id, asset_id, version, status, public_visibility, public_preview, private_dossier, created_by) VALUES
  ('d0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000001', 2, 'published', true,
    '{"title":"Patek Philippe Calatrava 5227G — Heritage Passport","summary":"A comprehensive dossier on this reference 5227G, including design lineage, movement specifications, and market history.","highlights":["Introduced at Baselworld 2013 as the successor to the 5227","One of the last Calatrava models with a display caseback","Caliber 324 S C is a workhorse with Gyromax balance and Spiromax hairspring"],"key_photo":"demo/calatrava_5227g_front.jpg"}'::jsonb,
    '{"provenance_score":92,"research_notes":["The 5227G replaced the 5296G in the Calatrava lineup. It retains the signature officer-style caseback but in a modern interpretation.","The hobnail pattern (Clous de Paris) on the case band is one of Patek''s most iconic decorative finishes."],"appraisal_range":{"low":28000,"high":35000,"currency":"USD","date":"2025-01-15"},"market_insights":{"trend":"Stable","demand_index":78,"comparable_sales":[{"reference":"5227R","sold_price":32000,"year":2024},{"reference":"5227J","sold_price":29500,"year":2023}]}}'::jsonb,
    'a0000000-0000-4000-8000-000000000004'),

  ('d0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000004', 1, 'published', true,
    '{"title":"Hermès Birkin 30 Sellier Epsom Noir — Heritage Passport","summary":"Authenticity dossier and condition assessment for this 2023 Birkin 30.","highlights":["T-stamp indicates production year 2023","Epsom leather is one of the most durable Hermès leathers","Palladium hardware — 2023 production uses the newer deeper-toned palladium"],"key_photo":"demo/birkin30_noir_front.jpg"}'::jsonb,
    '{"provenance_score":90,"research_notes":["Epsom is a stamped calfskin introduced in the 2000s. It is lightweight, scratch-resistant, and maintains its shape well.","The Sellier (retourné) construction is the traditional Birkin method, where the leather is turned inside-out and stitched by hand.","Palladium hardware from 2023 exhibits a slightly warmer tone compared to earlier years."],"appraisal_range":{"low":18000,"high":24000,"currency":"USD","date":"2025-03-01"},"market_insights":{"trend":"Appreciating","demand_index":91,"comparable_sales":[{"model":"Birkin 30 Epsom Sellier Noir","sold_price":22500,"year":2024},{"model":"Birkin 30 Togo Sellier Noir","sold_price":19500,"year":2024}]}}'::jsonb,
    'a0000000-0000-4000-8000-000000000003');

-- ── 5. Provenance Timeline ───────────────────────────────────
INSERT INTO provenance_timeline_events (asset_id, date_from, date_to, owner, location, evidence_ref, notes, display_order) VALUES
  -- Patek Calatrava timeline
  ('b0000000-0000-4000-8000-000000000001', 'Dec 2022', 'Dec 2022', 'Gübelin Zurich (Retailer)', 'Zurich, Switzerland', 'Invoice #G-2212-449', 'Original purchase from Gübelin, Paradeplatz. The watch was a special order with French day wheel.', 1),
  ('b0000000-0000-4000-8000-000000000001', 'Dec 2022', 'Present', 'Demo Collector', 'Riyadh / Geneva', 'Warranty transfer 2023', 'Acquired on a trip to Zurich. Worn regularly in rotation. Serviced March 2025.', 2),
  -- Birkin timeline
  ('b0000000-0000-4000-8000-000000000004', 'Mar 2023', 'Mar 2023', 'Hermès Faubourg Saint-Honoré', 'Paris, France', 'Hermès Receipt #FH-2303-8174', 'Walk-in purchase. The bag was offered as a loyal customer allocation.', 1),
  ('b0000000-0000-4000-8000-000000000004', 'Mar 2023', 'Present', 'Demo Collector', 'Dubai / Riyadh', NULL, 'Stored in a temperature-controlled closet. Used approximately twice per month.', 2),
  -- Banksy timeline
  ('b0000000-0000-4000-8000-000000000005', '2004', '2004', 'Pest Control (Banksy''s authentication body)', 'London, UK', 'Pest Control COA #PC-B-2004-142', 'Print released as part of the 2004 signed series. Edition of 150.', 1),
  ('b0000000-0000-4000-8000-000000000005', '2004', '2019', 'Private Collector A', 'London, UK', 'Private sale agreement 2004', 'Original purchaser from the 2004 release. Held for 15 years.', 2),
  ('b0000000-0000-4000-8000-000000000005', '2021', 'Present', 'Demo Collector', 'Geneva, Switzerland', 'Sotheby''s invoice #S-2021-04-891', 'Purchased at Sotheby''s London Online, April 2021.', 3);

-- ── 6. Custody Events ────────────────────────────────────────
INSERT INTO custody_events (asset_id, type, event_date, location, custodian, notes, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000001', 'storage_change', '2024-06-01', 'Riyadh, Saudi Arabia', 'Demo Collector', 'Moved to main safe. Insurance updated to reflect current market value.', 'a0000000-0000-4000-8000-000000000001'),
  ('b0000000-0000-4000-8000-000000000004', 'exhibition', '2024-11-15', 'Dubai, UAE', 'Hermès Dubai (service de garde)', 'Brief loan to Hermès Dubai for a client event. Bag was displayed for 3 days under 24/7 security.', 'a0000000-0000-4000-8000-000000000001'),
  ('b0000000-0000-4000-8000-000000000005', 'inspection', '2024-09-10', 'Geneva, Switzerland', 'Fine Art Logistics SA', 'Condition inspection and reframing. UV-protective glass installed.', 'a0000000-0000-4000-8000-000000000001');

-- ── 7. Evidence Items ────────────────────────────────────────
INSERT INTO evidence_items (asset_id, type, title_en, description_en, strength_score, source, status, created_by) VALUES
  ('b0000000-0000-4000-8000-000000000001', 'purchase_receipt', 'Gübelin Purchase Invoice', 'Original invoice from Gübelin Zurich dated 12 December 2022. Itemised with serial number, reference, and price.', 95, 'Original document scanned', 'verified', 'a0000000-0000-4000-8000-000000000003'),
  ('b0000000-0000-4000-8000-000000000001', 'service_record', '2025 Service Invoice', 'Bucherer service invoice March 2025. Full movement inspection, no repairs needed.', 85, 'Service centre record', 'verified', 'a0000000-0000-4000-8000-000000000003'),
  ('b0000000-0000-4000-8000-000000000004', 'purchase_receipt', 'Hermès Faubourg Receipt', 'Original Hermès receipt dated March 2023. Includes client profile reference.', 95, 'Original document scanned', 'verified', 'a0000000-0000-4000-8000-000000000003'),
  ('b0000000-0000-4000-8000-000000000005', 'certificate_of_authenticity', 'Pest Control Certificate', 'Pest Control certificate number PC-B-2004-142 confirming authenticity.', 100, 'Pest Control registry', 'verified', 'a0000000-0000-4000-8000-000000000003'),
  ('b0000000-0000-4000-8000-000000000005', 'auction_result', 'Sotheby''s Invoice 2021', 'Sotheby''s invoice showing hammer price and buyer''s premium. Online sale April 2021.', 90, 'Auction house record', 'verified', 'a0000000-0000-4000-8000-000000000003');

-- ── 8. Condition Records ─────────────────────────────────────
INSERT INTO condition_records (asset_id, examiner, overall, parts, notes, is_restoration, examined_at) VALUES
  ('b0000000-0000-4000-8000-000000000001', 'Marcus Wei (Specialist)', 'excellent',
    '[{"part":"Case","grade":"9/10","note":"Minor micro-scratches on bezel edge"},{"part":"Dial","grade":"10/10"},{"part":"Movement","grade":"10/10","note":"Running +1.3 spd"},{"part":"Strap","grade":"8/10","note":"Original alligator, light wear at buckle"},{"part":"Clasp","grade":"7/10","note":"Desk-diving marks, consistent with occasional wear"}]'::jsonb,
    'Overall exceptional condition for a 2-year-old watch. Unpolished with crisp case edges. Movement running well within COSC specifications. The clasp shows the most wear, which is expected.', false, now() - interval '45 days'),
  ('b0000000-0000-4000-8000-000000000004', 'Hermès Spa Service', 'excellent',
    '[{"part":"Leather body","grade":"9/10","note":"Minor corner softening, no scuffs"},{"part":"Hardware","grade":"9/10","note":"Light surface marks on palladium lock"},{"part":"Stitching","grade":"10/10","note":"All original stitching intact"},{"part":"Interior","grade":"10/10","note":"Clean and unmarked"},{"part":"Strap","grade":"9/10","note":"Original strap, barely worn"}]'::jsonb,
    'The bag is in beautiful condition. The Epsom leather has held its shape perfectly. The hardware shows only the lightest use. Retains that new-bag scent.', false, now() - interval '30 days');

-- ── 9. Auctions & Lots ───────────────────────────────────────
INSERT INTO auctions (id, title_en, title_ar, description, start_date, end_date, status, created_by) VALUES
  ('e0000000-0000-4000-8000-000000000001', 'Noble Collectors Auction No. 1 — Spring 2025', 'مزاد نوبل كوليكتورز رقم 1 — ربيع 2025', 'Our inaugural auction featuring fine watches, jewellery, and luxury accessories from esteemed collectors worldwide.', now() + interval '30 days', now() + interval '45 days', 'preview', 'a0000000-0000-4000-8000-000000000004'),
  ('e0000000-0000-4000-8000-000000000002', 'Noble Collectors Auction No. 2 — Summer 2025', 'مزاد نوبل كوليكتورز رقم 2 — صيف 2025', 'Summer auction featuring exceptional timepieces, rare handbags, and fine art.', now() + interval '90 days', now() + interval '105 days', 'draft', 'a0000000-0000-4000-8000-000000000004');

INSERT INTO auction_lots (auction_id, asset_id, lot_number, estimate_low, estimate_high, start_price, display_order, viewing_available, condition_report_available, public_visibility, status) VALUES
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000001', 1, 28000, 35000, 26000, 1, true, true, true, 'preview'),
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000002', 2, 25000, 32000, 23000, 2, true, true, true, 'preview'),
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000003', 8, 18000, 25000, 16000, 8, false, true, true, 'preview'),
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000004', 15, 18000, 25000, 17000, 15, true, true, true, 'preview'),
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000005', 22, 150000, 250000, 120000, 22, true, true, true, 'preview'),
  ('e0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000006', 1, 180000, 250000, 170000, 1, true, true, false, 'draft');

-- ── 10. Private Rooms ────────────────────────────────────────
INSERT INTO private_rooms (id, name_en, name_ar, description_en, description_ar, access_type, is_active, created_by) VALUES
  ('f0000000-0000-4000-8000-000000000001', 'The Horology Salon', 'صالون علم قياس الزمن', 'A private room for watch enthusiasts to discuss movements, brands, and market trends. Members share collection highlights and trade insights.',
   'غرفة خاصة لعشاق الساعات لمناقشة الحركات والعلامات التجارية واتجاهات السوق', 'invite', true, 'a0000000-0000-4000-8000-000000000004'),
  ('f0000000-0000-4000-8000-000000000002', 'Fine Jewellery Circle', 'حلقة المجوهرات الثمينة', 'An exclusive circle for jewellery collectors. Discussions cover gemology, design heritage, and auction results.',
   'حلقة حصرية لهواة جمع المجوهرات', 'request', true, 'a0000000-0000-4000-8000-000000000004');

INSERT INTO room_access (room_id, user_id, access_type, granted_by, expires_at) VALUES
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'member', 'a0000000-0000-4000-8000-000000000004', NULL),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000002', 'member', 'a0000000-0000-4000-8000-000000000004', NULL),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000003', 'member', 'a0000000-0000-4000-8000-000000000004', NULL),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000004', 'owner', 'a0000000-0000-4000-8000-000000000004', NULL),
  ('f0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000001', 'member', 'a0000000-0000-4000-8000-000000000004', NULL),
  ('f0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000005', 'member', 'a0000000-0000-4000-8000-000000000004', now() + interval '90 days');

INSERT INTO room_messages (room_id, user_id, content, is_confidential) VALUES
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000003', 'Has anyone handled the new 5326G Annual Calendar yet? The Calatrava case shape is a bold departure.', false),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000002', 'I saw one at a Patek event in Geneva last month. The dial texture is extraordinary — truly different in person.', false),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000004', 'We should organise a group visit to the Patek Philippe Museum for Q3. I will check group visit availability.', true),
  ('f0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'Count me in. I have been meaning to see the new Rare Handcrafts exhibition.', false);

-- ── 11. CMS Content ──────────────────────────────────────────
INSERT INTO cms_content (slug, type, locale, title, body, status, version, published_at, created_by) VALUES
  ('how-it-works', 'page', 'en', 'How Noble Collectors Works',
    '{"sections":[{"heading":"Submit Your Artifact","body":"Start by creating a submission. Our guided process walks you through each step — from basic details to provenance documentation."},{"heading":"Expert Review","body":"Our specialist team evaluates your submission. Depending on the category and risk tier, this may include provenance verification, condition assessment, and authentication."},{"heading":"Heritage Passport","body":"Once verified, your artifact receives a Heritage Passport — a digital dossier combining provenance, condition records, and market insights."},{"heading":"Auction or Salon","body":"Choose to list your artifact in an upcoming auction or share it within private Salon rooms for curated access."}]}'::jsonb,
    'published', 2, now() - interval '10 days', 'a0000000-0000-4000-8000-000000000004'),
  ('how-it-works', 'page', 'ar', 'كيف تعمل نوبل كوليكتورز',
    '{"sections":[{"heading":"تقديم القطعة الأثرية","body":"ابدأ بإنشاء طلب تقديم. عملية التقديم الموجهة لدينا ترشدك خلال كل خطوة — من التفاصيل الأساسية إلى توثيق المصدر."},{"heading":"مراجعة الخبراء","body":"يقوم فريق المتخصصين لدينا بتقييم طلبك. قد يشمل ذلك التحقق من المصدر وتقييم الحالة والمصادقة."},{"heading":"جواز التراث","body":"بمجرد التحقق، تحصل القطعة الأثرية على جواز تراث — ملف رقمي يجمع معلومات المصدر وسجلات الحالة ورؤى السوق."},{"heading":"المزاد أو الصالون","body":"اختر إدراج قطعتك الأثرية في مزاد قادم أو مشاركتها في غرف الصالون الخاصة للوصول المنسق."}]}'::jsonb,
    'published', 1, now() - interval '10 days', 'a0000000-0000-4000-8000-000000000004'),
  ('services', 'page', 'en', 'Our Services',
    '{"sections":[{"heading":"Valuation & Appraisal","body":"Professional market valuations for insurance, resale, or estate planning purposes."},{"heading":"Authentication","body":"Multi-layered authentication process combining expert examination with forensic analysis when required."},{"heading":"Conservation Advisory","body":"Guidance on proper storage, handling, and conservation for your collectibles."},{"heading":"Concierge Sales","body":"Discreet private sales and auction placement through our global network of collectors and institutions."}]}'::jsonb,
    'published', 1, now() - interval '7 days', 'a0000000-0000-4000-8000-000000000004');

-- ── 12. Artifact Submissions ─────────────────────────────────
INSERT INTO artifact_submissions (id, user_id, asset_id, category_id, purpose, status, risk_tier, reviewer_id, submitted_at, reviewed_at) VALUES
  ('90000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000003', (SELECT id FROM collector_asset_categories WHERE slug='fine-jewelry'), 'auction', 'approved', 2, 'a0000000-0000-4000-8000-000000000002', now() - interval '60 days', now() - interval '55 days'),
  ('90000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000007', (SELECT id FROM collector_asset_categories WHERE slug='fine-jewelry'), 'evaluation', 'pending_review', 1, NULL, now() - interval '3 days', NULL),
  ('90000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000005', NULL, (SELECT id FROM collector_asset_categories WHERE slug='fine-watches'), 'auction', 'draft', 2, NULL, NULL, NULL);

INSERT INTO submission_drafts (user_id, category_id, data, current_step, completed_steps, expires_at) VALUES
  ('a0000000-0000-4000-8000-000000000001', (SELECT id FROM collector_asset_categories WHERE slug='fine-art'),
    '{"title_en":"Untitled Rothko-style painting","artist":"Unknown","year":"~1960","dimensions":"120x150cm","notes":"Acquired at estate sale in Milan. Might be a studio work."}'::jsonb,
    2, '[1,2]'::jsonb, now() + interval '30 days');

-- ── 13. Audit Events ─────────────────────────────────────────
INSERT INTO audit_events (action, actor_id, actor_role, resource_type, resource_id, details, ip_address) VALUES
  ('asset.submitted', 'a0000000-0000-4000-8000-000000000001', 'member', 'artifact_submission', '90000000-0000-4000-8000-000000000001', '{"category":"fine-jewelry","purpose":"auction"}'::jsonb, '192.168.1.42'),
  ('asset.verified', 'a0000000-0000-4000-8000-000000000002', 'reviewer', 'collector_asset', 'b0000000-0000-4000-8000-000000000003', '{"confidence":"high","score":85}'::jsonb, '192.168.1.100'),
  ('user.registered', 'a0000000-0000-4000-8000-000000000006', 'member', 'user', 'a0000000-0000-4000-8000-000000000006', '{"source":"referral","referrer":"ahmed@example.com"}'::jsonb, '87.45.132.22'),
  ('auction.created', 'a0000000-0000-4000-8000-000000000004', 'admin', 'auction', 'e0000000-0000-4000-8000-000000000001', '{"title":"Noble Collectors Auction No. 1 — Spring 2025","lots":6}'::jsonb, '10.0.0.1');

-- ── 14. Introducer Profile & Referral ────────────────────────
INSERT INTO introducer_profiles (user_id, introducer_type, is_eligible, agreement_accepted, agreement_version, quality_score) VALUES
  ('a0000000-0000-4000-8000-000000000005', 'collector', true, true, '2.1', 85);

INSERT INTO referral_leads (introducer_id, lead_email, lead_name, status, notes) VALUES
  ((SELECT id FROM introducer_profiles WHERE user_id='a0000000-0000-4000-8000-000000000005'), 'info@privatecollection.ch', 'Hans Mueller (Private Collection)', 'pending', 'High-net-worth individual with known interest in independent watchmaking. Warm introduction via Ahmed.');

-- ── 15. Visitor Score (for growth tracking) ──────────────────
INSERT INTO visitor_scores (visitor_id, score, signals, expires_at) VALUES
  ('v_demo_001', 78, '{"page_views":12,"time_on_site_seconds":340,"categories_viewed":["fine-watches","fine-jewelry"],"submission_started":true}'::jsonb, now() + interval '90 days'),
  ('v_demo_002', 45, '{"page_views":4,"time_on_site_seconds":90,"categories_viewed":["fine-art"],"submission_started":false}'::jsonb, now() + interval '30 days');
