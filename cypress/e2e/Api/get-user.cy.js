describe('Get User List', () =>{
    it("Verify the list users will displayed", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal',200)
    });

    it("Verify the list users will displayed 2", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?=2&=1&=3'
        }).as('users')
        cy.get('@users').its('status').should('equal',200)
    });
    
})