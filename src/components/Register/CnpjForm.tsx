import { VStack } from "@chakra-ui/react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { Input } from "./Input";

interface IDonations {
  type_of_contribution: string;
  value: number;
  material: string;
}

interface IRegisterData {
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

interface ICnpjFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
    social_number?: FieldError | undefined;
    area?: FieldError | undefined;
  };
  register: UseFormRegister<IRegisterData>;
}

export const CnpjForm = ({ register, errors }: ICnpjFormProps) => {
  return (
    <VStack>
      <Input
        placeholder="Digite o nome da sua empresa"
        label="Nome da empresa"
        type="text"
        error={errors.name}
        {...register("name")}
      />
      <Input
        placeholder="Digite seu CNPJ"
        label="CNPJ"
        type="text"
        error={errors.social_number}
        {...register("social_number")}
      />
      <Input
        placeholder="Digite o email"
        label="Email para contato"
        type="text"
        error={errors.email}
        {...register("email")}
      />
      <Input
        placeholder="Digite sua senha"
        label="Senha"
        type="password"
        error={errors.password}
        {...register("password")}
      />
    </VStack>
  );
};
