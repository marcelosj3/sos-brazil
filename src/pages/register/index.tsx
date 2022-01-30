import { Flex, Image } from "@chakra-ui/react";

import { RegisterForm } from "../../components/Register/RegisterForm";

import imageLogin from "../../utils/img/worldHand.svg";

export const Register = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      color="white"
      mt="20px"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <RegisterForm />
        <Image
          src={imageLogin}
          alt="mundo na mão"
          boxSize={["120px", "120px", "500px", "500px"]}
        />
      </Flex>
    </Flex>
  );
};
