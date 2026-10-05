"use client";

import { useCreateFrenchImmigRegStripeCheckout } from "@/src/entities/frenchImmigSprintReg";
import StripeCheckoutRedirect from "@/src/shared/ui/StripeCheckoutRedirect";

export default function StripePaymentPage() {
  return (
    <StripeCheckoutRedirect
      useCheckoutMutation={useCreateFrenchImmigRegStripeCheckout}
      programName="French Immigration Sprint"
    />
  );
}
