import { Grid, Heading, VStack, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginData } from "../../utils/types";
import { Input } from "../Register/Input";

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
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
    >
      <Heading size="lg" textAlign="center">
        Estou pronto para mudar o mundo!
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
          Entrar
        </Button>
        <Text>Ainda não possui uma conta? Faça o seu cadastro!</Text>
        <Button
          isLoading={loading}
          bg="transparent"
          border="1px solid #1B4332"
          w="100%"
          color="#1B4332"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "#1B4332",
          }}
          type="submit"
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
