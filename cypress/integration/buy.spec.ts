/// <reference types="cypress" />

xdescribe('Shield Finance MCP buying process', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/buy/ETH')
  })

  it('allows the user to buy protection', () => {
    const offerContainer = cy.get('.offer-container')
    const offers = offerContainer.get('.offer')
    offers.should('have.length', 20)
  })

})
