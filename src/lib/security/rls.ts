// RLS policy definitions for Supabase.
// These are enforced at the database level — never rely on UI-only gating.

export const RLS_POLICIES = {
  // Zone 0 — Public Knowledge
  publicRead: `
    CREATE POLICY "public_read" ON {table}
    FOR SELECT
    USING (public_visibility = true);
  `,

  // Zone 1 — Member (owner-scoped)
  ownerScoped: `
    CREATE POLICY "owner_scoped" ON {table}
    USING (user_id = auth.uid());
  `,

  // Zone 2 — Collectors' Salon (access-record-gated)
  salonAccess: `
    CREATE POLICY "salon_access" ON {table}
    USING (
      EXISTS (
        SELECT 1 FROM room_access
        WHERE room_id = {table}.room_id
        AND user_id = auth.uid()
        AND (expires_at IS NULL OR expires_at > now())
        AND revoked_at IS NULL
      )
    );
  `,

  // Zone 3 — Evidence Vault (strict role)
  evidenceVaultAccess: `
    CREATE POLICY "evidence_vault_access" ON {table}
    USING (
      auth.role() IN ('reviewer', 'specialist', 'admin')
    );
  `,

  // Zone 4 — Commercial (least privilege)
  commercialAccess: `
    CREATE POLICY "commercial_access" ON {table}
    USING (
      auth.role() IN ('finance_operator', 'admin', 'platform_owner')
    );
  `,

  // Zone 5 — Auction Authority (trusted server only)
  auctionAuthority: `
    CREATE POLICY "auction_authority" ON {table}
    USING (
      auth.role() = 'service_role'
    );
  `,
} as const;

// Helper to generate RLS policy name
export function policyName(table: string, action: string): string {
  return `${table}_${action}`;
}
