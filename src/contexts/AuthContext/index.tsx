import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

import { api } from "../../services/api";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IUser {
  email: string;
  password: string;
  id: number;
}

interface IDataState {
  accessToken: string;
  user: IUser;
}

interface IRegisterData {
  name: string;
  password: string;
  email: string;
  socialNumber: string;
  typeOfUser: string;
}

interface IAuthContextData {
  accessToken: string;
  user: IUser;
  signUp: (data: IRegisterData) => Promise<void>;
  signIn: (data: ILoginData) => Promise<void>;
  signOut: () => void;
}

interface ILoginData {
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider!");
  }

  return context;
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IDataState>(() => {
    const accessToken = localStorage.getItem("@SOSBrasil:accessToken");
    const user = localStorage.getItem("@SOSBrasil:user");

    if (accessToken && user) {
      const data = { accessToken, user: JSON.parse(user) };

      return data;
    }

    return {} as IDataState;
  });

  const signUp = useCallback(
    async ({
      name,
      password,
      email,
      socialNumber,
      typeOfUser,
    }: IRegisterData) => {
      await api
        .post("/register", { name, password, email, socialNumber, typeOfUser })
        .then((response) => {
          localStorage.setItem(
            "@SOSBrasil:accessToken",
            response.data.accessToken
          );
          localStorage.setItem(
            "@SOSBrasil:user",
            JSON.stringify(response.data.user)
          );
        });
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: ILoginData) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@SOSBrasil:accessToken", accessToken);
    localStorage.setItem("@SOSBrasil:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@SOSBrasil:accessToken");
    localStorage.removeItem("@SOSBrasil:user");

    setData({} as IDataState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
