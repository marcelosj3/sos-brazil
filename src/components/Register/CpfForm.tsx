import { VStack, Text } from "@chakra-ui/react";
import { Input } from "./Input";
import { ICpfFormProps } from "../../utils/types";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

export const CpfForm = ({ register, errors }: ICpfFormProps) => {
  const [volunteer, setVolunteer] = useState("");

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
      <Input
        placeholder="Digite seu CPF"
        label="CPF"
        type="text"
        error={errors.social_number}
        {...register("social_number")}
      />
      <Text>Deseja se cadastrar como voluntário?</Text>
      <RadioGroup
        options={["Sim", "Não"]}
        onChange={setVolunteer}
        name="volunteer"
        //{...register("volunteer")}
      />
      {volunteer === "Sim" ? (
        <Input
          placeholder="Digite sua especialidade"
          label="Como você pode ajudar?"
          type="text"
          {...register("specialty")}
        />
      ) : null}
    </VStack>
  );
};
