export async function FetchAPI(code, type, value) {
  if (type === "cep") {
    return await fetch(`https://viacep.com.br/ws/${code}/json/`)
      .then((data) => data.json());
  }
  if (type === "state") {
    return await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((data) => data.json());
  }
  if (type === "localidade") {
    return await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${code}/distritos`)
      .then((data) => data.json());
  }
  if (value?.uf === "" || value?.logradouro === "") return;
  if (type === "address") {
    const { uf, localidade, logradouro } = value;
    return await fetch(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`)
      .then((data) => data.json());
  }
}