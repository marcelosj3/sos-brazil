import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";
import { NewsProvider } from "./NewsContext";
import { UserProvider } from "./UserContext";
import { DonProvider } from "./DonationContext";

import { theme } from "../styles/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <NewsProvider>
      <UserProvider>
        <DonProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </DonProvider>
      </UserProvider>
    </NewsProvider>
  </AuthProvider>
);
