describe('Update user', () => {
    it('successfully to update data', () => {
        var newUser = {
            "name": 'Wahyu',
            "job": 'QA Engineering Manager'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.job).to.eq(newUser.job)
        })
    })
 
});