import * as yup from "yup";

export const RegisterCpfSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  social_number: yup.string().required("CPF obrigatório"),
});

export const RegisterCnpjSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  social_number: yup.string().required("CNPJ obrigatório"),
  area: yup.string().required("Área de atuação obrigatória"),
});
