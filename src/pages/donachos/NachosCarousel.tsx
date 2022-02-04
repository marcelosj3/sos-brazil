import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "3d-react-carousal";

import "./style.css";

export const NachosContainer = () => {
  const nachos = [
    "https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/Nachos-low-carb-500x375.jpg",
    "https://www.simplyrecipes.com/thmb/JnhGh-xkWTGm_MbEi_CcBgxXbME=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Nachos-LEAD-5-ab0842bd5c3a492b989240cca869cefb.jpg",
    "https://ca.slack-edge.com/TQZR39SET-U01KCMKK9RC-34eb98275c00-512",
    "https://paranashop.com.br/wp-content/uploads/2020/09/Nachos-Azteca-Taco-El-Pancho-1.jpg",
  ];

  let slides = nachos.map((item, index) => (
    <Image
      h={["250px", "400px"]}
      w={["250px", "400px"]}
      borderRadius="8px"
      boxShadow="xl"
      objectFit="cover"
      src={item}
      key={index}
    />
  ));

  return (
    <Flex
      pt="85px"
      bg="primary.200"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading textAlign="center" mb={["32px", "48px", "64px"]}>
        Nachos!
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Box w={["300px", "450px", "700px", "900px"]}>
          <Carousel slides={slides} arrows={false} />
        </Box>
      </Flex>
    </Flex>
  );
};
