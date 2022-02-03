import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  TagLabel,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../../../contexts/AuthContext";
import { useUser } from "../../../../contexts/UserContext";
import { useEffect } from "react";

export const UserModal = () => {
  const { user, accessToken } = useAuth();
  const { id } = useParams();
  const { userAtt, userData, userMan } = useUser();
  const toast = useToast();

  const userId = (id && id) || "";

  interface IData {
    name: string;
    email: string;
    social_number: string;
    password: string;
  }

  const attDados = (data: IData) => {
    userAtt(userId, accessToken, data);

    userData(userId, accessToken);
  };

  const formSchema = yup.object().shape({
    email: yup.string().email("email invalido"),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IData>({ resolver: yupResolver(formSchema) });

  useEffect(() => {
    userData(userId, accessToken);
    reset(userMan);
  }, []);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(attDados)}
      w="100%"
      display={"flex"}
      flexDirection={"column"}
      alignContent={"space-between"}
    >
      <VStack spacing={8}>
        {" "}
        <Flex w="100%" justifyContent={"space-evenly"} alignItems={"center"}>
          <TagLabel flex="1 0 auto">Nome</TagLabel>
          <Input type="text" {...register("name")} maxW={"300px"} />
        </Flex>
        <Flex>
          <TagLabel flex="1 0 auto">Email</TagLabel>
          <Input type="text" {...register("email")} maxW={"300px"} />
        </Flex>
        <Flex>
          <TagLabel flex="1 0 auto">Telefone</TagLabel>
          <Input type="number" {...register("social_number")} maxW={"300px"} />
        </Flex>
        <Flex>
          <TagLabel flex="1 0 auto">Senha</TagLabel>
          <Input type="password" {...register("password")} maxW={"300px"} />
        </Flex>
        <Button type="submit">enviar</Button>
      </VStack>
    </Box>
  );
};
