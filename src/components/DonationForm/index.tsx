import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Select,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CustomRadio } from "./CustomRadio";
import { DonationValidation } from "./Donations";

interface IDonationData {
  partner: string;
  value: string;
}

const schema = DonationValidation;

export const DonationForm = () => {
  const [loading, setLoading] = useState(false);
  const [anyValue, setAnyValue] = useState(false);

  const options = [30, 70, 150];

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<IDonationData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IDonationData) => {
    console.log(data);
  };

  return (
    <Flex
      as="form"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="value"
        render={({ field: { onBlur, onChange, ref } }) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="800px"
          >
            <RadioGroup name="value">
              {options.map((value) => (
                <CustomRadio
                  money
                  key={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  label={`${value}`}
                  value={`${value}`}
                  onClick={() => setAnyValue(false)}
                />
              ))}
              <CustomRadio
                onBlur={onBlur}
                onChange={onChange}
                label={"Outro valor"}
                value={"0"}
                onClick={() => setAnyValue(true)}
              />
            </RadioGroup>
            {anyValue && (
              <Box position="relative" mt="32px">
                <Input
                  type="number"
                  placeholder="Digite quanto deseja doar"
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  w={["240px", "336px"]}
                  py="16px"
                  pl="40px"
                  _focus={{}}
                />
                <Text position="absolute" top="8px" left="15px">
                  R$
                </Text>
              </Box>
            )}

            {!!errors && (
              <Text color="feedback.danger.regular" fontSize="sm" mt="8px">
                {errors.value?.message}
              </Text>
            )}

            <Text fontSize="1xl" color="gray.250" mt="48px">
              Selecione a instituição que deseja ajudar:
            </Text>

            <Select
              {...register("partner")}
              placeholder="Minha instituição"
              mt="24px"
              w={["240px", "336px"]}
              _focus={{}}
            >
              <option value="option-1">opcao 1</option>{" "}
              {/* ADICIONAR AS INSTITUIÇÕES VIA REQUISIÇÃO */}
              <option value="option-2">opcao 2</option>{" "}
              {/* ADICIONAR AS INSTITUIÇÕES VIA REQUISIÇÃO */}
            </Select>
            {!!errors && (
              <Text color="feedback.danger.regular" fontSize="sm" mt="8px">
                {errors.partner?.message}
              </Text>
            )}
          </Box>
        )}
      />

      <Button
        isLoading={loading}
        w="320px"
        bg="primary.350"
        _hover={{ bg: "primary.300" }}
        type="submit"
        mt="32px"
        _focus={{}}
      >
        Enviar
      </Button>
    </Flex>
  );
};
