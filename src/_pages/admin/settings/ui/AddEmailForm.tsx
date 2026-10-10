"use client";

import { Button, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AddEmailForm({
  existingEmails,
  isSaving,
  serverError,
  onSave,
}: {
  existingEmails: string[];
  isSaving: boolean;
  serverError?: string;
  onSave: (email: string) => Promise<void>;
}) {
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const email = value.trim().toLowerCase();

    if (!EMAIL_PATTERN.test(email)) {
      setValidationError("Enter a valid email address.");
      return;
    }
    if (existingEmails.includes(email)) {
      setValidationError("This email is already on the list.");
      return;
    }

    try {
      await onSave(email);
      setValue("");
    } catch {
      // The parent surfaces the failure through serverError.
    }
  };

  const errorMessage = validationError || serverError;

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      noValidate
      direction={{ xs: "row", sm: "row" }}
      alignItems={{ xs: "stretch", sm: "flex-start" }}
      gap={"8px"}
    >
      <TextField
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setValidationError("");
        }}
        type="email"
        placeholder="Add another email address"
        fullWidth
        disabled={isSaving}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        slotProps={{
          htmlInput: { "aria-label": "New admin email address" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            bgcolor: "transparent",
            height: "40px",
            transition: "background-color 150ms ease",
            "&:hover, &.Mui-focused": { bgcolor: "white" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.ibmgrey[20],
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.ibmgrey[30],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.primary.main,
              borderWidth: "2px",
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.error.main,
            },
            // Input must match the 40px root, otherwise the autofill fill overflows it.
            "& .MuiOutlinedInput-input": {
              boxSizing: "border-box",
              height: "100%",
              padding: "0 14px",
              borderRadius: "inherit",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: (theme) =>
                `0 0 0 100px color-mix(in srgb, ${theme.palette.primary.main} 8%, white) inset`,
              WebkitTextFillColor: "rgba(0,0,0,0.85)",
              caretColor: "#000",
              borderRadius: "inherit",
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation
        disabled={isSaving || value.trim() === ""}
        sx={{
          textTransform: "none",
          borderRadius: "200px",
          color: "white",
          flexShrink: 0,
          minWidth: "80px",
          height: "40px",
        }}
      >
        {isSaving ? "Saving..." : "Save"}
      </Button>
    </Stack>
  );
}
