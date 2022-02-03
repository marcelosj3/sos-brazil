import { useState } from "react";

import { Box, Flex, Heading, Text, Center, HStack } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { UserDonations } from "./UserParts/UserDonations";
import { UserInfo } from "./UserParts/UserForm";

export const User = () => {
  const [click, setClick] = useState<Boolean>(true);
  const [buttonDonate, setButtonDonate] = useState<string>("green solid 1px");
  const [buttonInfo, setButtonInfo] = useState<string>("");

  const donation = () => {
    setClick(true);
    setButtonDonate("green solid 1px");
    setButtonInfo("none");
  };

  const info = () => {
    setClick(false);
    setButtonDonate("none");
    setButtonInfo("solid 1px");
  };

  return (
    <Flex w="100vw" h="100vh" flexDirection="column" alignContent="center">
      <Header />
      <Heading  
        display="flex"
        pt="85px" 
        textAlign="center" 
        alignItems="center"
        h={["25vh"]}
        justifyContent="center"
      >
        <Text
          fontSize={["3xl", "3xl", "4xl", "4xl"]}
          fontWeight="medium"
        >Meu perfil</Text>
      </Heading>
      <Box 
        display="flex"
        h={["10vh", "15vh"]}
        justifyContent="center"
        >
        <Center>
          <HStack spacing="8" color="gray.600" fontSize={["sm", "lg"]}>
            {" "}
            <Text
              cursor={"pointer"}
              onClick={() => donation()}
              borderBottom={buttonDonate}
              borderColor={"secondary.300"}
            >
              Minhas Doações
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => info()}
              borderBottom={buttonInfo}
              borderColor={"secondary.300"}
            >
              Minhas informações
            </Text>
          </HStack>
        </Center>
      </Box>
      <Box> {click ? <UserDonations /> : <UserInfo />}</Box>
    </Flex>
  );
};
