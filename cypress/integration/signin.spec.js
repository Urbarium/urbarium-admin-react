/* eslint-disable prefer-arrow-callback */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/// <reference types="Cypress" />

context('In / path', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.fixture('profile').as('profileData');
    cy.visit('/');
  });

  describe('when rendered', () => {
    it('has a correct title', () => {
      cy.get('h1').should('have.text', "Urbarium Login");
    });

    it('has a sign in button', () => {
      cy.get('button[type=submit]').should('have.text', "Submit");
    });

    it('has a email input', () => {
      cy.get('input[name=email]').should('exist');
    });

    it('has a password input', () => {
      cy.get('input[name=password]').should('exist');
    });
  });

  describe('with valid credentials', function () {
    it('signs in and renders Analytics Page', function () {
      const { email, password } = this.profileData;
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);
      cy.get('button[type=submit]').click();
      cy.get('h1').should('have.text', 'Analytics');
    });
  });

  describe('with wrong password', function () {
    it('shows error', function () {
      const { email } = this.profileData;
      const password = 'bad password';
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);
      cy.get('button[type=submit]').click();
      cy.get('h1').should('have.text', "Urbarium Login");
      cy.get('form').contains("The password is invalid or the user does not have a password.");
    });
  });

  describe('with wrong email', function () {
    it('shows error', function () {
      const email = 'bademail@example.com';
      const password = 'bad password';
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);
      cy.get('button[type=submit]').click();
      cy.get('h1').should('have.text', "Urbarium Login");
      cy.get('form').contains("There is no user record corresponding to this identifier. The user may have been deleted.");
    });
  });
});
