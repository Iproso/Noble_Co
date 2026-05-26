-- Identity & Access
CREATE TABLE roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(64) NOT NULL UNIQUE,
  permissions jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_system boolean NOT NULL DEFAULT false,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar(255) NOT NULL UNIQUE,
  role_id uuid REFERENCES roles(id),
  locale varchar(10) NOT NULL DEFAULT 'en',
  is_active boolean NOT NULL DEFAULT true,
  last_login_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  deleted_at timestamp
);

CREATE TABLE user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES users(id),
  display_name varchar(128),
  bio text,
  avatar_url text,
  phone varchar(32),
  nationality varchar(64),
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  resource varchar(128) NOT NULL,
  action varchar(64) NOT NULL,
  conditions jsonb DEFAULT '{}'::jsonb,
  description text,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE consent_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id),
  consent_type varchar(64) NOT NULL,
  version varchar(16) NOT NULL,
  granted boolean NOT NULL,
  timestamp timestamp NOT NULL DEFAULT now(),
  ip_context jsonb DEFAULT '{}'::jsonb
);

CREATE TABLE sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id),
  token text NOT NULL UNIQUE,
  expires_at timestamp NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

-- Taxonomy
CREATE TABLE collector_asset_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar(128) NOT NULL UNIQUE,
  name_en text NOT NULL,
  name_ar text NOT NULL,
  description_en text,
  description_ar text,
  risk_tier integer NOT NULL DEFAULT 1,
  parent_id uuid,
  display_order integer DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE category_risk_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL UNIQUE REFERENCES collector_asset_categories(id),
  risk_tier integer NOT NULL DEFAULT 1,
  requires_specialist_review boolean NOT NULL DEFAULT false,
  requires_legal_review boolean NOT NULL DEFAULT false,
  requires_provenance_docs boolean NOT NULL DEFAULT false,
  requires_export_license boolean NOT NULL DEFAULT false,
  restricted_visibility boolean NOT NULL DEFAULT false,
  notes_en text,
  notes_ar text,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE category_requirement_sets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES collector_asset_categories(id),
  required_fields jsonb NOT NULL DEFAULT '[]'::jsonb,
  optional_fields jsonb DEFAULT '[]'::jsonb,
  evidence_required jsonb DEFAULT '[]'::jsonb,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE category_metadata_schemas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES collector_asset_categories(id),
  schema jsonb NOT NULL DEFAULT '{}'::jsonb,
  version varchar(16) NOT NULL DEFAULT '1.0',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- Artifact / Submissions
CREATE TABLE collector_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar(255) NOT NULL UNIQUE,
  category_id uuid NOT NULL REFERENCES collector_asset_categories(id),
  risk_tier integer NOT NULL DEFAULT 1,
  title_en text NOT NULL,
  title_ar text,
  description_en text,
  description_ar text,
  year_period varchar(64),
  maison varchar(255),
  maker varchar(255),
  provenance_summary text,
  condition_summary text,
  review_state varchar(64) DEFAULT 'pending',
  evidence_score integer DEFAULT 0,
  confidence_label varchar(64),
  passport_available boolean DEFAULT false,
  public_visibility boolean DEFAULT false,
  category_metadata jsonb DEFAULT '{}'::jsonb,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  deleted_at timestamp
);

CREATE TABLE artifact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id),
  asset_id uuid REFERENCES collector_assets(id),
  category_id uuid NOT NULL REFERENCES collector_asset_categories(id),
  purpose varchar(64) NOT NULL,
  status varchar(64) NOT NULL DEFAULT 'draft',
  risk_tier integer DEFAULT 1,
  reviewer_id uuid REFERENCES users(id),
  submitted_at timestamp,
  reviewed_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE submission_drafts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id),
  category_id uuid REFERENCES collector_asset_categories(id),
  data jsonb NOT NULL DEFAULT '{}'::jsonb,
  current_step integer DEFAULT 0,
  completed_steps jsonb DEFAULT '[]'::jsonb,
  expires_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE evidence_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES artifact_submissions(id),
  request_type varchar(64) NOT NULL,
  description_en text,
  description_ar text,
  status varchar(32) NOT NULL DEFAULT 'pending',
  responded_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE submission_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES artifact_submissions(id),
  previous_status varchar(64),
  new_status varchar(64) NOT NULL,
  changed_by uuid REFERENCES users(id),
  reason text,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE owner_declarations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES artifact_submissions(id),
  declaration_type varchar(64) NOT NULL,
  accepted boolean NOT NULL,
  accepted_at timestamp NOT NULL DEFAULT now(),
  ip_context jsonb
);

-- Media
CREATE TABLE media_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid REFERENCES collector_assets(id),
  original_filename text,
  storage_path text NOT NULL,
  mime_type varchar(64),
  file_size integer,
  width integer,
  height integer,
  is_public boolean NOT NULL DEFAULT false,
  visibility_state varchar(32) DEFAULT 'private',
  review_state varchar(32) DEFAULT 'pending',
  exif_stripped boolean DEFAULT false,
  uploaded_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE media_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  media_id uuid NOT NULL REFERENCES media_assets(id),
  variant_type varchar(32) NOT NULL,
  storage_path text NOT NULL,
  width integer,
  height integer,
  file_size integer,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE document_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid REFERENCES collector_assets(id),
  original_filename text,
  storage_path text NOT NULL,
  mime_type varchar(64),
  file_size integer,
  is_public boolean NOT NULL DEFAULT false,
  uploaded_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE evidence_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES collector_assets(id),
  type varchar(64) NOT NULL,
  title_en text,
  title_ar text,
  description_en text,
  description_ar text,
  strength_score integer DEFAULT 0,
  source varchar(128),
  status varchar(32) NOT NULL DEFAULT 'pending',
  superseded_by_id uuid,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE media_access_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  media_id uuid NOT NULL REFERENCES media_assets(id),
  user_id uuid REFERENCES users(id),
  access_type varchar(32) NOT NULL,
  ip_address varchar(45),
  created_at timestamp NOT NULL DEFAULT now()
);

-- Heritage / Passports
CREATE TABLE heritage_passports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL UNIQUE REFERENCES collector_assets(id),
  version integer NOT NULL DEFAULT 1,
  status varchar(32) NOT NULL DEFAULT 'draft',
  public_preview jsonb DEFAULT '{}'::jsonb,
  private_dossier jsonb DEFAULT '{}'::jsonb,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE passport_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  passport_id uuid NOT NULL REFERENCES heritage_passports(id),
  version_number integer NOT NULL,
  snapshot jsonb NOT NULL,
  change_summary text,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE custody_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES collector_assets(id),
  type varchar(64) NOT NULL,
  event_date date,
  location text,
  custodian varchar(255),
  notes text,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE provenance_timeline_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES collector_assets(id),
  date_from varchar(32),
  date_to varchar(32),
  owner text,
  location text,
  evidence_ref text,
  notes text,
  display_order integer DEFAULT 0,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE condition_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL REFERENCES collector_assets(id),
  examiner varchar(255),
  overall varchar(64),
  parts jsonb DEFAULT '[]'::jsonb,
  notes text,
  is_restoration boolean DEFAULT false,
  examined_at timestamp NOT NULL DEFAULT now(),
  created_at timestamp NOT NULL DEFAULT now()
);

-- CMS
CREATE TABLE cms_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar(255) NOT NULL,
  type varchar(64) NOT NULL,
  locale varchar(10) NOT NULL,
  title text,
  body jsonb DEFAULT '{}'::jsonb,
  excerpt text,
  status varchar(32) NOT NULL DEFAULT 'draft',
  version integer NOT NULL DEFAULT 1,
  workflow_state varchar(64) DEFAULT 'draft',
  seo_fields jsonb DEFAULT '{}'::jsonb,
  smc_fields jsonb DEFAULT '{}'::jsonb,
  legal_review_required boolean DEFAULT false,
  legal_review_state varchar(32) DEFAULT 'not_required',
  category_id uuid,
  tags jsonb DEFAULT '[]'::jsonb,
  created_by uuid REFERENCES users(id),
  published_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  deleted_at timestamp
);

CREATE TABLE cms_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid NOT NULL REFERENCES cms_content(id),
  version_number integer NOT NULL,
  snapshot jsonb NOT NULL,
  change_summary text,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE cms_workflow_states (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid NOT NULL REFERENCES cms_content(id),
  state varchar(64) NOT NULL,
  reviewer_id uuid REFERENCES users(id),
  reason text,
  created_at timestamp NOT NULL DEFAULT now()
);

-- Legal / Trust
CREATE TABLE legal_trust_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar(255) NOT NULL,
  locale varchar(10) NOT NULL,
  title text NOT NULL,
  body jsonb NOT NULL DEFAULT '{}'::jsonb,
  version integer NOT NULL DEFAULT 1,
  review_state varchar(64) DEFAULT 'draft',
  legal_reviewed boolean DEFAULT false,
  legal_reviewer_id uuid REFERENCES users(id),
  published_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE legal_trust_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid NOT NULL REFERENCES legal_trust_pages(id),
  version integer NOT NULL,
  snapshot jsonb NOT NULL,
  change_summary text,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE terms_acceptance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  terms_type varchar(64) NOT NULL,
  terms_version varchar(16) NOT NULL,
  user_id uuid NOT NULL REFERENCES users(id),
  accepted_at timestamp NOT NULL DEFAULT now(),
  locale varchar(10) NOT NULL,
  action_context varchar(128),
  related_object_id uuid,
  ip_context jsonb
);

-- Auction
CREATE TABLE auctions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_ar text,
  description text,
  start_date timestamp NOT NULL,
  end_date timestamp NOT NULL,
  status varchar(32) NOT NULL DEFAULT 'preview',
  buyer_premium_policy_id uuid,
  terms_version_id uuid,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE auction_lots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auction_id uuid NOT NULL REFERENCES auctions(id),
  asset_id uuid NOT NULL REFERENCES collector_assets(id),
  lot_number integer NOT NULL,
  estimate_low numeric,
  estimate_high numeric,
  reserve_price text,
  start_price numeric,
  display_order integer,
  viewing_available boolean DEFAULT false,
  condition_report_available boolean DEFAULT false,
  status varchar(32) NOT NULL DEFAULT 'preview',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE auction_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auction_id uuid NOT NULL REFERENCES auctions(id),
  user_id uuid NOT NULL REFERENCES users(id),
  status varchar(32) NOT NULL DEFAULT 'pending',
  terms_accepted boolean DEFAULT false,
  terms_version_id uuid,
  bidder_approved boolean DEFAULT false,
  approved_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- Salon / Private Rooms
CREATE TABLE private_rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en text NOT NULL,
  name_ar text,
  description_en text,
  description_ar text,
  access_type varchar(32) NOT NULL DEFAULT 'invite',
  is_active boolean NOT NULL DEFAULT true,
  created_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE room_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES private_rooms(id),
  user_id uuid NOT NULL REFERENCES users(id),
  access_type varchar(32) NOT NULL DEFAULT 'member',
  granted_by uuid REFERENCES users(id),
  expires_at timestamp,
  revoked_at timestamp,
  reason text,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE room_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES private_rooms(id),
  user_id uuid NOT NULL REFERENCES users(id),
  content text NOT NULL,
  is_confidential boolean DEFAULT false,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE room_access_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES private_rooms(id),
  user_id uuid NOT NULL REFERENCES users(id),
  action varchar(32) NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

-- Luxury Profiles
CREATE TABLE watch_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL UNIQUE REFERENCES collector_assets(id),
  reference varchar(128),
  year varchar(16),
  material text,
  movement_type varchar(64),
  caliber varchar(64),
  condition text,
  box_papers boolean DEFAULT false,
  service_history text,
  provenance_notes text,
  specialist_review_state varchar(32) DEFAULT 'pending',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE jewelry_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL UNIQUE REFERENCES collector_assets(id),
  material text,
  stones jsonb DEFAULT '[]'::jsonb,
  certificates jsonb DEFAULT '[]'::jsonb,
  maison varchar(255),
  period varchar(64),
  condition text,
  provenance text,
  specialist_review_state varchar(32) DEFAULT 'pending',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE handbag_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL UNIQUE REFERENCES collector_assets(id),
  maison varchar(255),
  model varchar(255),
  material text,
  hardware text,
  condition text,
  accessories jsonb DEFAULT '[]'::jsonb,
  receipt_provenance text,
  specialist_review_state varchar(32) DEFAULT 'pending',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE design_object_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id uuid NOT NULL UNIQUE REFERENCES collector_assets(id),
  designer varchar(255),
  period varchar(64),
  material text,
  dimensions text,
  condition text,
  restoration text,
  provenance text,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- Growth / CRM
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  email varchar(255),
  name varchar(255),
  source varchar(64),
  intent_score integer DEFAULT 0,
  journey_state varchar(64),
  consents jsonb DEFAULT '{}'::jsonb,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE crm_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id),
  assigned_to uuid REFERENCES users(id),
  status varchar(32) DEFAULT 'new',
  notes text,
  last_contacted_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE visitor_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id varchar(128),
  score integer DEFAULT 0,
  signals jsonb DEFAULT '{}'::jsonb,
  expires_at timestamp,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- Introductions / Referrals
CREATE TABLE introducer_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES users(id),
  introducer_type varchar(64),
  is_eligible boolean DEFAULT false,
  agreement_accepted boolean DEFAULT false,
  agreement_version varchar(16),
  quality_score integer DEFAULT 0,
  notes text,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE referral_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  introducer_id uuid NOT NULL REFERENCES introducer_profiles(id),
  referral_link_id uuid,
  lead_email varchar(255),
  lead_name varchar(255),
  status varchar(32) NOT NULL DEFAULT 'pending',
  double_optin_status varchar(32) DEFAULT 'pending',
  consent_record_id uuid,
  notes text,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE referral_consent_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  introducer_id uuid NOT NULL REFERENCES introducer_profiles(id),
  type varchar(64) NOT NULL,
  granted boolean NOT NULL,
  version varchar(16) NOT NULL,
  timestamp timestamp NOT NULL DEFAULT now()
);

CREATE TABLE referral_audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_lead_id uuid,
  action varchar(128) NOT NULL,
  actor_id uuid,
  details jsonb DEFAULT '{}'::jsonb,
  created_at timestamp NOT NULL DEFAULT now()
);

-- Audit & Security
CREATE TABLE audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action varchar(128) NOT NULL,
  actor_id uuid,
  actor_role varchar(64),
  resource_type varchar(64),
  resource_id uuid,
  details jsonb DEFAULT '{}'::jsonb,
  ip_address varchar(45),
  user_agent text,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE security_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type varchar(64) NOT NULL,
  severity varchar(16) NOT NULL DEFAULT 'info',
  actor_id uuid,
  details jsonb DEFAULT '{}'::jsonb,
  ip_address varchar(45),
  created_at timestamp NOT NULL DEFAULT now()
);

-- Indexes
-- Identity
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role_id ON users(role_id);

-- Artifact / Assets
CREATE INDEX idx_collector_assets_slug ON collector_assets(slug);
CREATE INDEX idx_collector_assets_category_id ON collector_assets(category_id);
CREATE INDEX idx_collector_assets_review_state ON collector_assets(review_state);
CREATE INDEX idx_collector_assets_visibility_risk ON collector_assets(public_visibility, risk_tier);

-- Media
CREATE INDEX idx_media_assets_asset_id ON media_assets(asset_id);
CREATE INDEX idx_media_assets_uploaded_by ON media_assets(uploaded_by);
CREATE INDEX idx_media_assets_visibility_state ON media_assets(visibility_state);

-- Submission Drafts
CREATE INDEX idx_submission_drafts_user_id ON submission_drafts(user_id);
CREATE INDEX idx_submission_drafts_expires_at ON submission_drafts(expires_at);

-- Audit & Security
CREATE INDEX idx_audit_events_action_created ON audit_events(action, created_at);
CREATE INDEX idx_audit_events_actor_id ON audit_events(actor_id);
CREATE INDEX idx_security_events_type_severity_created ON security_events(event_type, severity, created_at);

-- Room Access
CREATE INDEX idx_room_access_room_user ON room_access(room_id, user_id);

-- Heritage Passports
CREATE INDEX idx_heritage_passports_asset_id ON heritage_passports(asset_id);

-- Auction Lots
CREATE INDEX idx_auction_lots_auction_lot ON auction_lots(auction_id, lot_number);
