import { useEffect } from "react";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";
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
    <Grid
      display="flex"
      w="100vw"
      h="400px"
      justifyContent="center"
      flexWrap={"wrap"}
      gridTemplateColumns="repeat(auto-fill,300px)"
      gap="25px"
      padding={"35px"}
      overflow={"scroll"}
    >
      {myDonations.length > 0 ? (
        myDonations.map((card, index) => (
          <Box
            key={index}
            w="300px"
            background="white"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            boxShadow={"2xl"}
            h="250px"
          >
            <Text color="gray.250" fontSize={"xl"}>
              Eu contribuí com{" "}
            </Text>
            <Heading color="secondary.300" fontSize={"4xl"}>
              R${card.value.toFixed(2).toString().replace(".", ",")}
            </Heading>
            <Text>
              {" "}
              {card.partner && "Para a instituição"} {card.partner}
            </Text>
          </Box>
        ))
      ) : (
        <Text h="70px">Você não tem doações registradas</Text>
      )}
    </Grid>
  );
};
