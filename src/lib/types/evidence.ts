export interface EvidenceVersion {
  id: string;
  evidenceItemId: string;
  versionNumber: number;
  snapshot: Record<string, unknown>;
  changeSummary?: string;
  createdBy?: string;
  createdAt: string;
}

export interface EvidenceItemWithVersions {
  id: string;
  type: string;
  titleEn?: string;
  titleAr?: string;
  strengthScore: number;
  source?: string;
  status: 'pending' | 'verified' | 'disputed' | 'superseded';
  currentVersion: number;
  versions: EvidenceVersion[];
  createdAt: string;
  updatedAt: string;
}
