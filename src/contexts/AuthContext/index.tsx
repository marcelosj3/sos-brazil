import { createContext, ReactNode, useContext, useState } from 'react';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IUser {
  email: string;
  password: string;
}

interface IDataState {
  accessToken: string;
  user: IUser;
}

interface IAuthContextData {
  accessToken: string;
  user: IUser;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider!');
  }

  return context;
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IDataState>(() => {
    const accessToken = localStorage.getItem('@capstone:accessToken');
    const user = localStorage.getItem('@capstone:user');

    if (accessToken && user) {
      const data = { accessToken, user: JSON.parse(user) };

      return data;
    }

    return {} as IDataState;
  });

  return (
    <AuthContext.Provider
      value={{ accessToken: data.accessToken, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
