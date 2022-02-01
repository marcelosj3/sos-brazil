import { useState } from "react";
import { Grid, Heading, VStack, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { Input } from "../Register/Input";

interface ILoginData {
  email: string;
  password: string;
}

const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: ILoginData) => {
    setLoading(true);
    console.log(data);
    navigate("/donate");
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleLogin)}
      as="form"
      w={["100%"]}
      maxW={["300px", "400px"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
    >
      <Heading fontSize={["1xl", "3xl"]}
        fontWeight={["normal"]} 
        textAlign="center"
        lineHeight={["30px", "48px"]}
        >
        Estou pronte para mudar o mundo!
      </Heading>
      <VStack spacing="5" mt="6">
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
        <Button
          isLoading={loading}
          bg="primary.350"
          w="100%"
          color="black"
          h={["40px", "48px"]}
          borderRadius="8px"
          _hover={{
            background: "primary.300",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text 
          color="gray.250">
          Ainda não possui uma conta? Faça o seu cadastro!
        </Text>
        <Button
          isLoading={loading}
          bg="transparent"
          border="1px solid"
          borderColor="secondary.300"
          w="100%"
          color="secondary.300"
          h={["40px", "48px"]}
          borderRadius="8px"
          _hover={{
            background: "secondary.250",
            color: "white"
          }}
          type="submit"
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
