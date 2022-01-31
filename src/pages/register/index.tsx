import { Flex, Image } from "@chakra-ui/react";

import { RegisterForm } from "../../components/Register/RegisterForm";

<<<<<<< HEAD
import imageLogin from "../../assets/worldHand.svg";
=======
import imageLogin from "../../utils/img/worldHand.svg";
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6

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
