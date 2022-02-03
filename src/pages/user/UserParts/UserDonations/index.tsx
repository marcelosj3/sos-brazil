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
    (donation) => donation.userId !== Number(user)
  );

  useEffect(() => {
    getDonations(accessToken);
  }, []);

  return (
    <Grid
      display="flex"
      w="100vw"
      maxW="1200px"
      h="60vh"
      m="0 auto"
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}
      gridTemplateColumns="repeat(auto-fill,300px)"
      gap="25px"
      padding={"35px"}
      overflowY={["scroll", "scroll"]}
      css={{
        '&::-webkit-scrollbar': {
          width: "4px",
        },
        '&::-webkit-scrollbar-track': {
          width: "6px",
        },
        '&::-webkit-scrollbar-thumb': {
          background: "transparent",
          borderRadius: "24px",
        },
      }}
    >
      {myDonations.length > 0 ? (
        myDonations.map((card, index) => (
          <Box
            key={index}
            w="300px"
            background="white"
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            flexDirection={"column"}
            boxShadow={"2xl"}
            h="300px"
            borderRadius="8px"
            padding="30px"
          >
            <Text color="gray.250" fontSize={"xl"} >
              Eu contribuí com{" "}
            </Text>
            <Heading color="secondary.300" fontSize={"4xl"}>
              {"R$"}{card.value}
            </Heading>
            <Text textAlign="center">
              {" "}
              {card.partner && "Para a instituição"} 
            </Text>
            <Text 
              fontWeight={"bold"}
              color="secondary.250"  
            >
              {card.partner}
            </Text>
          </Box>
        ))
      ) : (
        <Text h="70px">Você não tem doações registradas</Text>
      )}
    </Grid>
  );
};
