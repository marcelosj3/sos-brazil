import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IDonationData {
  partner: string;
  value: string;
}

interface IDonationConfirmModal {
  isOpen: boolean;
  onClose: () => void;
  data: IDonationData;
}

export const DonationConfirmModal = ({
  isOpen,
  onClose,
  data,
}: IDonationConfirmModal) => {
  const { partner, value } = data;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agradecemos sua doação!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Você está doando para {partner} o valor de R${value},00. Obrigado!
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Confirmar doação
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
