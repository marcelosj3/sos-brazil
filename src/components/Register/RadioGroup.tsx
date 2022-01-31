import { HStack, useRadioGroup } from "@chakra-ui/react";
<<<<<<< HEAD
=======

>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6
import { RadioCard } from "./RadioCard";

interface IRadioGroupProps {
  options: string[];
  name: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
}

<<<<<<< HEAD
export const RadioGroup = ({
=======
export function RadioGroup({
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6
  options,
  name,
  defaultValue,
  onChange,
<<<<<<< HEAD
}: IRadioGroupProps) => {
=======
}: IRadioGroupProps) {
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6
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
<<<<<<< HEAD
};
=======
}
>>>>>>> 8ef2642d0094c09e4f3ee49a15a1196efe359ac6
