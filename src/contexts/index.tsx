import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";
import { NewsProvider } from "./NewsContext";
import { DonationProvider } from "./DonationContext";

import { theme } from "../styles/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <DonationProvider>
      <NewsProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </NewsProvider>
    </DonationProvider>
  </AuthProvider>
);
