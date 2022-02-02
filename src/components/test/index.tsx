import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";

import "./style.css";

type FormValues = {
  value: string;
};

export function Input(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);

  return <input {...field} placeholder={props.name} />;
}

export const Test = () => {
  const [showAnyValue, setShowAnyValue] = useState(false);

  const { handleSubmit, control, register } = useForm<FormValues>({
    defaultValues: {
      value: "",
    },
    mode: "onChange",
  });

  const options = ["R$ 30,00", "R$ 70,00", "R$ 150,00"];

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="value" rules={{ required: true }} />
      {options.map((value) => (
        <Box key={value}>
          <input
            className="chakra-radio__input"
            type="radio"
            id={value}
            value={value}
            {...register("value")}
          />{" "}
          <label
            className="chakra-radio__label"
            htmlFor={value}
            onClick={() => setShowAnyValue(false)}
          >
            {value}
          </label>
        </Box>
      ))}
      <Button onClick={() => setShowAnyValue(true)}>Outro Valor</Button>
      <Button type="submit">Vai</Button>
    </form>
  );
};
