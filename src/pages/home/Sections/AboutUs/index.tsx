import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { DeveloperCard } from "../../../../components/DeveloperCard";
import { developers } from "./Developers";

export const AboutUs = () => {
  return (
    <Flex
      id="sobre-nos"
      h="100vh"
      minH={["1100px", "1200px", "1100px", "800px"]}
      pt="85px"
      bg="primary.100"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading textAlign="center" mb={["32px", "48px", "64px"]}>
        Quem somos nós?
      </Heading>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-around"
        alignItems="center"
        maxW="1200px"
        marginX={["auto", "auto", "16px"]}
      >
        <Flex
          scrollSnapType="x mandatory"
          maxW={["600px", "550px", "500px", "650px"]}
          w={["100%", "100%"]}
          h={["500px", "400px", "450px"]}
          flexWrap={["wrap"]}
          alignItems="center"
          justifyContent="center"
        >
          {developers.map(({ name, image, role, gitHub, linkedin }, index) => (
            <DeveloperCard
              key={index}
              name={name}
              image={image}
              role={role}
              gitHub={gitHub}
              linkedin={linkedin}
            />
          ))}
        </Flex>
        <Box
          backgroundColor="primary.200"
          maxW={["80%", "80%", "80%", "400px"]}
          padding={["16px", "24px", "40px"]}
          paddingRight="8px"
          borderRadius="8px"
          textAlign="center"
          h="max-content"
          mt={["16px", "16px", "16px", "0"]}
        >
          <Heading
            fontSize={["1xl", "3xl"]}
            fontWeight="400"
            mb={["16px", "48px"]}
          >
            Unidos por um sonho
          </Heading>
          <Text
            maxH={["250px", "300px"]}
            maxW={["600px", "500px", "600px", "700px"]}
            paddingRight="8px"
            overflowY="scroll"
            textAlign="justify"
            sx={{
              "::-webkit-scrollbar": {
                width: "4px",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "::-webkit-scrollbar-thumb": {
                background: "primary.100",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "primary.200",
              },
            }}
          >
            E esse sonho é o de mudar o mundo! A proposta do nosso aplicativo
            é precisamente a de ajudar isso a acontecer! Centralizando informações
            importantes, estimulando e viabilizando doações a instituições que se
            dedicam a mudar vidas, cumpriremos um dia de cada vez o nosso propósito.
            Junte-se a nós! =)
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
