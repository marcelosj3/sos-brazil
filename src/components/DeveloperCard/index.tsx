import { Image } from "@chakra-ui/image";
import { Text, Link, Flex } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface IDeveloperKeys {
  name: string;
  role: string;
  image: string;
  gitHub: string;
  linkedin: string;
}

export const DeveloperCard = ({
  name,
  role,
  image,
  gitHub,
  linkedin,
}: IDeveloperKeys) => {
  return (
    <Flex
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      w={["150px", "150px", "160px", "180px"]}
      scrollSnapAlign="center"
    >
      <Image
        src={image}
        alt={name}
        borderRadius="50%"
        w={["100px", "125px", "125px", "150px"]}
      />
      <Text>{name}</Text>
      <Text fontSize="sm" fontWeight="bold">
        {role}
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Link href={gitHub} isExternal _focus={{}}>
          <FaGithub />
        </Link>
        <Link href={linkedin} isExternal _focus={{}} ml="8px">
          <FaLinkedinIn />
        </Link>
      </Flex>
    </Flex>
  );
};
