import { Flex, Heading, Button, Image, Text, Center } from "@chakra-ui/react";

import { usePartners } from "../../contexts/PartnersContext";

interface IPartnersDataState {
  name: string;
  description: string;
  cnpj: string;
  cause: string;
  type: string;
  logoWide: string;
  logoSquare: string;
  site: string;
  id: number;
}

export const PartnerCard = (partner: IPartnersDataState) => {
  return (
    <Flex
      w="300px"
      h="365px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="20px"
      border="1px solid black"
      m="5px"
      borderRadius="5px"
      bg="white"
    >
      <Image src={partner.logoWide} w="150px" h="100px" />
      <Heading fontSize="md" as="h3">
        {partner.name}
      </Heading>
      <Text
        textAlign="justify"
        h="100px"
        overflowY="scroll"
        lineHeight="2"
        m="2px"
        p="5px"
        fontSize="xs"
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
        {partner.description}
      </Text>
      <Button
        bg="secondary.300"
        color="gray.100.100"
        w="100px"
        h="50px"
        _hover={{ bg: "secondary.250" }}
        _focus={{}}
        mt="10px"
      >
        DOAR
      </Button>
    </Flex>
  );
};
