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
    <Flex flexDirection="column" h="100vh" w="100" bgColor="colors.primary.200">
      <Header />
      <VStack spacing="200px">
        <Flex
          w="100"
          marginTop="200px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h3" size="lg">
            Escolha, Clique e Doe!
          </Heading>
          <Flex flexWrap="wrap" color="blackAlpha.500" mt="20px">
            <HStack spacing="20px 20px">
              <Button
                onClick={renderPartners}
                _hover={{ color: "secondary.300" }}
              >
                Todos
              </Button>
              <Button
                onClick={() => partnersFiltered("Preservação Ambiental")}
                _hover={{ color: "secondary.300" }}
              >
                Preservação Ambiental
              </Button>
              <Button
                onClick={() => partnersFiltered("Moradia")}
                _hover={{ color: "secondary.300" }}
              >
                Moradia
              </Button>
              <Button
                onClick={() => partnersFiltered("Saúde")}
                _hover={{ color: "secondary.300" }}
              >
                Saúde
              </Button>
              <Button
                onClick={() => partnersFiltered("Seguridade Social")}
                _hover={{ color: "secondary.300" }}
              >
                Seguridade Social
              </Button>
              <Button
                onClick={() => partnersFiltered("Assessoria Jurídica")}
                _hover={{ color: "secondary.300" }}
              >
                Assistência Jurídica
              </Button>
            </HStack>
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
