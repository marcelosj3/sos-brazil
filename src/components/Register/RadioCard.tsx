<<<<<<< HEAD
import { ReactNode } from "react";
import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

interface IRadioCardProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioCard = ({ children, ...rest }: IRadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio({ ...rest });
=======
import { Box, useRadio } from "@chakra-ui/react";

export function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#FFB703",
          color: "black",
          borderColor: "#FFB703",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
<<<<<<< HEAD
        {children}
      </Box>
    </Box>
  );
};
=======
        {props.children}
      </Box>
    </Box>
  );
}
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6
