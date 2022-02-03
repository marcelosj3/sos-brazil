import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, digite seu email")
    .email("Por favor, digite um email válido"),
  password: yup.string().required("Por favor, digite sua senha"),
});
