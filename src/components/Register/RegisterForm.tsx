import { Grid, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { CpfForm } from "./CpfForm";
import { CnpjForm } from "./CnpjForm";
import { RadioGroup } from "./RadioGroup";
import { useNavigate } from "react-router-dom";
import { IRegisterData } from "../../utils/types";

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  social_number: yup.string().required("Campo obrigatório"),
});

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [typeOfUser, setTypeOfUser] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  // add função de registro na API quando context estiver implementado
  const handleRegister = (data: IRegisterData) => {
    setLoading(true);
    console.log(data);
    navigate("/donate");
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleRegister)}
      as="form"
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
    >
      <Heading size="lg" textAlign="center">
        Seja bem vindo!
      </Heading>
      <VStack spacing="5" mt="6">
        <Text>Eu sou...</Text>
        <RadioGroup
          options={["CPF", "CNPJ"]}
          name="CPF"
          onChange={setTypeOfUser}
        />
        {typeOfUser === "CPF" ? (
          <CpfForm register={register} errors={errors} />
        ) : null}
        {typeOfUser === "CNPJ" ? (
          <CnpjForm register={register} errors={errors} />
        ) : null}
        <Button
          isLoading={loading}
          bg="#FFB703"
          w="100%"
          color="black"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "#c28b00",
          }}
          type="submit"
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
