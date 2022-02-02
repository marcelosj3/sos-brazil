import {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from "react";
import axios from "axios";

interface PartnersProviderProps {
  children: ReactNode;
}

interface PartnersDataState {
  name: string;
  description: string;
  cnpj: string;
  cause: string;
  type: string;
  logo: string;
  site: string;
  id: number;
}

interface PartnersContextData {
  habitationFilter: () => PartnersDataState[];
  healthFilter: () => PartnersDataState[];
  socialSecurityFilter: () => PartnersDataState[];
  preservationFilter: () => PartnersDataState[];
  legalAdviceFilter: () => PartnersDataState[];
  partners: PartnersDataState[];
}

const PartnersContext = createContext<PartnersContextData>(
  {} as PartnersContextData
);

const usePartners = () => {
  const context = useContext(PartnersContext);

  if (!context) {
    throw new Error("useNews must be used within a PartnersProvider");
  }

  return context;
};

const PartnersProvider = ({ children }: PartnersProviderProps) => {
  const [partners, setPartners] = useState<PartnersDataState[]>([]);

  const renderPartners = () => {};

  return (
    <PartnersContext.Provider
      value={{
        habitationFilter,
        healthFilter,
        legalAdviceFilter,
        preservationFilter,
        socialSecurityFilter,
        partners,
      }}
    >
      {children}
    </PartnersContext.Provider>
  );
};

export { usePartners, PartnersProvider };
