import { useEffect } from "react";
import { Flex, Heading, Button, VStack, Grid } from "@chakra-ui/react";

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

  const filterOptions = [
    "Todos",
    "Preservação Ambiental",
    "Moradia",
    "Saúde",
    "Seguridade Social",
    "Assessoria Jurídica",
  ];

  return (
    <Flex flexDirection="column" h="100vh" bgColor="colors.primary.200">
      <Header />
      <VStack spacing="200px">
        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt="120px"
        >
          <Heading
            as="h3"
            fontSize={["3xl", "3xl", "4xl", "4xl"]}
            fontWeight="medium"
            color="gray.300.100"
          >
            Escolha, clique e doe!
          </Heading>
          <Flex
            w={["320px", "400px", "700px", "930px"]}
            overflowX={["scroll", "scroll"]}
            color="blackAlpha.500"
            my="16px"
            pb="8px"
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
            {filterOptions.map((value) => (
              <Button
                flex="1 0 auto"
                onClick={
                  value === "Todos"
                    ? () => renderPartners()
                    : () => partnersFiltered(value)
                }
                _hover={{ color: "secondary.300" }}
                _focus={{}}
                fontWeight="400"
              >
                {value}
              </Button>
            ))}
          </Flex>
        </Flex>
      </VStack>
      <Flex
        marginX="auto"
        maxW="1200px"
        wrap="wrap"
        alignItems="center"
        justifyItems="center"
        gap="16px"
        justifyContent="center"
        flexWrap="wrap"
      >
        {partners.map((partner: IPartnersDataState, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </Flex>
    </Flex>
  );
};
