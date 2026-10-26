/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
 Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBookWithFavorite", (title, authors) => {
  cy.contains("Add new").click();
  cy.get('[name="title"]').type(title);
  cy.get('[name="authors"]').type(authors);
  cy.get('[name="favorite"]').click();
  cy.get("button.btn-success.ml-2").click();
});

Cypress.Commands.add("addNewBook", (title, authors) => {
  cy.contains("Add new").click();
  cy.get('[name="title"]').type(title);
  cy.get('[name="authors"]').type(authors);
  cy.get("button.btn-success.ml-2").click();
});

Cypress.Commands.add("addToFavoriteFromMain", (title) => {
  cy.contains(".mt-3", title).find(".btn-success", "Add to favorite").click();
});

Cypress.Commands.add("deleteABookFromFavorites", (title) => {
  cy.contains(".mt-3", title)
    .find(".btn-secondary", "Delete from favorite")
    .click();
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }