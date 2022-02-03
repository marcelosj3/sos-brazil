import { useState } from "react";
import { Grid, Heading, VStack, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";

import { Input } from "../Register/Input";
import { LoginValidation } from "./Validation";

interface ILoginData {
  email: string;
  password: string;
}

const schema = LoginValidation;

export const LoginForm = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: ILoginData) => {
    setLoading(true);
    signIn(data)
      .then((_) => {
        setLoading(false);
        navigate("/");
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((_) => {
        setLoading(false);
        toast.error("Erro ao realizar login!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleLogin)}
      as="form"
      w={["100%"]}
      maxW={["300px", "400px"]}
      padding="30px 15px"
      bg="transparent"
      color="gray.300.100"
    >
      <Heading
        fontSize={["1xl", "3xl"]}
        fontWeight="normal"
        textAlign="center"
        lineHeight={["30px", "48px"]}
      >
        Estou pronte para mudar o mundo!
      </Heading>
      <VStack spacing="4" mt="6">
        <Input
          placeholder="Digite seu email"
          type="text"
          error={errors.email}
          {...register("email")}
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <Button
          isLoading={loading}
          bg="primary.350"
          w="100%"
          color="gray.300.100"
          h={["40px", "48px"]}
          borderRadius="8px"
          _hover={{
            background: "primary.300",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="gray.250">
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
            color: "gray.100.100",
          }}
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
