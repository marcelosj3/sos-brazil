import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useDon } from "../../../../contexts/DonationContext";

export const UserDonations = () => {
  const { accessToken } = useAuth();
  const { donations, getDonations } = useDon();

  useEffect(() => {
    getDonations(accessToken);
  }, []);

  console.log(donations);
  return (
    <Flex w="100vw">
      {donations &&
        donations.map((card, index) => (
          <Box key={index} w="310px" background="gray.100"></Box>
        ))}
    </Flex>
  );
};
