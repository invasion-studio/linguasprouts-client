"use client";

import { PrimaryButton } from "@/src/shared/ui/PrimaryButton";
import { Alert, Box, Button, Dialog, Stack, Typography } from "@mui/material";

export default function RemoveEmailDialog({
  isOpen,
  email,
  isRemoving,
  error,
  onCancel,
  onConfirm,
}: {
  isOpen: boolean;
  email: string | null;
  isRemoving: boolean;
  error?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={isRemoving ? undefined : onCancel}
      aria-labelledby="remove-email-title"
      sx={{
        // Bottom sheet on mobile, centred dialog from sm up.
        "& .MuiDialog-container": {
          alignItems: { xs: "flex-end", sm: "center" },
        },
        "& .MuiPaper-root.MuiDialog-paper": {
          borderRadius: { xs: "24px 24px 0 0", sm: "16px" },
          margin: { xs: 0, sm: "20px" },
          width: "100%",
          maxWidth: { xs: "100%", sm: "400px" },
        },
      }}
    >
      <Box sx={{ padding: { xs: "24px 16px 16px", sm: "24px" } }}>
        <Stack gap={"16px"}>
          <Typography id="remove-email-title" variant="h4">
            Remove this email?
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>{email}</strong> will stop receiving admin emails.
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>

        <Stack
          flexDirection={{ xs: "column-reverse", sm: "row" }}
          gap={"8px"}
          marginTop={"32px"}
        >
          <PrimaryButton
            onClick={onCancel}
            disabled={isRemoving}
            variant="contained"
            color="inherit"
            disableElevation
            sx={{
              bgcolor: (theme) => theme.palette.ibmgrey[10],
              color: (theme) => theme.palette.text.primary,
              textTransform: "none",
              borderRadius: "200px",
              flex: { xs: "none", sm: 1 },
              minHeight: "40px",
            }}
          >
            Keep
          </PrimaryButton>
          <Button
            onClick={onConfirm}
            disabled={isRemoving}
            variant="contained"
            color="error"
            disableElevation
            sx={{
              textTransform: "none",
              borderRadius: "200px",
              flex: { xs: "none", sm: 1 },
              minHeight: "40px",
              color: "white",
            }}
          >
            {isRemoving ? "Removing..." : "Remove"}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}
