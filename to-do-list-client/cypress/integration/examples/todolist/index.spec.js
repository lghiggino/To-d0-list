describe("visitante ve a home page", () => {
    it("e encontra text React-to-do-list", () => {
        cy.visit("http://localhost:3000")
        cy.contains("React-to-do-list")
    })
})