import { ErrorMessage } from 'formik';
import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import { GlobalStyle } from '../../GlobalStyle';
import useEffectHook from '../../hooks/UseEffectHook';
import { handleInput, infosToZipCode } from '../../util/handleInput';
import Breadcrumber from '../Breadcrumber';
import FormZipCode from '../Form';
import InputReusable from '../InputReusable';

export default function SearchForCEP() {
  const { address, setAddress } = useContext(MyContext);
  const [stateSelect, setStateSelect] = useState();
  const states = useEffectHook('state');
  const cities = useEffectHook('localidade', stateSelect);

  async function getCities() {
    const findUfID = states.find((state) => state.sigla === address.uf);
    setStateSelect(findUfID?.id);
  }

  return (
    <FormZipCode cepOrAddress="address">
      <GlobalStyle />
      <Breadcrumber />
      <InputReusable
        name={infosToZipCode[0].provider}
        title={infosToZipCode[0].PTBR}
        value={address[infosToZipCode[0].provider]}
        onChange={(e) => handleInput(e, setAddress, address, String)}
        array={states[0]?.id && [{ sigla: 'Selecione o seu Estado' }, ...states]}
        setStateSelect={getCities}
      />
      <InputReusable
        name={infosToZipCode[1].provider}
        title={infosToZipCode[1].PTBR}
        value={address[infosToZipCode[1].provider]}
        onChange={(e) => handleInput(e, setAddress, address, String)}
        array={[{ nome: 'Selecione sua Cidade' }, ...cities]}
      />
      <InputReusable
        name={infosToZipCode[2].provider}
        title={infosToZipCode[2].PTBR}
        value={address[infosToZipCode[2].provider]}
        onChange={(e) => handleInput(e, setAddress, address, String)}
      />
      <ErrorMessage component="p" name="logradouro" />
      <p>{address[0]?.cep && `CEP: ${address[0].cep}`}</p>
    </FormZipCode>
  );
}
