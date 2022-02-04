import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";
import { useDon } from "../../contexts/DonationContext";
import { currencyFormatter } from "../../utils/currencyFormatter";

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
  const [loading, setLoading] = useState(false);
  const { partner, value } = data;

  const navigate = useNavigate();

  const { registerDonations } = useDon();
  const { accessToken, user } = useAuth();

  const handleDonation = () => {
    setLoading(true);
    const date = new Date();
    const newData = { ...data, date, userId: user.id };
    registerDonations(newData, accessToken)
      .then((_) => {
        setLoading(false);
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
      .catch((_) => {
        setLoading(false);
        toast.error("Erro ao cadastrar doação!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary.200" color="gray.600">
        <ModalHeader color="gray.0">Agradecemos sua doação!</ModalHeader>
        <ModalCloseButton _focus={{}} />
        <ModalBody textAlign="center">
          {!!accessToken ? (
            <Text>
              Você está doando{" "}
              <Text
                as="span"
                fontWeight="bold"
                color="secondary.250"
                fontSize="lg"
              >
                {currencyFormatter.format(Number(value))}
              </Text>{" "}
              para a{" "}
              <Text
                as="span"
                display="block"
                fontWeight="bold"
                color="secondary.250"
                fontSize="xl"
              >
                {partner}
              </Text>
            </Text>
          ) : (
            <Text>
              Você está tentando doar{" "}
              <Text
                as="span"
                fontWeight="bold"
                color="secondary.250"
                fontSize="lg"
              >
                {currencyFormatter.format(Number(value))}
              </Text>{" "}
              para a instituição{" "}
              <Text
                as="span"
                display="block"
                fontWeight="bold"
                color="secondary.250"
                fontSize="xl"
              >
                {" "}
                {partner}{" "}
              </Text>
              mas antes você precisa fazer login!
            </Text>
          )}
        </ModalBody>
        <Button
          isLoading={loading}
          w="200px"
          color="gray.50"
          bg="secondary.300"
          mr={3}
          margin="16px auto"
          _focus={{}}
          onClick={!!accessToken ? handleDonation : () => navigate("/login")}
        >
          {!!accessToken ? "Confirmar doação" : "Login"}
        </Button>
      </ModalContent>
    </Modal>
  );
};
