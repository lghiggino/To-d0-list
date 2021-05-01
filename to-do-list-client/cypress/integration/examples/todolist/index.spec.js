describe("visitante ve a home page", () => {
    it("e encontra text React-to-do-list", () => {
        cy.visit("http://localhost:3000")
        cy.contains("React-to-do-list")
    })
})

describe('Visitante ve a home page', () => {
    it('clica login e navega para outra página', () => {
      cy.visit('http://localhost:3000')
      cy.contains('login').click()
  
      // Should be on a new URL which includes '/commands/actions' - como fazer isso num SPA?
      cy.url().should('include', '/commands/actions')
    })
})

describe('Visitante ve a home page', () => {
    it('clica list e navega para outra página', () => {
      cy.visit('http://localhost:3000')
      cy.contains('list').click()
  
      // Should be on a new URL which includes '/commands/actions' - como fazer isso num SPA? - esse modelo funciona para caminhos diferentes
      cy.url().should('include', '/commands/actions')
    })
})


//como testar o login e password?
describe('Visitante ve a home page', () => {
    it('clica login e navega para outra página', () => {
      cy.visit('http://localhost:3000')
      cy.contains('login').click()
  
      // Should be on a new URL which includes '/commands/actions' - como fazer isso num SPA?
      cy.url().should('include', '/commands/actions')
    })
})
  