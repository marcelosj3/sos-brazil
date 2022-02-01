import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";

import { theme } from "../styles/theme";
import { NewsProvider } from "./NewsContext";

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
