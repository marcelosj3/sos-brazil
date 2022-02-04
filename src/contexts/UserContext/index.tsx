import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useToast } from "@chakra-ui/react";

import { api } from "../../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

interface IData {
  name: string;
  email: string;
  socialNumber: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
  name: string;
  socialNumber: string;
  id: number;
}

interface IDataUser {
  userAtt: (id: string, acessToken: string, data: IData) => Promise<void>;
  userData: (id: string, acessToken: string) => void;
  userMan: IUser;
}

const UserContext = createContext<IDataUser>({} as IDataUser);

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider!");
  }

  return context;
};

const UserProvider = ({ children }: IUserProviderProps) => {
  const [userMan, setUserMan] = useState<IUser>({} as IUser);
  const toast = useToast();

  const userAtt = useCallback(
    async (id: string, acessToken: string, data: IData) => {
      await api
        .patch(`/users/${id}`, data, {
          headers: { Authorization: `Bearer ${acessToken}` },
        })
        .then((response) => {
          toast({
            title: "Alteração de Alterados.",
            description: "Dados atualizados com sucesso.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Alteração de Alterados.",
            description: "Erro ao atualizar os dados.",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        });
    },
    []
  );

  const userData = (id: string, acessToken: string) => {
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${acessToken}` },
      })
      .then((response) => {
        setUserMan(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        userAtt,
        userData,
        userMan,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
