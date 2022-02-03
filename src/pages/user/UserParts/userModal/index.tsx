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
      justifyContent="center"
      flexDirection={"column"}
      alignContent={"space-between"}
      alignItems={"center"}
    >
      <VStack spacing={8} w="100%">
        {" "}
        <Flex
          w="100%"
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}
        >
          <TagLabel flex="1 0 auto" color="secondary.250">
            Nome
          </TagLabel>
          <Input
            type="text"
            {...register("name")}
            maxW={"350px"}
            variant="flushed"
          />
        </Flex>
        <Flex
          w="100%"         
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}

        >
          <TagLabel flex="1 0 auto" color="secondary.250">
            Email
          </TagLabel>
          <Input
            variant="flushed"
            type="text"
            {...register("email")}
            maxW={"350px"}
          />
        </Flex>
        <Flex
          w="100%"
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}
        >
          <TagLabel color="secondary.250" flex="1 0 auto">
            Senha
          </TagLabel>
          <Input
            variant="flushed"
            type="password"
            {...register("password")}
            maxW={"350px"}
          />
        </Flex>
        <Button 
        _focus={{}}
        bg="primary.350"
        w="100%"
        type="submit">Enviar</Button>
      </VStack>
    </Box>
  );
};
