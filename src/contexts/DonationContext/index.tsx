import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

import { api } from "../../services/api";

interface IDonationProviderProps {
  children: ReactNode;
}

interface IDonations {
  value: number;
  date: string;
}

interface IDonationsContextData {
  donations: Array<IDonations>;
  registerDonations: (
    { value, date }: IDonations,
    accessToken: string
  ) => Promise<void>;
  getDonations: (accessToken: string) => Promise<void>;
}

const DonationsContext = createContext<IDonationsContextData>(
  {} as IDonationsContextData
);

const useDon = () => {
  const context = useContext(DonationsContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider!");
  }

  return context;
};

const DonProvider = ({ children }: IDonationProviderProps) => {
  const [donations, setDonations] = useState<Array<IDonations>>(
    [] as Array<IDonations>
  );

  const registerDonations = useCallback(
    async ({ value, date }: IDonations, accessToken: string) => {
      await api.post(
        "/donate",
        { value, date },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
    []
  );

  const getDonations = useCallback(async (accessToken: string) => {
    await api
      .get("/donations", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setDonations(response.data));
  }, []);

  return (
    <DonationsContext.Provider
      value={{
        donations: donations,
        registerDonations,
        getDonations,
      }}
    >
      {children}
    </DonationsContext.Provider>
  );
};

export { useDon, DonProvider };
