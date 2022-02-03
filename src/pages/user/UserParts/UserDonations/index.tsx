import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useDon } from "../../../../contexts/DonationContext";

export const UserDonations = () => {
  const { accessToken } = useAuth();
  const { donations, getDonations } = useDon();
  const { id } = useParams();
  const user = (id && id) || "";

  const myDonations = donations.filter(
    (donation) => donation.userId === Number(user)
  );

  useEffect(() => {
    getDonations(accessToken);
  }, []);

  return (
    <Flex w="100vw" justifyContent="center">
      {myDonations.length > 0 ? (
        myDonations.map((card, index) => (
          <Box
            key={index}
            w="310px"
            background="white"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            boxShadow={"2xl"}
          >
            <Text color="gray.250" fontSize={"xl"}>
              Eu contribuí com{" "}
            </Text>
            <Heading color="secondary.300" fontSize={"4xl"}>
              R$ {card.value},00
            </Heading>
          </Box>
        ))
      ) : (
        <Text h="70px">Você não tem doações registradas</Text>
      )}
    </Flex>
  );
};
