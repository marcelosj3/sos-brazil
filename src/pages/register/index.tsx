import { Flex, Image } from "@chakra-ui/react";

import { RegisterForm } from "../../components/Register/RegisterForm";

import imageLogin from "../../assets/worldHand.svg";
import { Header } from "../../components/Header";

export const Register = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      color="gray.100.100"
      pt="120px"
    >
      <Header />
      <Flex
        w={["100%"]}
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
          mr={["0px", "0px", "20px", "100px"]}
        />
      </Flex>
    </Flex>
  );
};
