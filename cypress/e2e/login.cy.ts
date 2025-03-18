describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('button[type=submit]').as('submitButton');
    cy.get('input[placeholder="Email"]').as('emailField');
    cy.get('input[placeholder="Senha').as('passwordField');
  });

  it('should show required fields messages', () => {
    cy.get('@emailField').clear();
    cy.get('@passwordField').clear();
    cy.get('@submitButton').click();

    cy.contains('Email é obrigatório');
    cy.contains('Senha é obrigatória');
  });

  it('should show invalid email message', () => {
    cy.get('@emailField').type('admin');
    cy.get('@passwordField').type('123456');
    cy.get('@submitButton').click();

    cy.contains('Email inválido');
  });

  it('should show invalid password message', () => {
    cy.get('@emailField').type('admin');
    cy.get('@passwordField').type('1234');
    cy.get('@submitButton').click();

    cy.contains('Senha deve ter no mínimo 6 caracteres');
  });

  it('should navigate to the dashboard after login', () => {
    cy.get('@emailField').type('admin@email.com');
    cy.get('@passwordField').type('123456');
    cy.get('@submitButton').click();

    cy.url().should('include', '/dashboard');
  });

  it('should navigate to the signup page', () => {
    cy.get('#signup-button').click();

    cy.url().should('include', '/signup');
  });
});
