import { useState } from "react";
import {
  Grid,
  Heading,
  Text,
  VStack,
  Button,
  RadioGroup,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { RadioCustom } from "../RadioCustom";
import { CpfForm } from "./CpfForm";
import { CnpjForm } from "./CnpjForm";
import { RegisterValidation } from "./Validation";

interface IRegisterData {
  name: string;
  password: string;
  email: string;
  socialNumber: string;
  typeOfUser: string;
}

const schema = RegisterValidation;

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { signUp } = useAuth();

  const [typeOfUser, setTypeOfUser] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<IRegisterData>({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data: IRegisterData) => {
    setLoading(true);
    signUp(data)
      .then((_) => {
        setLoading(false);
        navigate("/login");
      })
      .catch((_) => setLoading(false));
  };

  return (
    <Controller
      control={control}
      name="typeOfUser"
      render={({ field: { onBlur, onChange, ref } }) => (
        <Grid
          onSubmit={handleSubmit(handleRegister)}
          as="form"
          w={["100%"]}
          maxW={["300px", "400px"]}
          padding="30px 15px"
          bg="transparent"
          color="gray.300.100"
        >
          <Heading size="lg" textAlign="center" fontWeight="normal">
            Seja bem vindo!
          </Heading>
          <VStack spacing="5" mt="6">
            <Text>Eu sou...</Text>
            <RadioGroup
              name="value"
              gap="30px"
              display="flex"
              widht="100%"
              gridTemplateColumns={[
                "repeat(2, 150px)",
                "repeat(2, 150px)",
                "repeat(4, 150px)",
              ]}
              justifyItems="center"
              alignItems="center"
            >
              <RadioCustom
                key="CPF"
                onBlur={onBlur}
                onChange={onChange}
                label="Pessoa Física"
                value="CPF"
                onClick={() => setTypeOfUser("CPF")}
              />
              <RadioCustom
                key="CNPJ"
                onBlur={onBlur}
                onChange={onChange}
                label="Pessoa Jurídica"
                value="CNPJ"
                onClick={() => setTypeOfUser("CNPJ")}
              />
            </RadioGroup>
            {typeOfUser === "CPF" ? (
              <CpfForm register={register} errors={errors} />
            ) : null}
            {typeOfUser === "CNPJ" ? (
              <CnpjForm register={register} errors={errors} />
            ) : null}
            <Button
              isLoading={loading}
              bg="primary.350"
              w="100%"
              color="gray.300.100"
              h={["40px", "48px"]}
              borderRadius="8px"
              _hover={{
                background: "primary.300",
              }}
              type="submit"
            >
              Cadastrar
            </Button>
            <Text>Já possui cadastro?</Text>
            <Button
              isLoading={loading}
              bg="transparent"
              border="1px solid"
              borderColor="secondary.300"
              w="100%"
              color="secondary.300"
              h={["40px", "48px"]}
              borderRadius="8px"
              _hover={{
                background: "secondary.250",
                color: "gray.100.100",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </VStack>
        </Grid>
      )}
    />
  );
};
