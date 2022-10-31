describe('POST', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Wahyu',
            "job": 'QA Engineer'
        } 
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'Wahyu')
            expect(response.body).to.have.property('job', 'QA Engineer')
        })
    })
 
});