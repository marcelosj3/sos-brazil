import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../../../assets/indigenous-brazilian-people-background.png";

export const GeneralInfo = () => {
  const navigate = useNavigate();
  return (
    <Flex
      h="100vh"
      w="100%"
      minH="600px"
      paddingTop="85px"
      backgroundImage={backgroundImage}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        color="gray.100.100"
        margin={["16px"]}
        marginBottom={["24px", "48px"]}
        maxW={["300px", "400px", "600px", "1200px"]}
        textAlign="center"
      >
        Reunindo informações, trazendo esperança
      </Heading>
      <Text
        fontSize={["sm", "md"]}
        color="gray.100.100"
        marginBottom={["24px", "48px", "80px"]}
        maxW={["200px", "350px", "600px"]}
        textAlign="center"
      >
        <b>
          O SOS Brasil é uma plataforma que conecta quem precisa de ajuda com
          quem quer ajudar. Escolha uma instituição e faça sua doação agora
          mesmo!
        </b>
      </Text>
      <Flex flexDirection={["column", "row"]}>
        <Button
          bg="primary.350"
          color="gray.300.100"
          h={["40px", "64px"]}
          w={["160px", "216px"]}
          marginBottom={["20px", "0"]}
          _hover={{ bg: "primary.300" }}
          _focus={{}}
          onClick={() => navigate("/donation")}
        >
          Quero Ajudar
        </Button>
        <Button
          bg="secondary.300"
          color="gray.100.100"
          h={["40px", "64px"]}
          w={["160px", "216px"]}
          marginLeft={["0", "40px", "80px"]}
          _hover={{ bg: "secondary.250" }}
          _focus={{}}
        >
          Preciso de ajuda
        </Button>
      </Flex>
    </Flex>
  );
};
