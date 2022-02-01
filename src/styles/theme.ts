import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#FFFAF0",
      150: "#FFF9E9",
      200: "#FAEDCD",
      250: "#D6C496",
      300: "#ffc22a",
      350: "#FFB703"
    },
    secondary: {
      100: "#8DA89D",
      150: "#658B7B",
      200: "#487361",
      250: "#315948",
      300: "#1B4332",
    },
    gray: {
      100: "#F2F2F2",
      150: "#C0C0C0",
      200: "#919191",
      "200-30%": "rgba(145,145,145,30)",
      250: "#5E5E5E",
      300: "#1D1D1D",
      "300-20%": "rgba(29,29,29,20)",
    },
    feedback: {
      success: "#5B9632",
      warning: "#FFBB04",
      danger: "123",
      info: "#1A9994",
    },
  },
  fonts: {
    heading: "DM Serif Text",
    body: "Roboto",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "1xl": "1.625rem",
    "2xl": "2rem",
    "3xl": "2.5rem",
    "4xl": "3.5rem",
    "5xl": "4rem",
    "6xl": "4.5rem",
    "7xl": "5rem",
  },

  styles: {
    global: {
      body: {
        bg: "primary.200",
        color: "gray.300",
        "::-webkit-scrollbar": {
          height: "5px",
          width: "5px",
        },
        "::-webkit-scrollbar-track": {
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "primary.300",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "primary.400",
        },
      },
    },
  },
  ChakraTheme,
});
