import { HStack, useRadioGroup } from "@chakra-ui/react";
import { RadioCard } from "./RadioCard";

interface IRadioGroupProps {
  options: string[];
  name: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
}

export function RadioGroup({
  options,
  name,
  defaultValue,
  onChange,
}: IRadioGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
    onChange: onChange,
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
}
