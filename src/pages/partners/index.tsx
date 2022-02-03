import { useEffect } from "react";

import { Flex, Text, Heading, Button, VStack, HStack } from "@chakra-ui/react";

import { usePartners } from "../../contexts/PartnersContext";

import { Header } from "../../components/Header";
import { PartnerCard } from "../../components/PartnerCard";

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

export const Partners = () => {
  const { partnersFiltered, renderPartners, partners } = usePartners();

  useEffect(() => {
    renderPartners();
  }, []);

  return (
    <Flex flexDirection="column" h="100vh" bgColor="colors.primary.200">
      <Header />
      <VStack spacing="200px">
        <Flex
          w="100%"
          marginTop="200px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h3" size="lg">
            Escolha, Clique e Doe!
          </Heading>
          <Flex
            w={["320px", "400px", "700px", "930px"]}
            overflowX={["scroll", "scroll"]}
            color="blackAlpha.500"
            mt="20px"
            sx={{
              "::-webkit-scrollbar": {
                height: "4px",
                width: "2px",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "::-webkit-scrollbar-thumb": {
                background: "secondary.300",
                borderRadius: "6px",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "secondary.200",
                borderRadius: "6px",
              },
            }}
          >
            <Button
              flex="1 0 auto"
              onClick={renderPartners}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Todos
            </Button>
            <Button
              flex="1 0 auto"
              onClick={() => partnersFiltered("Preservação Ambiental")}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Preservação Ambiental
            </Button>
            <Button
              flex="1 0 auto"
              onClick={() => partnersFiltered("Moradia")}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Moradia
            </Button>
            <Button
              flex="1 0 auto"
              onClick={() => partnersFiltered("Saúde")}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Saúde
            </Button>
            <Button
              flex="1 0 auto"
              onClick={() => partnersFiltered("Seguridade Social")}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Seguridade Social
            </Button>
            <Button
              flex="1 0 auto"
              onClick={() => partnersFiltered("Assessoria Jurídica")}
              _hover={{ color: "secondary.300" }}
              _focus={{}}
            >
              Assessoria Jurídica
            </Button>
          </Flex>
        </Flex>
      </VStack>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {partners.map((partner: IPartnersDataState) => (
          <PartnerCard {...partner} />
        ))}
      </Flex>
    </Flex>
  );
};
