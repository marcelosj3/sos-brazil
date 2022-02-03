import { Skeleton, Box, Flex } from "@chakra-ui/react";

export const SkeletonInfoCard = () => {
  return (
    <Box
      h={["420px", "600px"]}
      w={["250px", "400px"]}
      borderRadius="8px"
      boxShadow="xl"
      transition="all 0.3s"
    >
      <Skeleton
        startColor="gray.150"
        endColor="gray.250"
        borderTopRadius="8px"
        borderBottomRadius="0"
      >
        <Box h={["160px", "256px"]} w="100%" />
      </Skeleton>
      <Box padding={["16px", "16px"]} transition="all 0.3s">
        <Flex
          h={["90px", "100px"]}
          mb="8px"
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="26px"
            w="100%"
          />
        </Flex>
        <Flex
          h={["100px", "150px"]}
          alignItems="start"
          justifyContent="space-around"
          flexDirection="column"
        >
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="16px"
            w="100%"
          />
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="16px"
            w="100%"
          />
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="16px"
            w="100%"
          />
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="16px"
            w="100%"
          />
          <Skeleton
            startColor="gray.150"
            endColor="gray.250"
            h="16px"
            w="30%"
          />
        </Flex>
      </Box>
    </Box>
  );
};
