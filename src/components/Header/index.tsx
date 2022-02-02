import { Button, Flex, Image, useMediaQuery, Link } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";

import { MenuButton } from "../MenuButton";

import Logo from "../../assets/logo-sos-Brasil.svg";

export const Header = () => {
  const [MediaQuery480] = useMediaQuery("(min-width: 480px)");
  const [MediaQuery560] = useMediaQuery("(min-width: 560px)");

  const navigate = useNavigate();
  return (
    <Flex
      h="85px"
      w="100%"
      background="gray.300.50"
      boxShadow="xl"
      sx={{ backdropFilter: "blur(7px)" }}
      justifyContent="space-around"
      alignItems="center"
      color="gray.100.100"
      position="fixed"
      top="0"
      zIndex="1"
    >
      <Flex
        maxW="1200px"
        w="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        {MediaQuery480 ? (
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            color="gray.100.100"
            _hover={{
              color: "gray.300.100",
              bg: "gray.100.100",
              borderColor: "gray.100.100",
            }}
          >
            Login
          </Button>
        ) : (
          <MenuButton />
        )}

        {MediaQuery480 ? (
          <Link as={ReachLink} to="/">
            Home
          </Link>
        ) : null}
        {MediaQuery560 ? <Link href="/#assistencia">Assistencias</Link> : null}

        <Image src={Logo} alt="logo" w="50px" order={[-1, 0]} />
        {MediaQuery480 ? (
          <Link as={ReachLink} to="#">
            Colaboradores
          </Link>
        ) : null}
        {MediaQuery560 ? (
          <Link as={ReachLink} to="#">
            Sobre nós
          </Link>
        ) : null}

        <Button
          order={[-2, 0]}
          variant="solid"
          size="md"
          color="white"
          bg="feedback.danger.regular"
          _hover={{ bg: "feedback.danger.light" }}
        >
          Doe Agora
        </Button>
      </Flex>
    </Flex>
  );
};