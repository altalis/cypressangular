/// <reference types="cypress" />

import Chance from 'chance';
const chance =  new Chance();

context('SampleTest', () => {

  const email = chance.email();
  const pass = 'ValidPassword123';

  beforeEach(() => {
    // cy.visit('https://google.com')
    cy.visit('https://localhost:4200')
  })

  it('has a title', () => {
    cy.contains('');
  });

})
