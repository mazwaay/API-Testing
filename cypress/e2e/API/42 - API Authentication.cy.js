<<<<<<< HEAD
describe('Custom Commands', () => {
=======
describe('Basic Auth', () => {
>>>>>>> d45f513157e8710dbfdb320006111f254486d7b1
    it('Successfully login by appending username and password in URL', function () {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
<<<<<<< HEAD
=======

>>>>>>> d45f513157e8710dbfdb320006111f254486d7b1
    it('Successfully login using headers', function () {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
<<<<<<< HEAD
=======
 
>>>>>>> d45f513157e8710dbfdb320006111f254486d7b1
});