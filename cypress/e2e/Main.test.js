/// <reference types="cypress" />
/* eslint-disable jest/valid-expect */


describe('Testa a página principal da aplicação', () => {
  it('Verifica a rota e se existem botões de navegação', () => {
    cy.visit('/');
    cy.location().should((loc) => expect(loc.pathname).to.equal('/'));
    cy.findByRole('link', { name: /buscar endereço/i });
    cy.findByRole('link', { name: /buscar cep/i })
  });

  it('Verifica se existe um rodapé', () => {
    cy.findByRole('heading', { name: /2021/i });
  });

  it('Verifica se ao clicar no botão de Buscar Endereço ele vai rota correta', () => {
    cy.findByRole('link', { name: /buscar endereço/i }).click();
    cy.location().should((loc) => expect(loc.pathname).to.equal('/BuscarEndereco'));
  });

  it('Verifica se ao clicar no botão de Buscar CEP ele vai rota correta', () => {
    cy.findByRole('link', { name: /buscar CEP/i }).click();
    cy.location().should((loc) => expect(loc.pathname).to.equal('/BuscarCEP'));
  });
})