import React, { useState } from 'react';
import { FetchAPI } from '../util/fetchAPI';
import MyContext from './MyContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyProvider({ children }) {
  const [zipCode, setZipCode] = useState({ cep: undefined });
  const [address, setAddress] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: ""
  });

  async function handleZipCode(type) {
    if (String(zipCode.cep).length !== 8 && type === "cep") return;
    const fullAddress = address[0] ? address[0] : address;
    const { uf, localidade, logradouro } = fullAddress;
    if ((uf === "" || localidade === "" || logradouro === "") && type === "address") return;
    const searchZipCode = await FetchAPI(zipCode.cep, type, fullAddress);
    setAddress(searchZipCode);
  }

  const reveal = {
    address,
    setAddress,
    handleZipCode,
    zipCode,
    setZipCode
  }

  return (
    <MyContext.Provider value={reveal}>
      {children}
      <ToastContainer />
    </MyContext.Provider>
  )
}
