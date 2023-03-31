// Cypress Spec

describe('First test Group', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('does not do much!', () => {
    cy.get('#email').type('Robertsonakpan@gmail.com')
    cy.get('#password').type('robert')
    cy.get('.text-md').click()
  })
})