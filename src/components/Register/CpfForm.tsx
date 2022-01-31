import { VStack } from "@chakra-ui/react";
<<<<<<< HEAD
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
=======

import { Input } from "./Input";

import { ICpfFormProps } from "../../utils/types";
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6

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
