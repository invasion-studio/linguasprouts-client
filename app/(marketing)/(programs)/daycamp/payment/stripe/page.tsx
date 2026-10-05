"use client";

import { useCreateCheckout } from "@/src/entities/dayCampReg";
import StripeCheckoutRedirect from "@/src/shared/ui/StripeCheckoutRedirect";

export default function StripePaymentPage() {
  return (
    <StripeCheckoutRedirect
      useCheckoutMutation={useCreateCheckout}
      programName="Day Camp"
    />
  );
}
