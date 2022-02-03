import { useEffect } from "react";
import { Box, Button, Flex, Input, TagLabel, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../../../contexts/AuthContext";
import { useUser } from "../../../../contexts/UserContext";

export const UserModal = () => {
  const { accessToken } = useAuth();
  const { id } = useParams();
  const { userAtt, userData, userMan } = useUser();

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
    if (userMan) {
      reset(userMan);
    }
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
        <Flex
          w="100%"
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <TagLabel flex="1 0 auto" color="feedback.success">
            Nome
          </TagLabel>
          <Input
            type="text"
            {...register("name")}
            maxW={"300px"}
            variant="flushed"
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <TagLabel flex="1 0 auto" color="feedback.success">
            Email
          </TagLabel>
          <Input
            variant="flushed"
            type="text"
            {...register("email")}
            maxW={"300px"}
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <TagLabel flex="1 0 auto" color="feedback.success">
            Telefone
          </TagLabel>
          <Input
            variant="flushed"
            type="number"
            {...register("social_number")}
            maxW={"300px"}
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <TagLabel color="feedback.success" flex="1 0 auto">
            Senha
          </TagLabel>
          <Input
            variant="flushed"
            type="password"
            {...register("password")}
            maxW={"300px"}
          />
        </Flex>
        <Button type="submit">enviar</Button>
      </VStack>
    </Box>
  );
};
