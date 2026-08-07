export interface InteracPayment {
  interacPaymentId: string;
  name: string;
  email: string;
  registrationId: string;
  amountToPay: number;
  paymentStatus: "paid" | "pending";
  orderId: string | null;
}
