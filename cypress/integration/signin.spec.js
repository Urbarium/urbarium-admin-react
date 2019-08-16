/* eslint-disable prefer-arrow-callback */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/// <reference types="Cypress" />

context('In / path', () => {
  before(function () {
    cy.fixture('profile').as('profileData');
    cy.fixture('selectors').then((selectors) => {
      this.selectors = selectors.login;
    });
    cy.fixture('messages').then((messages) => {
      this.messages = messages.login;
      this.messages.analyticsTitle = messages.analytics.title;
    });
  });

  beforeEach(function () {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit('/');
  });

  describe('when rendered', function () {
    it('has a correct title', function () {
      const { title } = this.messages;
      cy.get('h1').should('have.text', title);
    });

    it('has a sign in button', function () {
      const { submitBtn } = this.selectors;
      const { submitLabel } = this.messages;
      cy.get(submitBtn).should('have.text', submitLabel);
    });

    it('has a email input', function () {
      const { emailInput } = this.selectors;
      cy.get(emailInput).should('exist');
    });

    it('has a password input', function () {
      const { passwordInput } = this.selectors;
      cy.get(passwordInput).should('exist');
    });
  });

  describe('with valid credentials', function () {
    it('signs in and renders Analytics Page', function () {
      const { email, password } = this.profileData;
      const { emailInput, passwordInput, submitBtn } = this.selectors;
      const { analyticsTitle } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', analyticsTitle);
    });
  });

  describe('with wrong password', function () {
    it('shows error', function () {
      const { email } = this.profileData;
      const password = 'bad password';
      const {
        emailInput,
        passwordInput,
        submitBtn,
        signInForm,
      } = this.selectors;
      const { title, badPassword } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', title);
      cy.get(signInForm).contains(badPassword);
    });
  });

  describe('with wrong email', function () {
    it('shows error', function () {
      const email = 'bademail@example.com';
      const password = 'bad password';
      const {
        emailInput,
        passwordInput,
        submitBtn,
        signInForm,
      } = this.selectors;
      const { title, badEmail } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', title);
      cy.get(signInForm).contains(badEmail);
    });
  });
});
