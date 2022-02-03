import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";
import { NewsProvider } from "./NewsContext";
import { PartnersProvider } from "./PartnersContext";

import { theme } from "../styles/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <PartnersProvider>
      <NewsProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </NewsProvider>
    </PartnersProvider>
  </AuthProvider>
);
