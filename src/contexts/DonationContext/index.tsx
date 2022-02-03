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
  userID: number;
}

interface IDonationsHere {
  type_of_contribution: string;
  partner: string;
  value: number;
  userId: number;
  id: number;
}

interface IDonationsContextData {
  donations: Array<IDonationsHere>;
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
  const [donations, setDonations] = useState<Array<IDonationsHere>>(
    [] as Array<IDonationsHere>
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
        donations,
        registerDonations,
        getDonations,
      }}
    >
      {children}
    </DonationsContext.Provider>
  );
};

export { useDon, DonProvider };
