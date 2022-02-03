import { createContext, ReactNode, useContext, useState } from "react";

import { api } from "../../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

interface IData {
  name: string;
  email: string;
  social_number: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
  name: string;
  social_number: string;
  id: number;
}

interface IDataUser {
  userAtt: (id: string, acessToken: string, data: IData) => void;
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
  const userAtt = (id: string, acessToken: string, data: IData) => {
    api
      .patch(`/users/${id}`, data, {
        headers: { Authorization: `Bearer ${acessToken}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

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
