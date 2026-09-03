"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Alert, Box, Divider, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

export default function FormWrapper({
  sections,
  onSubmit,
  submitting,
  isError,
  errorMessage,
  hasPayment,
}: {
  sections: { title: string; content: ReactNode }[];
  onSubmit: () => void;
  submitting: boolean;
  isError: boolean;
  errorMessage: string;
  hasPayment?: boolean;
}) {
  const [activeSection, setActiveSection] = useState(0);

  const isFirstSection = activeSection === 0;
  const isLastSection = activeSection === sections.length - 1;

  const actionButtonLabel = () => {
    if (!isLastSection) {
      return "Next";
    }
    if (hasPayment) {
      return "Continue to payment";
    }
    return "Register";
  };

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
  };

  const handleBack = () => {
    if (!isFirstSection) {
      setActiveSection((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (isLastSection) {
      onSubmit();
      return;
    }

    setActiveSection((prev) => prev + 1);
  };

  return (
    <Stack
      className="layout2"
      gap={"32px"}
      flexDirection={"row"}
      margin={"32px 0px"}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Stack
        width={"240px"}
        gap={"32px"}
        sx={{ padding: { xs: "0px", md: "24px 0px" } }}
      >
        <Box>
          <Typography variant="subtitle1" marginBottom={"8px"}>
            Registration Form
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Complete your online registration
          </Typography>
        </Box>

        <Divider sx={{ display: { xs: "none", md: "block" } }} />

        <Box
          component={"div"}
          id="side nav"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {sections.map((s, i) => (
            <Box
              key={s.title}
              component={"button"}
              type="button"
              padding={i === activeSection ? "12px 28px" : "12px 32px"}
              borderLeft={i === activeSection ? "4px solid" : "1px solid"}
              borderColor={(theme) =>
                i === activeSection
                  ? theme.palette.primary.main
                  : theme.palette.divider
              }
              onClick={() => handleSectionChange(i)}
              sx={{
                cursor: "pointer",
                background: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant={i === activeSection ? "subtitle2" : "body2"}
                color={i === activeSection ? "textPrimary" : "textSecondary"}
              >
                {s.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>

      <Stack
        gap={"32px"}
        bgcolor={"white"}
        padding={"24px"}
        borderRadius={"16px"}
        flex={1}
      >
        <Typography variant="h4">{sections[activeSection].title}</Typography>

        {sections[activeSection].content}

        {isError && <Alert severity="error">{errorMessage}</Alert>}

        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <PrimaryButton
            color="primary"
            variant="outlined"
            sx={{ color: (theme) => theme.palette.primary.main }}
            onClick={handleBack}
            disabled={isFirstSection}
          >
            Back
          </PrimaryButton>
          <PrimaryButton onClick={handleNext} loading={submitting}>
            {actionButtonLabel()}
          </PrimaryButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
