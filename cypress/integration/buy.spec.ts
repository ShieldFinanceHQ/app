/// <reference types="cypress" />
import { User } from '../support/User'

xdescribe('Shield Finance MCP buying process', () => {
  let alice

  beforeEach(() => {
    alice = new User(cy)
    alice.open()
    cy.visit('http://localhost:3000/')
  })

  it('allows the user to buy protection', () => {
    alice.notice('Market Crash Protection')
    alice.notice(`
      Market Crash Protection is a stop-loss for DeFi.
      
      With Market Crash Protection, you can receive compensation if your portfolio takes a nosedive.
      
      To receive compensation, you need to buy protection through this application:
      
      1. Choose which token / coin you want to protect.
      1. Choose what amount of token / coin you want to protect.
      1. Click "Show offers".
    `)
  })

})
