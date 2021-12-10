/// <reference types="cypress" />
/* eslint-disable jest/valid-expect */

describe('Testa a página que procura o endereço', () => {
  beforeEach(() => {
    cy.visit('/BuscarEndereco');
    cy.location().should((loc) => expect(loc.pathname).to.equal('/BuscarEndereco'));
  });

  it('Verifica se existe o header de navegação na página, o Breadcumbrer e o footer', () => {
    cy.findByRole('link', { name: /buscar cep/i }).should('exist');
    cy.findAllByRole('link', { name: /buscar endereço/i }).should('exist');
    cy.findByRole('heading', { name: /2021/i }).should('exist');
  });

  it('Mocka o Fetch e verifica se o resultado está equivalente ao que foi mockado', () => {
    cy.intercept('GET', '/BuscarEndereco', res => {
      res.reply({
        cep: "55291-110",
        logradouro: "Rua João Ferreira Costa",
        bairro: "Francisco Simão dos Santos Figueira",
        localidade: "Garanhuns",
        uf: "PE"
      });
    });
    cy.get("#cep").type(55291110);
    cy.findByRole('button', { name: /buscar/i }).click();
    cy.findByText(/Rua João Ferreira Costa/i);
    cy.findByText(/Garanhuns/i);
    cy.findByText(/PE/i);
    cy.findByText(/Francisco Simão dos Santos Figueira/i);
  });
})