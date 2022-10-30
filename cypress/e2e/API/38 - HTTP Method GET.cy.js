describe('GET USER LIST', () => {
    it("verify the list users will displayed - by using pages", () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?pages=2'
            }).as('users-pages')
            cy.get('@users-pages').its('status').should('equal', 200)
    });

    it("verify the list users will displayed - by using per_pages", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?per_pages=1'
        }).as('users-per_pages')
        cy.get('@users-per_pages').its('status').should('equal', 200)
    });

    it("verify the list users will displayed - by using delay", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3'
        }).as('users-delay').its('status').should('equal', 200)
    });
});