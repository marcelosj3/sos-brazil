import { ReactNode } from "react";
import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

interface IRadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioCard = ({ children, ...rest }: IRadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio({ ...rest });

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  console.log(input);
  console.log(checkbox);

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        onClick={() => console.log("oi")}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "primary.350",
          color: "gray.300.100",
          borderColor: "primary.350",
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
