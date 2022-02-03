import {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from "react";

import { api } from "../../services/api";

interface IPartnersProviderProps {
  children: ReactNode;
}

interface IPartnersDataState {
  name: string;
  description: string;
  cnpj: string;
  cause: string;
  type: string;
  logo: string;
  site: string;
  id: number;
}

interface IPartnersContextData {
  renderPartners: () => Promise<void>;
  partnersFiltered: (value: string) => void;
  partners: IPartnersDataState[];
}

const PartnersContext = createContext<IPartnersContextData>(
  {} as IPartnersContextData
);

const usePartners = () => {
  const context = useContext(PartnersContext);

  if (!context) {
    throw new Error("usePartners must be used within a PartnersProvider");
  }

  return context;
};

const PartnersProvider = ({ children }: IPartnersProviderProps) => {
  const [partners, setPartners] = useState<IPartnersDataState[]>([]);

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
