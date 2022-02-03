import { Box, Heading, Image, Text, Link, Center } from "@chakra-ui/react";

interface IInfoCard {
  isCentered?: boolean;
  title: string;
  description: string;
  imageUrl: string;
  newsUrl?: string;
  white?: boolean;
  news?: boolean;
  objectContain?: boolean;
}

export const InfoCard = ({
  isCentered,
  title,
  description,
  imageUrl,
  newsUrl,
  white = false,
  news = false,
  objectContain = false,
}: IInfoCard) => {
  return (
    <Box
      maxH={["420px", "600px"]}
      maxW={["250px", "400px"]}
      backgroundColor={white ? "primary.100" : "primary.200"}
      borderRadius="8px"
      boxShadow="xl"
      transform={isCentered ? "scale(1.1)" : ""}
      transition="all 0.3s"
    >
      <Box background="gray.100.100">
        <Image
          h={["160px", "256px"]}
          w="100%"
          borderTopRadius="8px"
          src={imageUrl}
          alt={title}
          transition="all 0.3s"
          objectFit={objectContain ? "contain" : "cover"}
          objectPosition="center"
        />
      </Box>
      <Box padding={["16px", "16px"]} transition="all 0.3s">
        <Center h={["90px", "100px"]}>
          {news ? (
            <Link href={newsUrl} isExternal>
              <Heading
                title={title}
                fontSize={["xl", "1xl"]}
                textAlign="center"
                transition="all 0.3s"
                mb="8px"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  lineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </Heading>
            </Link>
          ) : (
            <Heading
              title={title}
              fontSize={["xl", "1xl"]}
              textAlign="center"
              transition="all 0.3s"
              mb="8px"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                lineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Heading>
          )}
        </Center>
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
