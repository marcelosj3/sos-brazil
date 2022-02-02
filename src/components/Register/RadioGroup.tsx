import { HStack, useRadioGroup } from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

import { RadioCard } from "./RadioCard";

interface IOptions {
  value: string;
}
interface IRadioGroupProps {
  options: string[];
  name: string;
  defaultValue?: string;
  control: Control<IOptions>;
}

export const RadioGroup = ({
  options,
  name,
  defaultValue,
  control,
}: IRadioGroupProps) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
    rules: { required: { value: true, message: "Required field" } },
  });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    value: field.value,
    onChange: field.onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
