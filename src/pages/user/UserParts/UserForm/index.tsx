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
  Heading,
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
  }, [userData, userId, accessToken]);

  return (
    <Flex
      w="100vw"
      justifyContent="center"
      alignContent="center"
      flexWrap="wrap"
    >
      <Grid>
        <Box
          w={["300px", "350px", "430px"]}
          background="gray.100.100"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          boxShadow="2xl"
          h="350px"
          borderRadius="8px"
          padding={["8px", "30px"]}
        >
          <Heading
            display="flex"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="2xl" color="secondary.300">
              {" "}
              {userMan.name}
            </Text>
          </Heading>
          <Text color="gray.250">{userMan.email}</Text>
          <Text color="gray.250">{userMan.socialNumber}</Text>
          <Button
            _focus={{}}
            bg="primary.350"
            size="lg"
            leftIcon={<FaRegEdit />}
            variant="solid"
            onClick={() => onOpen()}
          >
            Editar informações
          </Button>
        </Box>
      </Grid>
      <Grid>
        <Modal onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent
            bg="gray.100.100"
            w={["300px", "350px", "450px"]}
            maxW="450px"
            minW="300px"
            padding="30px"
            marginTop="18vh"
          >
            <ModalHeader
              display="flex"
              justifyContent="center"
              padding="20px"
              color="gray.250"
            >
              Editar Informações
            </ModalHeader>
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
