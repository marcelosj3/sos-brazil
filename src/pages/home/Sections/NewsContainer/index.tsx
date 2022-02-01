import { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Carousel } from "3d-react-carousal";

import { InfoCard } from "../../../../components/InfoCard";
import { useNews } from "../../../../contexts/NewsContext";
import { SkeletonInfoCard } from "../../../../components/SkeletonInfoCard";

import "./style.css";

export const NewsContainer = () => {
  const [loading, setLoading] = useState(true);
  const { loadNews, newsData } = useNews();

  useEffect(() => {
    loadNews().then((_) => setLoading(false));
  }, [loadNews]);

  const skeletonQuantity = Array.from(Array(3).keys());

  let slides = loading
    ? skeletonQuantity.map((_, index) => <SkeletonInfoCard key={index} />)
    : newsData.map(({ url, urlToImage, title, description }, index) => (
        <InfoCard
          key={index}
          title={title}
          description={description}
          imageUrl={urlToImage}
          news
          newsUrl={url}
        />
      ));

  return (
    <Flex
      h="100vh"
      minH={["550px", "800px"]}
      bg="primary.100"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading textAlign="center" mb={["32px", "64px"]}>
        O que está acontecendo?
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Box w={["300px", "450px", "700px", "900px"]}>
          <Carousel slides={slides} arrows={false} />
        </Box>
      </Flex>
    </Flex>
  );
};
