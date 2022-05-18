/// <reference types="cypress" />

describe('Login', () => {
    
    it('Sucesso', () => {
        cy.login()

        //Verificar se existe uma classe que contem o texto qa-user-avatar
        cy.get('.qa-user-avatar').should('exist')
    })
})