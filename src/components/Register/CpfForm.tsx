import { VStack } from "@chakra-ui/react";
import { Input } from "./Input";
import { ICpfFormProps } from "../../utils/types";

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
