import React from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { MainContainer } from './style';
import BtnLinkReusable from '../BtnLinkReusable';
import Footer from '../Footer';

export default function Main() {
  return (
    <MainContainer>
      <GlobalStyle />
      <div className="aplication">
        <h1>Bem vindo ao BuscaCEP!</h1>
        <p>O Aplicativo BuscaCEP! permite que você encontre códigos de endereçamento postais(CEP).</p>
        <p>Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscaCEP! também vai te ajudar</p>
        <div className="btn-routes">
          <BtnLinkReusable path="/BuscarEndereco" btnInfo="Buscar Endereço" />
          <BtnLinkReusable path="/BuscarCEP" btnInfo="Buscar CEP" />
        </div>
      </div>
      <Footer />
    </MainContainer>
  )
}
