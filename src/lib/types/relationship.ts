export interface RelationshipDisclosure {
  id: string;
  introducerId: string;
  referralLeadId?: string;
  relationshipType: 'family' | 'business_partner' | 'professional_advisor' | 'close_associate' | 'other';
  relationshipDetail?: string;
  disclosesFinancialInterest: boolean;
  financialInterestDetail?: string;
  agreedToTerms: boolean;
  agreedAt: string;
  createdAt: string;
  updatedAt: string;
}
