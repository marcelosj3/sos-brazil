import { VStack } from "@chakra-ui/react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { Input } from "./Input";

interface IRegisterData {
  name: string;
  password: string;
  email: string;
  socialNumber: string;
  typeOfUser: string;
}
interface ICpfFormProps {
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
    socialNumber?: FieldError | undefined;
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
        inputMask="999.999.999-99"
        label="CPF"
        type="text"
        error={errors.socialNumber}
        {...register("socialNumber")}
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
