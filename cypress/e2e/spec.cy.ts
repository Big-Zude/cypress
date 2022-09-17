describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('signs up a new user', () => {
    cy.findByTestId('firstname').type('Big-Zude').should('be.visible')
    cy.findByTestId('lastname').type('cypress Article').should('be.visible')
    cy.findByTestId('email').type('zudemwango86@gmail.com').should('be.visible')
    cy.findByTestId('password').type('12345678').should('be.visible')
    cy.findByTestId('male').click().should('be.visible')
    cy.findByTestId('country').click().should('be.visible')
    cy.findByTestId('usa').click().should('be.visible')
  })
})