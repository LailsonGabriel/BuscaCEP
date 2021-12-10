import * as yup from 'yup';

export const schema = yup.object().shape({
  cep: yup.string().required("CEP Obrigatório").max(8, 'Máximo 8 dígitos'),
  uf: yup.string().min(2).required("Estado Obrigatório"),
  localidade: yup.string().required("Cidade Obrigatória"),
  bairro: yup.string().required("Bairro Obrigatório"),
  logradouro: yup.string().required("Logradouro Obrigatório"),
});