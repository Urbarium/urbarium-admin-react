/* eslint-disable prefer-arrow-callback */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/// <reference types="Cypress" />

context('In Home Page, Signing Out', () => {
  before(function () {
    cy.fixture('profile').as('profileData');
    cy.fixture('selectors').as('selectors');
    cy.fixture('messages').as('messages');
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
  });

  beforeEach(function () {
    cy.visit('/').then(function () {
      const { email, password } = this.profileData;
      const { login: { emailInput, passwordInput, submitBtn } } = this.selectors;
      const { analytics: { title } } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', title);
    });
  });

  describe('when clicking the logout button', function () {
    it('Signs Out', function () {
      const { globalNav: { logoutBtn } } = this.selectors;
      cy.get(logoutBtn).click();
    });
  });
});
