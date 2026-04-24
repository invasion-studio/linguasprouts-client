"use client";

import { createTheme } from "@mui/material/styles";
import type {
  PaletteColor,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

// --- MUI Palette Module Augmentation ---
declare module "@mui/material/styles" {
  interface Palette {
    ibmgrey: typeof Ibmgrey;
  }
  interface PaletteOptions {
    ibmgrey?: typeof Ibmgrey;
  }
}

const Ibmgrey = {
  white: "#ffffff",
  10: "#f4f4f4",
  20: "#e0e0e0",
  30: "#c6c6c6",
  40: "#a8a8a8",
  50: "#8d8d8d",
  60: "#6f6f6f",
  70: "#525252",
  80: "#393939",
  90: "#262626",
  100: "#161616",
  black: "#000000",
};

const theme = createTheme({
  colorSchemes: {
    light: true,
    // dark: {
    //   palette: {
    //     primary: {
    //       main: "#1D4CC9",
    //     },
    //     error: {
    //       main: "#DF221D",
    //     },
    //     text: {
    //       primary: Ibmgrey[100],
    //       secondary: Ibmgrey[70],
    //       disabled: Ibmgrey[40],
    //     },
    //     ibmgrey: Ibmgrey,
    //     divider: "#EBEBEB",
    //   },
    // },
  },

  cssVariables: { cssVarPrefix: "" },
  typography: {
    fontFamily: "var(--font-plus-jakarta-sans), Plus Jakarta Sans, sans-serif",
    h1: {
      fontSize: "61px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h2: {
      fontSize: "49px",
      fontWeight: 600,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h3: {
      fontSize: "28px",
      lineHeight: "44px",
      fontWeight: 600,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "32px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#75C30A",
    },
    secondary: {
      main: "#0C9EEA",
    },
    error: {
      main: "#DF221D",
    },
    text: {
      primary: Ibmgrey[100],
      secondary: Ibmgrey[70],
      disabled: Ibmgrey[40],
    },
    ibmgrey: Ibmgrey,
    divider: "#EBEBEB",
  },
});

export default theme;

export const adminTheme = createTheme({
  colorSchemes: {
    light: true,
  },

  cssVariables: { cssVarPrefix: "" },
  typography: {
    fontFamily: "var(--font-plus-jakarta-sans), Plus Jakarta Sans, sans-serif",
    h1: {
      fontSize: "61px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h2: {
      fontSize: "49px",
      fontWeight: 600,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h3: {
      fontSize: "28px",
      lineHeight: "44px",
      fontWeight: 600,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "24px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "32px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
      lineHeight: "22px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#12DE12",
    },
    secondary: {
      main: "#12C3DE",
    },
    error: {
      main: "#DF221D",
    },
    text: {
      primary: Ibmgrey[100],
      secondary: Ibmgrey[70],
      disabled: Ibmgrey[40],
    },
    ibmgrey: Ibmgrey,
    divider: "#EBEBEB",
  },
});
