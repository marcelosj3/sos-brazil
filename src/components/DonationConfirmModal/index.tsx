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
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";
import { useDon } from "../../contexts/DonationContext";

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

  const { registerDonations } = useDon();
  const { accessToken, user } = useAuth();

  const handleDonation = () => {
    const date = new Date();
    const newData = { ...data, date, userId: user.id };
    registerDonations(newData, accessToken)
      .then((_) => {
        onClose();
        toast.success("Doação cadastrada com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((_) =>
        toast.error("Erro ao cadastrar doação!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary.200" color="gray.600">
        <ModalHeader color="gray.0">Agradecemos sua doação!</ModalHeader>
        <ModalCloseButton _focus={{}} />
        <ModalBody>
          Você está doando para {partner} o valor de R${value},00. Obrigado!
        </ModalBody>
        <ModalFooter>
          <Button
            color="gray.50"
            bg="secondary.300"
            mr={3}
            onClick={handleDonation}
          >
            Confirmar doação
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
