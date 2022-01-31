import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Center,
  Box,
  Link,
} from "@chakra-ui/react";

import { FiMenu, FiX } from "react-icons/fi";

import { Link as ReachLink } from "react-router-dom";

export const MenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <DrawerOverlay mt="15vh" bg="transparent" />
        <DrawerContent
          textAlign="center"
          color="white"
          background="rgba(0, 0, 0, 0.2)"
          mt="15vh"
          sx={{ "backdrop-filter": "blur(7px)" }}
        >
          <Box width="100%" h="16px" bg="gray" />
          <Link as={ReachLink} to="./Login" _focus={{}}>
            Home
          </Link>
          <Link as={ReachLink} to="./Login" _focus={{}}>
            Sobre nós
          </Link>
          <Link as={ReachLink} to="./Login" _focus={{}}>
            Colaboradores
          </Link>
          <Link as={ReachLink} to="./Login" _focus={{}}>
            Contato
          </Link>
          <Box width="100%" h="16px" bg="gray" />
          <Link as={ReachLink} to="./Login" _focus={{}}>
            Login
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
};
