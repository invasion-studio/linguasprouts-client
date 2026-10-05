"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import type { UseMutationResult } from "@tanstack/react-query";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { PrimaryButton } from "./PrimaryButton";

export type CheckoutSession = { sessionUrl: string };

/** Shape every entity-level "create checkout session" hook must match. */
export type UseCheckoutSessionMutation = () => UseMutationResult<
  CheckoutSession,
  Error,
  string
>;

export interface StripeCheckoutRedirectProps {
  /** The entity hook that turns a registration id into a Stripe checkout session. */
  useCheckoutMutation: UseCheckoutSessionMutation;
  /** Query param holding the registration id. Defaults to "registration_id". */
  searchParam?: string;
  /** Used in the loading/empty copy, e.g. "Day Camp". */
  programName?: string;
}

function CheckoutRedirect({
  useCheckoutMutation,
  searchParam = "registration_id",
  programName,
}: StripeCheckoutRedirectProps) {
  const registrationId = useSearchParams().get(searchParam);
  const { mutate, isError, error } = useCheckoutMutation();
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
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 440,
          textAlign: "center",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          px: { xs: 3, sm: 5 },
          py: 5,
        }}
      >
        {failed ? (
          <Stack gap={2} alignItems="center">
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                bgcolor: "rgba(223, 34, 29, 0.1)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <ErrorOutlineRoundedIcon
                sx={{ fontSize: 36, color: "error.main" }}
              />
            </Box>
            <Typography variant="h4">
              {!registrationId
                ? "We lost track of your registration"
                : "Checkout couldn't start"}
            </Typography>
            <Typography color="text.secondary">
              {!registrationId
                ? "This payment link is missing a registration reference. Please use the link from your confirmation email, or contact us for a new one."
                : error?.message ||
                  "Something went wrong preparing your secure checkout."}
            </Typography>
            {registrationId && (
              <PrimaryButton onClick={start}>Try again</PrimaryButton>
            )}
          </Stack>
        ) : (
          <Stack gap={2} alignItems="center">
            <CircularProgress color="primary" />
            <Typography variant="h5">
              Taking you to secure checkout
            </Typography>
            <Typography color="text.secondary">
              {programName
                ? `Hold tight, we're preparing your ${programName} payment.`
                : "Hold tight while we prepare your payment with Stripe."}
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

/**
 * Reusable "create a Stripe checkout session from a registration id and redirect"
 * flow. Reads the registration id from the URL, triggers the given entity hook,
 * and forwards the browser to the returned Stripe session URL on success.
 *
 * Usage: point a `/payment/stripe` route at this component, passing the
 * entity-specific `useCreateCheckout`/`useCreate*StripeCheckout` hook.
 */
export default function StripeCheckoutRedirect(
  props: StripeCheckoutRedirectProps,
) {
  return (
    <Suspense>
      <CheckoutRedirect {...props} />
    </Suspense>
  );
}
