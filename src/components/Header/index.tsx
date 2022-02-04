import { Button, Flex, Image, useMediaQuery, Link } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { MenuButton } from "../MenuButton";

import Logo from "../../assets/logo-sos-Brasil.svg";

export const Header = () => {
  const [MediaQuery480] = useMediaQuery("(min-width: 480px)");
  const [MediaQuery560] = useMediaQuery("(min-width: 560px)");

  const { accessToken, user, signOut } = useAuth();

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
          accessToken ? (
            <Flex w="100px" justifyContent={"space-around"}>
              <Link as={ReachLink} to={`/user/${user.id}`} _focus={{}}>
                User
              </Link>
              <Link onClick={() => signOut()} _focus={{}}>
                Sair
              </Link>
            </Flex>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              color="gray.100.100"
              _hover={{
                color: "gray.300.100",
                bg: "gray.100.100",
                borderColor: "gray.100.100",
              }}
              _focus={{}}
            >
              Login
            </Button>
          )
        ) : (
          <MenuButton />
        )}

        {MediaQuery480 ? (
          <Link href="/#" _focus={{}}>
            Home
          </Link>
        ) : null}
        {MediaQuery560 ? (
          <Link href="/#assistencia" _focus={{}}>
            Assistências
          </Link>
        ) : null}

        <Image src={Logo} alt="logo" w="50px" order={[-1, 0]} />
        {MediaQuery480 ? (
          <Link as={ReachLink} to="/partners" _focus={{}}>
            Colaboradores
          </Link>
        ) : null}
        {MediaQuery560 ? (
          <Link href="/#sobre-nos" _focus={{}}>
            Sobre nós
          </Link>
        ) : null}

        <Button
          order={[-2, 0]}
          variant="solid"
          size="md"
          color="gray.100.100"
          bg="feedback.danger.regular"
          _hover={{ bg: "feedback.danger.light" }}
          onClick={() => navigate("/donation")}
        >
          Doe Agora
        </Button>
      </Flex>
    </Flex>
  );
};
