import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { DeveloperCard } from "../../../../components/DeveloperCard";
import { developers } from "./Developers";

export const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Flex
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
          {developers.map(({ name, image, role, gitHub, linkedin }) => (
            <DeveloperCard
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
            Sniff other cat's butt and hang jaw half open thereafter thug cat so
            rub whiskers on bare skin act innocent and i see a bird i stare at
            it i meow at it i do a wiggle come here birdy but find empty spot in
            cupboard and sleep all day chew on cable what the heck just
            happened, something feels fishy. When in doubt, wash purrrrrr stare
            at imaginary bug yowling nonstop the whole night chase little red
            dot someday it will be mine!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
