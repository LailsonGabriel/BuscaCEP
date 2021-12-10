import { ErrorMessage } from 'formik';
import React, { useContext } from 'react'
import MyContext from '../../context/MyContext';
import { GlobalStyle } from '../../GlobalStyle';
import { handleInput } from '../../util/handleInput';
import Breadcrumber from '../Breadcrumber';
import FormZipCode from '../Form';
import InputReusable from '../InputReusable';

export default function SearchForAddress() {
  const { handleZipCode, zipCode, setZipCode, address } = useContext(MyContext);
  return (
    <FormZipCode cepOrAddress="cep">
      <GlobalStyle />
      <Breadcrumber />
      <InputReusable
        name="cep"
        title="CEP"
        type="number"
        value={zipCode.cep}
        onChange={(e) => handleInput(e, setZipCode, zipCode, Number)}
        searchZipCode={handleZipCode}
        placeholder="Ex 55961510"
      />
      {address.bairro !== "" && address.bairro !== undefined &&
        <div>
          <p>Logradouro: {address.logradouro}</p>
          <p>{`Cidade: ${address.localidade}-${address.uf}`}</p>
          <p>Bairro: {address.bairro}</p>
        </div>
      }
      <ErrorMessage component="p" name="cep" />
    </FormZipCode>
  )
}
