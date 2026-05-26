// No live payment processing — stubbed for future native integration.

export interface PaymentAdapter {
  isAvailable(): boolean;
  processPayment(amount: number, currency: string): Promise<{ success: boolean; transactionId?: string }>;
}

export const paymentAdapter: PaymentAdapter = {
  isAvailable() {
    return false;
  },
  async processPayment(_amount: number, _currency: string) {
    throw new Error('Payments are not available in the web fallback');
  },
};
