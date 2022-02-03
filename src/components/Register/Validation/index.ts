import * as yup from "yup";

export const RegisterValidation = yup.object().shape({
  name: yup.string().required("Por favor digite seu nome"),
  email: yup
    .string()
    .required("Por favor digite seu email")
    .email("Por favor digite um email válido"),
  password: yup.string().required("Por favor digite sua senha"),
  socialNumber: yup.string().required("Campo obrigatório"),
});
