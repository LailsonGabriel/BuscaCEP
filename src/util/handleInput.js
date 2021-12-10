export function handleInput(e, setFunc, prevValue, type) {
  const { name, value } = e.target;
  setFunc({ ...prevValue, [name]: type(value) })
}

export function initialValues(form1, form2,) {
  return {
    cep: form2.cep,
    uf: form1.uf,
    localidade: form1.localidade,
    bairro: form1.bairro,
    logradouro: form1.logradouro,
  }
}

export const infosToZipCode = [
  {
    provider: "uf",
    PTBR: "Estado / UF"
  },
  {
    provider: "localidade",
    PTBR: "Cidade"
  },
  {
    provider: "logradouro",
    PTBR: "Logradouro"
  }
];