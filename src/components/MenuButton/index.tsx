import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Center,
  Box,
  Link,
  Text,
  Grid,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ReachLink } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

export const MenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { accessToken } = useAuth();

  return (
    <>
      <Center as="button" onClick={onOpen} width="40px" h="40px">
        {!!isOpen ? (
          <FiX fontSize="2.5rem" onClick={onClose} />
        ) : (
          <FiMenu fontSize="2.5rem" />
        )}
      </Center>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay mt="85px" bg="gray.300.50" />
        <DrawerContent
          textAlign="center"
          color="gray.100.100"
          background="gray.300.20"
          mt="85px"
          sx={{ backdropFilter: "blur(7px)" }}
          fontSizes="lg"
        >
          <Box width="100%" h="16px" bg="gray.100.15" />
          <Grid gap={8} padding="16px 0 16px 0">
            <Link as={ReachLink} to="/" _focus={{}}>
              Home
            </Link>
            <Link href="/#assistencia" _focus={{}}>
              Assistencias
            </Link>
            <Link as={ReachLink} to="./Login" _focus={{}}>
              Colaboradores
            </Link>
            <Link as={ReachLink} to="./Login" _focus={{}}>
              Sobre nós
            </Link>
          </Grid>

          <Box width="100%" h="16px" bg="gray.100.15" />

          {accessToken ? (
            <Grid gap={8}>
              <Link as={ReachLink} to="./user" _focus={{}}>
                User
              </Link>
              <Text onClick={() => {}}>Logout</Text>
            </Grid>
          ) : (
            <Link as={ReachLink} to="./Login" _focus={{}} mt="16px">
              Login
            </Link>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
