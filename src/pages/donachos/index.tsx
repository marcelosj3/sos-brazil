import { Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { NachosContainer } from "./NachosCarousel";

export const Donachos = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      mt="20px"
    >
      <Header />
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <NachosContainer />
      </Flex>
    </Flex>
  );
};
