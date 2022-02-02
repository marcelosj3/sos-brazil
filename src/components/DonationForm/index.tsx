import { useCallback, useEffect, useState } from "react";
import { Grid, Heading, VStack, Button, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { RadioGroup } from "../Register/RadioGroup";
import { useAuth } from "../../contexts/AuthContext";
import { useDonation } from "../../contexts/DonationContext";
import { Input } from "../Register/Input";
import { api } from "../../services/api";

interface IDonations {
  value: number;
  date: string;
  options: string[];
}

interface IOptions {
  value: string;
}

interface IPartner {
  name: string;
  description: string;
  cnpj: string;
  cause: string;
  type: string;
  logo: string;
  site: string;
  id: number;
}

const donationSchema = yup.object().shape({
  value: yup.string().required("Valor Obrigatório"),
  partner: yup.string().required("Selecione uma opção"),
});

export const DonationForm = () => {
  const navigate = useNavigate();

  const { accessToken } = useAuth();

  const { registerDonations } = useDonation();

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");

  const [partners, setPartners] = useState<Array<IPartner>>([]);

  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<IOptions>({
    resolver: yupResolver(donationSchema),
  });

  const getPartners = useCallback(async () => {
    await api.get("/partners").then((response) => setPartners(response.data));
  }, []);

  useEffect(() => {
    getPartners();
  }, [getPartners]);

  const handleDonation = (data: IOptions) => {
    // const date = new Date();
    // const newData = { ...data, date };
    setLoading(true);
    registerDonations(data, accessToken)
      .then((_) => {
        setLoading(false);
        navigate("/donate");
      })
      .catch((_) => setLoading(false));
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleDonation)}
      as="form"
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100.100"
      bg="gray.100.100"
      color="gray.300.100"
      mt={["4", "4", "0"]}
    >
      <Heading size="lg" textAlign="center" fontWeight="normal">
        Quero Doar
      </Heading>
      <VStack spacing="5" mt="6">
        <RadioGroup
          options={["R$ 30", "R$ 70", "R$ 150", "Outro Valor"]}
          name="Donation"
          control={control}
        />
        <Input
          placeholder="Digite quanto deseja doar"
          type="text"
          error={errors.value}
          {...register("value")}
        />
        <p>Selecione a instituição que deseja doar</p>
        <Select placeholder="Minha Instituição">
          {partners.map((partner, index) => (
            <option key={index} value={partner.name}>
              {partner.name}
            </option>
          ))}
        </Select>
        <Button
          isLoading={loading}
          bg="primary.350"
          w="100%"
          color="gray.300.100"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "primary.300",
          }}
          type="submit"
        >
          Ir Para Pagamento
        </Button>
      </VStack>
    </Grid>
  );
};
