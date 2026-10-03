"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useCreateFrenchImmigRegStripeCheckout } from "@/src/entities/frenchImmigSprintReg";

function StripeRedirect() {
  const registrationId = useSearchParams().get("registration_id");
  const { mutate, isError, error } = useCreateFrenchImmigRegStripeCheckout();
  const started = useRef(false);

  const start = () => {
    if (!registrationId) return;
    mutate(registrationId, {
      onSuccess: (data) => {
        window.location.href = data.sessionUrl;
      },
    });
  };

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationId]);

  const failed = !registrationId || isError;

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      bgcolor="#FAFAFA"
      p={2}
      textAlign="center"
    >
      {failed ? (
        <>
          <Typography color="error">
            {!registrationId
              ? "Missing registration ID."
              : error?.message || "Unable to start checkout."}
          </Typography>
          {registrationId && (
            <Button variant="contained" onClick={start}>
              Try again
            </Button>
          )}
        </>
      ) : (
        <>
          <CircularProgress />
          <Typography>Redirecting to secure checkout…</Typography>
        </>
      )}
    </Box>
  );
}

export default function StripePaymentPage() {
  return (
    <Suspense>
      <StripeRedirect />
    </Suspense>
  );
}
