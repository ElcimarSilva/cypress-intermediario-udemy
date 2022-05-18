/// <reference types="cypress" />

describe('logout', () => {
    beforeEach(() => cy.login())
    it('Sucesso', () => {
        cy.logout()
        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})