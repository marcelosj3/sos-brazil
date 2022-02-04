import { Flex, Image } from "@chakra-ui/react";

import { RegisterForm } from "../../components/Register/RegisterForm";
import { Header } from "../../components/Header";

import imageLogin from "../../assets/worldHand.svg";

export const Register = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      color="gray.100.100"
      h="100vh"
      minH={["850px", "750px"]}
      pt="85px"
    >
      <Header />
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <RegisterForm />
        <Image
          src={imageLogin}
          alt="mundo na mão"
          w={["0px", "0px", "200px", "400px"]}
          display={["none", "none", "none", "block"]}
          ml={["0px", "0px", "20px", "100px"]}
        />
      </Flex>
    </Flex>
  );
};
