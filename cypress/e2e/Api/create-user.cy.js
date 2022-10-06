describe('Get User List', () =>{
    it('Succesfully create user', () => {
        cy.request('POST', 'https://reqres.in/api/users', { name: 'Jane', job: 'bebek' }).then((response) => {
            expect(response.body).to.have.property('name', 'Jane', 'job', 'bebek') // true
  })
        // cy.request({
        //     method: 'POST',
        //     url: 'https://reqres.in/api/users'
        // }).then((response)=>{
        //     expect(response.status).equal(201)
        //     var user = {
        //         "name": "dodo",
        //         "job": "bebek"
        //     }
         
        //  cy.request('POST','https://reqres.in/api/users', user).then((response)=>{
        //      expect(response.status).equal(201)
            
        // })
    });
});
