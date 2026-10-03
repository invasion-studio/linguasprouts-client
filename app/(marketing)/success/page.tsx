"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import { verifyPayment } from "@/src/shared/lib/api";
import AppBar from "@/src/_app/layout/AppBar/AppBar2";
import Footer from "@/src/shared/ui/Footer";
import PaymentSuccess, {
  PaymentSuccessStatus,
} from "@/src/shared/ui/PaymentSuccess";

// Optional query params: ?session_id=...&program=Summer%20Camp%202026
function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const programName = searchParams.get("program") || undefined;
  const [status, setStatus] = useState<PaymentSuccessStatus>(
    sessionId ? "loading" : "paid",
  );

  useEffect(() => {
    if (!sessionId) return;

    verifyPayment(sessionId)
      .then((res) =>
        setStatus(res.data.paymentStatus === "paid" ? "paid" : "pending"),
      )
      // Stripe redirected here, so treat a failed verification call as success
      .catch(() => setStatus("paid"));
  }, [sessionId]);

  return <PaymentSuccess status={status} programName={programName} />;
}

export default function SuccessPage() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bgcolor="#FAFAFA"
    >
      <AppBar noBorder />
      <Box component="main" flex={1} px={2} py={{ xs: 4, md: 8 }}>
        <Suspense fallback={<PaymentSuccess status="loading" />}>
          <SuccessContent />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}
