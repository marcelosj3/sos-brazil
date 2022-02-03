import {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from "react";
import { api } from "../../services/api";

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
  renderPartners: () => Promise<void>;
  partnersFiltered: (value: string) => void;
  partners: PartnersDataState[];
}

const PartnersContext = createContext<PartnersContextData>(
  {} as PartnersContextData
);

const usePartners = () => {
  const context = useContext(PartnersContext);

  if (!context) {
    throw new Error("usePartners must be used within a PartnersProvider");
  }

  return context;
};

const PartnersProvider = ({ children }: PartnersProviderProps) => {
  const [partners, setPartners] = useState<PartnersDataState[]>([]);

  const renderPartners = useCallback(async () => {
    await api
      .get("/partners")
      .then((response) => setPartners(response.data))
      .catch((error) => console.log(error));
  }, []);

  const partnersFiltered = useCallback(async (value: string) => {
    await api
      .get(`/partners?type_like=${value}`)
      .then((response) => setPartners(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PartnersContext.Provider
      value={{
        partnersFiltered,
        partners,
        renderPartners,
      }}
    >
      {children}
    </PartnersContext.Provider>
  );
};

export { usePartners, PartnersProvider };
