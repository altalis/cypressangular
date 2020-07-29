/// <reference types="cypress" />

import Chance from 'chance';
const chance =  new Chance();

context('SampleTest', () => {

  const email = chance.email();
  const password = 'admin123';

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Cypressangular login error', () => {

    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });

  it('Cypressangular login valid', () => {

    cy.get('input[name=email]').type('cypress@test.com');
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });

})
