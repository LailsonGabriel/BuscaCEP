import React from 'react';
import { Link } from 'react-router-dom';
import { BreadContainer } from './style';
import { useLocation } from 'react-router-dom';


export default function Breadcrumber() {
  const { pathname } = useLocation();
  return (
    <BreadContainer>
      <Link to='/'>Início</Link>
      <Link to={pathname}>
        {pathname.split('/')[1] === "BuscarCEP" ? 'Buscar CEP' : 'Buscar Endereço'}
      </Link>
    </BreadContainer>
  )
}
