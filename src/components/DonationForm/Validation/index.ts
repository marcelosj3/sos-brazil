import * as yup from "yup";

export const DonationValidation = yup.object({
  value: yup
    .number()
    .test("Has-a-value", "Insira um valor", (value) => value !== 0)
    .required("Escolha um valor"),
  partner: yup.string().required("Escolha uma instituição para ajudar"),
});
