describe('Api Exmple', () => {
    it("API Test - Validate Header", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'Application/json; charset=utf-8')
    });
})