export type CustodianType = 'owner' | 'gallery' | 'museum' | 'storage_facility' | 'shipping_in_transit' | 'auction_house' | 'restorer' | 'exhibition' | 'other';

export interface ObjectLocation {
  id: string;
  assetId: string;
  currentCustodian: string;
  custodianType: CustodianType;
  address?: string;
  country?: string;
  isSecureStorage: boolean;
  climateControlled: boolean;
  accessNotes?: string;
  movedFrom?: string;
  movedAt?: string;
  notes?: string;
  updatedAt: string;
  createdAt: string;
}

export interface CustodyChainEvent {
  id: string;
  assetId: string;
  fromCustodian?: string;
  toCustodian: string;
  eventType: 'transfer' | 'loan' | 'sale' | 'return' | 'inspection' | 'restoration' | 'exhibition';
  eventDate: string;
  notes?: string;
  createdBy?: string;
  createdAt: string;
}
