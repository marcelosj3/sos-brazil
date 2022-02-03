import { Flex, Image } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { LoginForm } from "../../components/Login/LoginForm";

import imageLogin from "../../assets/worldHand.svg";

export const Login = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      color="gray.100.100"
      h="100vh"
      minH="750px"
    >
      <Header />
      <Flex
        w={["100%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Image
          src={imageLogin}
          alt="mundo na mão"
          w={["0px", "0px", "200px", "400px"]}
          display={["none", "none", "none", "block"]}
          mr={["0px", "0px", "20px", "100px"]}
        />
        <LoginForm />
      </Flex>
    </Flex>
  );
};
