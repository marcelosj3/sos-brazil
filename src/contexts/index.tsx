import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";
import { NewsProvider } from "./NewsContext";
import { UserProvider } from "./UserContext";
import { DonProvider } from "./DonationContext";
import { PartnersProvider } from "./PartnersContext";

import { theme } from "../styles/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <NewsProvider>
      <DonProvider>
        <PartnersProvider>
          <ChakraProvider theme={theme}>
            <UserProvider>{children}</UserProvider>
          </ChakraProvider>
        </PartnersProvider>
      </DonProvider>
    </NewsProvider>
  </AuthProvider>
);
