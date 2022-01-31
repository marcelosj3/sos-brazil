import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {},
    secondary: {},
    gray: {},
    feedback: {
      success: "123",
      warning: "123",
      danger: "#CF4A38",
      info: "123",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "1xl": "1.625rem",
  },

  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
  ChakraTheme,
});
