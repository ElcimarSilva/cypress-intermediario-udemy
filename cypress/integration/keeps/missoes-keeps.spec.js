/// <reference=types="cypress" />

const { time } = require("console");

describe('Testes das funcionalidades em torno das missões', function () {
    const email = Cypress.env('admin_cy');
    const pass = Cypress.env('senha');

    beforeEach('User Login', function () {
      cy.auth_login(email, pass);
      cy.visit('/');
      cy.server();
      cy.route('companies').as('companies');
      cy.wait('@companies');
      cy.get('#companies');
      cy.get(':nth-child(4) > .mat-card-image').click();
      
    });
    it.only('listagem-missão-em-orbita', ()=> {
        cy.clock()
        cy.AcessarMissoes()
        //Colocar em um comando personalizado chamado "criar missão interna"
        cy.get('.navbar-header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
          .click()
        cy.get('.missions-float-button > .mat-focus-indicator > .mat-button-wrapper')
          .click()
        cy.get('.mat-menu-content > :nth-child(1)')
          .click()
        //Campo nome
        cy.get('.mat-form-field.ng-tns-c43-21 > .mat-form-field-wrapper > .mat-form-field-flex')
          .type('Teste missão interna')
        //Campo caegoria
        cy.contains('Categoria').should('be.visible')
          .click({force: true})
          cy.contains('Automação Cy')
          .click()
        //Campo empresa
        cy.contains('Tipo *')
          .click({force: true})
          .contains('Aberto para a empresa')
          .click()
        //Campo linguagem
        cy.contains('Português')
          .click()
        //Campo descrição
        cy.get('.mat-form-field.ng-tns-c43-30 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
          .type('Teste missão interna')
        cy.get('mat-option-text')
        
      })

    it('a', () => {

        
        //cy.get('#button-mission-step-info-next')
    })
});

