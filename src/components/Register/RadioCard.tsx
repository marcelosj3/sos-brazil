import { ReactNode } from "react";
import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

interface IRadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioCard = ({ children, ...rest }: IRadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio({ ...rest });

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        border="1px solid"
        borderColor="secondary.300"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "secondary.300",
          color: "gray.100.100",
          borderColor: "secondary.300",
        }}
        _focus={{}}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
};
