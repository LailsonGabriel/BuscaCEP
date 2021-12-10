/// <reference types="cypress" />
/* eslint-disable jest/valid-expect */

describe('Testa a página que procura o CEP', () => {
  const cepResult = "CEP: 55291-110";

  beforeEach(() => {
    cy.visit('/BuscarCEP');
    cy.location().should((loc) => expect(loc.pathname).to.equal('/BuscarCEP'));
  });

  it('Verifica se existe o header de navegação na página, o Breadcumbrer e o footer', () => {
    cy.findAllByRole('link', { name: /buscar cep/i }).should('exist');
    cy.findByRole('link', { name: /buscar endereço/i }).should('exist');
    cy.findByRole('heading', { name: /2021/i }).should('exist');
  });

  it('Deve retornar o cep correto ao passar as informações no formulário', () => {
    cy.get(':nth-child(2) > select').select('PE').select('PE');
    cy.get(':nth-child(3) > select').select('Garanhuns').select('Garanhuns');
    cy.get('#logradouro').type('Rua João Ferreira Costa');
    cy.get('.btn-submit').click();
    cy.findByText(cepResult);
  });
});