describe('get api', () => {
    it('API TEST - Validate Header', () => {
        cy.request('https://airportgap.dev-tester.com/api/airports/KIX?').as('air-flight')
        cy.get('@air-flight')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json; charset=utf-8')
      })
     
});