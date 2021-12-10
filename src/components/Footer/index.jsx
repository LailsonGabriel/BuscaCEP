import React from 'react'
import { FooterContainer } from './style';

export default function Footer() {
  const data = new Date();
  return (
    <FooterContainer>
      <h2>{`${data.getFullYear()} - BuscaCEP!`}</h2>
    </FooterContainer>
  )
}
