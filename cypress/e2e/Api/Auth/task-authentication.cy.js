describe('GET AUTH',()=>{
    it('success', function () {
        cy.loginViaAPI('test123@gmail.com','test123')
    });
})