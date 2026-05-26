-- Default Roles
INSERT INTO roles (name, permissions, is_system) VALUES
  ('admin', '["all"]'::jsonb, true),
  ('reviewer', '["submissions.read","submissions.review","media.read"]'::jsonb, true),
  ('specialist', '["submissions.read","submissions.evaluate","passports.create"]'::jsonb, true),
  ('member', '["artifacts.submit","artifacts.read","profile.manage"]'::jsonb, true),
  ('finance_operator', '["finance.read","finance.reconcile","invoices.manage"]'::jsonb, true),
  ('platform_owner', '["all","admin.manage"]'::jsonb, true);

-- Default Categories
INSERT INTO collector_asset_categories (slug, name_en, name_ar, risk_tier, is_active) VALUES
  ('fine-watches', 'Fine Watches', 'الساعات الفاخرة', 2, true),
  ('fine-jewelry', 'Fine Jewelry', 'المجوهرات الثمينة', 2, true),
  ('handbags-accessories', 'Handbags & Accessories', 'الحقائب والإكسسوارات', 1, true),
  ('rare-wines-spirits', 'Rare Wines & Spirits', 'النوادر من النبيذ والمشروبات', 3, true),
  ('fine-art', 'Fine Art', 'الأعمال الفنية', 3, true),
  ('classic-cars', 'Classic Cars', 'السيارات الكلاسيكية', 3, true),
  ('jewelry-watches', 'Jewelry & Watches', 'المجوهرات والساعات', 2, true),
  ('contemporary-art', 'Contemporary Art', 'الفن المعاصر', 2, true),
  ('design-objects', 'Design Objects', 'الأشياء التصميمية', 1, true),
  ('rare-books', 'Rare Books & Manuscripts', 'الكتب النادرة والمخطوطات', 2, true);

-- Sample CMS Content Types
INSERT INTO cms_content (slug, type, locale, title, status) VALUES
  ('home-hero', 'page_section', 'en', 'Home Hero Banner', 'published'),
  ('home-hero', 'page_section', 'ar', 'الشريط الرئيسي للصفحة الرئيسية', 'published'),
  ('about-us', 'page', 'en', 'About Noble Collectors', 'published'),
  ('about-us', 'page', 'ar', 'عن نوبل كوليكتورز', 'published'),
  ('privacy-policy', 'legal', 'en', 'Privacy Policy', 'published'),
  ('privacy-policy', 'legal', 'ar', 'سياسة الخصوصية', 'published');
