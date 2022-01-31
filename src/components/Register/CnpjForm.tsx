import { VStack } from "@chakra-ui/react";

import { Input } from "./Input";

import { ICnpjFormProps } from "../../utils/types";

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
