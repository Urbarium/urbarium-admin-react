/* eslint-disable prefer-arrow-callback */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/// <reference types="Cypress" />

context('In /, Signin In', () => {

  beforeEach(function () {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.fixture('profile').as('profileData');
    cy.fixture('selectors').as('selectors');
    cy.fixture('messages').as('messages');
    cy.visit('/');
  });

  it('renders correctly', function () {
    const { login: { emailInput, passwordInput, submitBtn } } = this.selectors;
    const { login: { title, submitLabel } } = this.messages;
    cy.get('h1').should('have.text', title);
    cy.get(submitBtn).should('have.text', submitLabel);
    cy.get(emailInput).should('exist');
    cy.get(passwordInput).should('exist');
  });

  describe('with valid credentials', function () {
    it('signs in and renders Analytics Page', function () {
      const { email, password } = this.profileData;
      const { login: { emailInput, passwordInput, submitBtn } } = this.selectors;
      const { analytics: { title } } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', title);
    });
  });

  describe('with wrong password', function () {
    it('shows error', function () {
      const { email } = this.profileData;
      const password = 'bad password';
      const {
        login: {
          emailInput,
          passwordInput,
          submitBtn,
          signInForm,
        },
      } = this.selectors;
      const { login: { title, badPassword } } = this.messages;
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
        login: {
          emailInput,
          passwordInput,
          submitBtn,
          signInForm,
        },
      } = this.selectors;
      const { login: { title, badEmail } } = this.messages;
      cy.get(emailInput).type(email);
      cy.get(passwordInput).type(password);
      cy.get(submitBtn).click();
      cy.get('h1').should('have.text', title);
      cy.get(signInForm).contains(badEmail);
    });
  });
});
