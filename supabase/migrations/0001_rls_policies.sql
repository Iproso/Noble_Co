-- Zone 0 — Public Knowledge
CREATE POLICY "collector_assets_public_read" ON collector_assets FOR SELECT USING (public_visibility = true);
CREATE POLICY "media_assets_public_read" ON media_assets FOR SELECT USING (is_public = true);
CREATE POLICY "heritage_passports_public_read" ON heritage_passports FOR SELECT USING (public_visibility = true);
CREATE POLICY "cms_content_public_read" ON cms_content FOR SELECT USING (published_at IS NOT NULL);
CREATE POLICY "legal_trust_pages_public_read" ON legal_trust_pages FOR SELECT USING (true);
CREATE POLICY "auction_lots_public_read" ON auction_lots FOR SELECT USING (public_visibility = true);

-- Zone 1 — Owner Scoped
CREATE POLICY "collector_assets_owner_scoped" ON collector_assets FOR ALL USING (created_by = auth.uid());
CREATE POLICY "media_assets_owner_scoped" ON media_assets FOR ALL USING (uploaded_by = auth.uid());
CREATE POLICY "submission_drafts_owner_scoped" ON submission_drafts FOR ALL USING (user_id = auth.uid());
CREATE POLICY "room_access_owner_scoped" ON room_access FOR SELECT USING (user_id = auth.uid());

-- Zone 2 — Salon Access
CREATE POLICY "private_rooms_salon_access" ON private_rooms FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM room_access WHERE room_id = id AND user_id = auth.uid()
    AND (expires_at IS NULL OR expires_at > now()) AND revoked_at IS NULL
  )
);

-- Zone 3 — Evidence Vault
CREATE POLICY "audit_events_evidence_vault_access" ON audit_events FOR SELECT USING (
  auth.role() IN ('reviewer', 'specialist', 'admin')
);
CREATE POLICY "security_events_evidence_vault_access" ON security_events FOR SELECT USING (
  auth.role() IN ('reviewer', 'specialist', 'admin')
);

-- Zone 5 — Auction Authority
CREATE POLICY "auction_lots_auction_authority" ON auction_lots FOR ALL USING (
  auth.role() = 'service_role'
);
