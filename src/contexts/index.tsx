import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";
import { NewsProvider } from "./NewsContext";

import { theme } from "../styles/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <NewsProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </NewsProvider>
  </AuthProvider>
);
