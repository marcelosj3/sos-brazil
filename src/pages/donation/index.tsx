import { Flex, Heading } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { DonationForm } from "../../components/DonationForm";

export const DonationPage = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      paddingTop={["85px", "85px", "85px", "85px"]}
      alignItems="center"
      justifyContent="center"
      h="100vh"
      minH="750px"
    >
      <Header />
      <Flex
        w={["100%"]}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Heading fontSize={["3xl", "4xl"]} mb={["28px", "64px"]}>
          Quero doar
        </Heading>
        <DonationForm />
      </Flex>
    </Flex>
  );
};
