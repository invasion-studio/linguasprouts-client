"use client";

import { Button, buttonClasses, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type PrimaryButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  ...theme.typography.button,
  textTransform: "unset",
  borderRadius: "200px",
  padding: "10px 16px",
  color: "white",
}));

export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton
      variant="contained"
      disableElevation
      size="large"
      {...props}
    >
      {children}
    </StyledPrimaryButton>
  );
};

export const SecondaryButton = ({
  children,
  href,
  ...props
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton
      variant="contained"
      disableElevation
      href={href || undefined}
      size="large"
      color="secondary"
      {...props}
    >
      {children}
    </StyledPrimaryButton>
  );
};
