import { FieldError, UseFormRegister } from "react-hook-form";

export interface IDonations {
  type_of_contribution: string;
  value: number;
  material: string;
}

export interface IRegisterData {
  name: string;
  password: string;
  email: string;
  social_number: string;
  area?: string;
  prefered_cause?: string;
  specialty?: string;
  donations?: Array<IDonations>;
  volunteer?: string;
}

export interface ICpfFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
    social_number?: FieldError | undefined;
  };
  register: UseFormRegister<IRegisterData>;
}

export interface ICnpjFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
    social_number?: FieldError | undefined;
    area?: FieldError | undefined;
  };
  register: UseFormRegister<IRegisterData>;
}
<<<<<<< HEAD

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
  };
  register: UseFormRegister<IRegisterData>;
}
=======
>>>>>>> 0eac868... feat: página de cadastro. Componentes criados e integrados, assim como a rota. Faltando definir campos junto à equipe para finalizar, integração com a API(criação do context de usuário) e estilização
