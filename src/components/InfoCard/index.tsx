import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface IInfoCard {
  isCentered?: boolean;
  title: string;
  description: string;
  imageUrl: string;
  white?: boolean;
}

export const InfoCard = ({
  isCentered,
  title,
  description,
  imageUrl,
  white = false,
}: IInfoCard) => {
  return (
    <Box
      maxH={["356px", "600px"]}
      maxW={["250px", "400px"]}
      backgroundColor={white ? "primary.100" : "primary.200"}
      borderRadius="8px"
      boxShadow="xl"
      transform={isCentered ? "scale(1.1)" : ""}
      transition="all 0.3s"
    >
      <Box>
        <Image
          h={["160px", "256px"]}
          w="100%"
          borderTopRadius="8px"
          src={imageUrl}
          alt={title}
          transition="all 0.3s"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box padding={["8px", "16px"]} transition="all 0.3s">
        <Heading
          fontSize={["xl", "1xl"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          h="80px"
          transition="all 0.3s"
        >
          {title}
        </Heading>
        <Text
          h={["100px", "150px"]}
          overflowY="scroll"
          transition="all 0.3s"
          sx={{
            "::-webkit-scrollbar": {
              width: "4px",
              borderRadius: "4px",
            },
            "::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "::-webkit-scrollbar-thumb": {
              background: "primary.100",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "primary.200",
            },
          }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
