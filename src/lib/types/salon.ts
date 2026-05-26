export type RoomInviteStatus = 'pending' | 'accepted' | 'declined' | 'expired' | 'cancelled';

export interface RoomInvite {
  id: string;
  roomId: string;
  inviterUserId: string;
  inviteeEmail: string;
  inviteeUserId?: string;
  accessType: 'member' | 'viewer' | 'contributor';
  status: RoomInviteStatus;
  message?: string;
  expiresAt: string;
  respondedAt?: string;
  createdAt: string;
  updatedAt: string;
}
