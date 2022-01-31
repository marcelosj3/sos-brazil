import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Logo from "../../assets/logo-sos-Brasil.svg";
import { Link } from "react-router-dom";
import { MenuButton } from "../MenuButton";

export const Header = () => {
  const [point] = useMediaQuery("(min-width: 560px)");
  return (
    <Flex
      h="15vh"
      w="100%"
      background="rgba(0, 0, 0, 0.2)"
      boxShadow="xl"
      sx={{ "backdrop-filter": "blur(7px)" }}
      justifyContent="space-around"
      alignItems="center"
      color="white"
    >
      {point ? (
        <Button
          variant="outline"
          color="white"
          _hover={{ color: "black", bg: "white" }}
        >
          Login
        </Button>
      ) : (
        <MenuButton />
      )}

      {point ? <Link to="#">Home</Link> : null}
      {point ? <Link to="#">Sobre nós</Link> : null}

      <Image src={Logo} alt="logo" w="50px" order={[-1, 0]} />
      {point ? <Link to="#">Colaboradores</Link> : null}
      {point ? <Link to="#">Contato</Link> : null}

      <Button
        order={[-2, 0]}
        variant="solid"
        size="md"
        color="white"
        bg="feedback.danger"
      >
        Doe Agora
      </Button>
    </Flex>
  );
};
