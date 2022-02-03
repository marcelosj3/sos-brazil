import { useEffect } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

import { useAuth } from "../../../../contexts/AuthContext";
import { useUser } from "../../../../contexts/UserContext";

import { UserModal } from "../userModal";

export const UserInfo = () => {
  const { id } = useParams();
  const { userData, userMan } = useUser();
  const userId = (id && id) || "";
  const { accessToken } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    userData(userId, accessToken);
  }, [userId]);

  return (
    <Flex
      w="100vw"
      justifyContent={"space-evenly"}
      alignContent={"center"}
      flexWrap={"wrap"}
    >
      <Grid>
        <Box>
          <Text> Nome : {userMan.name}</Text>
          <Text> Email : {userMan.email}</Text>
          <Text> Telefone : {userMan.social_number}</Text>
        </Box>
      </Grid>
      <Grid>
        <Button
          _focus={{}}
          bg="feedback.success"
          size="lg"
          leftIcon={<FaRegEdit />}
          variant={"solid"}
          onClick={() => onOpen()}
        >
          Editar informações
        </Button>
        <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent
            bg="primary.200"
            maxW={"450px"}
            minW={"300px"}
            w="450px"
          >
            <ModalHeader>Editar Informações</ModalHeader>
            <ModalCloseButton _focus={{}} />
            <ModalBody>
              <UserModal />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
    </Flex>
  );
};
