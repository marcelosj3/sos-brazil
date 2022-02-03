import { useState } from "react";

import { Box, Flex, Heading, Text, Center, HStack } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { UserDonations } from "./UserParts/UserDonations";

export const User = () => {
  const [clickInfo, setClickInfo] = useState<Boolean>(false);
  const [click, setClick] = useState<Boolean>(true);
  const [buttonDonate, setButtonDonate] = useState<string>("green solid 1px");
  const [buttonInfo, setButtonInfo] = useState<string>("");

  const donation = () => {
    setClick(true);
    setClickInfo(false);
    setButtonDonate("green solid 1px");
    setButtonInfo("none");
  };

  const info = () => {
    setClick(false);
    setClickInfo(true);
    setButtonDonate("none");
    setButtonInfo("solid 1px");
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <Header />
      <Heading pt="85px" textAlign="center">
        <Text>Meu perfil</Text>
      </Heading>
      <Box>
        <Center>
          <HStack spacing="8" color="gray.600" fontSize={["sm", "lg"]}>
            {" "}
            <Text
              onClick={() => donation()}
              borderBottom={buttonDonate}
              borderColor={"secondary.300"}
            >
              Minhas Doalçoes
            </Text>
            <Text
              onClick={() => info()}
              borderBottom={buttonInfo}
              borderColor={"secondary.300"}
            >
              Minhas informações
            </Text>
          </HStack>
        </Center>
      </Box>
      <Box> {click ? <UserDonations /> : <></>}</Box>
    </Flex>
  );
};
