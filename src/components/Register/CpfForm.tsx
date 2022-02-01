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
interface ICpfFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
    social_number?: FieldError | undefined;
  };
  register: UseFormRegister<IRegisterData>;
}

export const CpfForm = ({ register, errors }: ICpfFormProps) => {
  return (
    <VStack>
      <Input
        placeholder="Digite seu nome"
        label="Nome"
        type="text"
        error={errors.name}
        {...register("name")}
      />
      <Input
        placeholder="Digite seu CPF"
        label="CPF"
        type="text"
        error={errors.social_number}
        {...register("social_number")}
      />
      <Input
        placeholder="Digite seu email"
        label="Email"
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
