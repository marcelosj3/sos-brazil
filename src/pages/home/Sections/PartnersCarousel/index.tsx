import { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Carousel } from "3d-react-carousal";

import { InfoCard } from "../../../../components/InfoCard";
import { SkeletonInfoCard } from "../../../../components/SkeletonInfoCard";

import "./style.css";

export const OurPartnersContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  const skeletonQuantity = Array.from(Array(3).keys());

  let slides = loading
    ? skeletonQuantity.map((_, index) => <SkeletonInfoCard key={index} />)
    : {};
  // : partners.map(({  description, logo, name }, index) => (
  //     <InfoCard
  //       key={index}
  //       title={name}
  //       description={description}
  //       imageUrl={logo}
  //     />
  //   ));

  return (
    <Flex
      h="100vh"
      minH={["750px", "1000px"]}
      pt="85px"
      bg="primary.200"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading textAlign="center" mb={["32px", "48px", "64px"]}>
        Nossos parceiros
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Box w={["300px", "450px", "700px", "900px"]}>
          <Carousel slides={slides} arrows={false} />
        </Box>
      </Flex>
    </Flex>
  );
};
