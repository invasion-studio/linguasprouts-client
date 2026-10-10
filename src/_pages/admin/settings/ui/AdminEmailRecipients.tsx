"use client";

import {
  DEFAULT_ADMIN_EMAIL,
  useCreateAdmin,
  useDeleteAdmin,
  useGetAdmins,
} from "@/src/entities/admin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  alpha,
  Box,
  Button,
  Chip,
  IconButton,
  Skeleton,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import AddEmailForm from "./AddEmailForm";
import RemoveEmailDialog from "./RemoveEmailDialog";

function EmailRow({
  email,
  isDefault,
  onRemove,
}: {
  email: string;
  isDefault?: boolean;
  onRemove?: () => void;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={"12px"}
      sx={{
        minHeight: "64px",
        paddingY: "8px",
        paddingLeft: { xs: "16px", sm: "24px" },
        paddingRight: { xs: "8px", sm: "16px" },
      }}
    >
      <Box
        aria-hidden
        sx={{
          flexShrink: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "uppercase",
          color: "text.primary",
          bgcolor: (theme) =>
            isDefault
              ? theme.palette.ibmgrey[10]
              : alpha(theme.palette.primary.main, 0.2),
        }}
      >
        {email.charAt(0)}
      </Box>

      <Stack flex={1} minWidth={0} gap={"2px"}>
        <Typography variant="body2" sx={{ overflowWrap: "anywhere" }}>
          {email}
        </Typography>
        {isDefault && (
          <Typography variant="caption" color="textSecondary">
            Always receives admin emails
          </Typography>
        )}
      </Stack>

      {isDefault ? (
        <Tooltip title="The default email can't be removed">
          <Chip
            icon={<LockOutlinedIcon />}
            label="Default"
            size="small"
            sx={{
              flexShrink: 0,
              marginRight: { xs: "8px", sm: 0 },
              bgcolor: (theme) => theme.palette.ibmgrey[10],
              color: "text.secondary",
              "& .MuiChip-icon": { color: "inherit" },
            }}
          />
        </Tooltip>
      ) : (
        <IconButton
          aria-label={`Remove ${email}`}
          onClick={onRemove}
          sx={{
            flexShrink: 0,
            width: "44px",
            height: "44px",
            color: "text.secondary",
            "&:hover": {
              color: "error.main",
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            },
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </Stack>
  );
}

export default function AdminEmailRecipients() {
  const { data, isPending, isError, error, refetch } = useGetAdmins();
  const create = useCreateAdmin();
  const remove = useDeleteAdmin();

  const [emailToRemove, setEmailToRemove] = useState<string | null>(null);
  const [diaogOpen, setDialogOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const addedEmails = (data ?? [])
    .map((admin) => admin.email)
    .filter((email) => email.toLowerCase() !== DEFAULT_ADMIN_EMAIL);

  const handleAdd = async (email: string) => {
    await create.mutateAsync({ email });
    setNotice("Email added");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setTimeout(() => {
      setEmailToRemove(null);
    }, 500);
    remove.reset();
  };

  const handleConfirmRemove = async () => {
    if (!emailToRemove) return;
    try {
      await remove.mutateAsync(emailToRemove);
      setNotice("Email removed");
      handleCloseDialog();
    } catch {
      // Shown in the dialog via remove.error.
    }
  };

  const total = addedEmails.length + 1;

  return (
    <MotionConfig reducedMotion="user">
      <Stack maxWidth={"680px"}>
        <Stack marginBottom={"24px"}>
          <Typography
            variant="h3"
            sx={{
              fontSize: (theme) => ({
                xs: "24px",
                md: theme.typography.h3.fontSize,
              }),
              lineHeight: (theme) => ({
                xs: "40px",
                md: theme.typography.h3.fontSize,
              }),
            }}
          >
            Settings
          </Typography>
        </Stack>

        <Box
          component="section"
          aria-labelledby="recipients-heading"
          sx={{
            bgcolor: "white",
            borderRadius: { xs: "16px", sm: "20px" },
            borderColor: "divider",
            overflow: "hidden",
          }}
        >
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            gap={"12px"}
            sx={{ padding: { xs: "20px 16px 16px", sm: "24px 24px 20px" } }}
          >
            <Stack gap={"4px"}>
              <Typography
                id="recipients-heading"
                variant="subtitle1"
                component="h2"
              >
                Admin email recipients
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Everyone on this list receives admin emails.
              </Typography>
            </Stack>
            {!isPending && (
              <Chip
                label={`${total} ${total === 1 ? "person" : "people"}`}
                size="small"
                sx={{
                  flexShrink: 0,
                  bgcolor: (theme) => theme.palette.ibmgrey[10],
                  fontWeight: 600,
                  color: (theme) => theme.palette.ibmgrey[70],
                }}
              />
            )}
          </Stack>

          <Box
            component="ul"
            margin={0}
            padding={0}
            sx={{
              listStyle: "none",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <li>
              <EmailRow email={DEFAULT_ADMIN_EMAIL} isDefault />
            </li>

            {isPending && (
              <li>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={"12px"}
                  sx={{
                    minHeight: "64px",
                    paddingX: { xs: "16px", sm: "24px" },
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Skeleton variant="circular" width={36} height={36} />
                  <Skeleton width={"55%"} />
                </Stack>
              </li>
            )}

            <AnimatePresence initial={false}>
              {addedEmails.map((email) => (
                <motion.li
                  key={email}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
                    <EmailRow
                      email={email}
                      onRemove={() => {
                        setEmailToRemove(email);
                        setDialogOpen(true);
                      }}
                    />
                  </Box>
                </motion.li>
              ))}
            </AnimatePresence>
          </Box>

          {/* {!isPending && !isError && addedEmails.length === 0 && (
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                borderTop: "1px solid",
                borderColor: "divider",
                padding: { xs: "16px", sm: "16px 24px" },
              }}
            >
              No extra recipients yet. Add a teammate below.
            </Typography>
          )} */}

          {isError && (
            <Alert
              severity="error"
              sx={{ margin: { xs: "12px", sm: "16px 24px" } }}
              action={
                <Button color="inherit" size="small" onClick={() => refetch()}>
                  Retry
                </Button>
              }
            >
              We couldn&apos;t load the added emails. {error.message}
            </Alert>
          )}

          <Box
            sx={{
              borderTop: "1px solid",
              borderColor: "divider",
              // bgcolor: (theme) => theme.palette.ibmgrey[10],
              padding: { xs: "16px", sm: "20px 24px" },
            }}
          >
            <AddEmailForm
              existingEmails={[
                DEFAULT_ADMIN_EMAIL,
                ...addedEmails.map((email) => email.toLowerCase()),
              ]}
              isSaving={create.isPending}
              serverError={create.error?.message}
              onSave={handleAdd}
            />
          </Box>
        </Box>

        <RemoveEmailDialog
          isOpen={diaogOpen}
          email={emailToRemove}
          isRemoving={remove.isPending}
          error={remove.error?.message}
          onCancel={handleCloseDialog}
          onConfirm={handleConfirmRemove}
        />

        <Snackbar
          open={notice !== ""}
          autoHideDuration={3000}
          onClose={() => setNotice("")}
          message={notice}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Stack>
    </MotionConfig>
  );
}
