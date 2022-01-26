import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
