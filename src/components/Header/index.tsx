import { Button, Flex, Image, useMediaQuery, Link } from "@chakra-ui/react";
import Logo from "../../assets/logo-sos-Brasil.svg";
import { Link as ReachLink } from "react-router-dom";
import { MenuButton } from "../MenuButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [point] = useMediaQuery("(min-width: 480px)");
  const [point1] = useMediaQuery("(min-width: 560px)");

  const link = window.location.href;
  const splitLink = link.split("/");
  const compLink = splitLink[splitLink.length - 1];

  console.log(compLink);

  const navigate = useNavigate();
  return (
    <Flex
      h="85px"
      w="100%"
      background="rgba(0, 0, 0, 0.2)"
      boxShadow="xl"
      sx={{ backdropFilter: "blur(7px)" }}
      justifyContent="space-around"
      alignItems="center"
      color="white"
      position="fixed"
      top="0"
    >
      {point ? (
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          color="white"
          _hover={{ color: "black", bg: "white" }}
        >
          Login
        </Button>
      ) : (
        <MenuButton />
      )}

      {point ? (
        <Link as={ReachLink} to="/">
          Home
        </Link>
      ) : null}
      {point1 ? <Link href="/#assistencia">Assistencias</Link> : null}

      <Image src={Logo} alt="logo" w="50px" order={[-1, 0]} />
      {point ? (
        <Link as={ReachLink} to="#">
          Colaboradores
        </Link>
      ) : null}
      {point1 ? (
        <Link as={ReachLink} to="#">
          Sobre nós
        </Link>
      ) : null}

      <Button
        order={[-2, 0]}
        variant="solid"
        size="md"
        color="white"
        bg="feedback.danger"
        _hover={{ bg: "#d8786b" }}
      >
        Doe Agora
      </Button>
    </Flex>
  );
};
