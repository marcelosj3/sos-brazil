import { Flex, Radio } from "@chakra-ui/react";
import { Noop } from "react-hook-form";

import "./style.css";

interface ICustomRadioProps {
  value: number | string;
  label: string;
  onBlur: Noop;
  onChange: (...event: any[]) => void;
  onClick: () => void;
  money?: boolean;
}

export const RadioCustom = ({
  value,
  label,
  onBlur,
  onChange,
  onClick,
  money,
}: ICustomRadioProps) => {
  return (
    <Radio
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      sx={{ display: "none" }}
    >
      <Flex
        className="input__label"
        bg={"transparent"}
        w={["125px", "150px"]}
        h="50px"
        borderRadius="8px"
        border="1px solid"
        color="gray.300.100"
        borderColor="secondary.300"
        alignItems="center"
        justifyContent="center"
        fontSize="18px"
        onClick={onClick}
        transition="0.3s"
        _hover={{ bg: "secondary.100", borderColor: "secondary.100" }}
      >
        {money ? "R$" : ""} {label}
      </Flex>
    </Radio>
  );
};
