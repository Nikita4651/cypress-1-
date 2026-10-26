beforeEach(() => {
  cy.visit("/");
});

describe("template spec", () => {
  it("Shold login", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com")
      .should("be.visible")
      .should("not.be.disabled");
    cy.contains("Log out").should("be.visible");
  });

  it.skip("Shold invalid login", () => {
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Shold invalid pass", () => {
    cy.login("test@test.com", "");
    // cy.contains("Неверный адрес электронной почты или пароль").should('exist')
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});

describe("Favorites and Add a Book tests", () => {
  beforeEach(() => {
    cy.login("test@test.com", "test");
  });

  it("Should add in Favorites book", () => {
    cy.addNewBookWithFavorite("Дом странных детей", "Ренсом Риггз");
    cy.contains("Favorites").click();
    cy.contains("Дом странных детей").should("be.visible");
  });

  it("Should add to Favorites", () => {
    cy.addNewBook("Шестерка воронов", "Ли Бардуго");
    cy.addToFavoriteFromMain("Шестерка воронов");
    cy.contains("Favorites").click();
    cy.contains(".mt-3", "Шестерка воронов").should("be.visible");
    cy.deleteABookFromFavorites("Шестерка воронов");
  });

  it("Should delete from Favorites", () => {
    cy.addNewBookWithFavorite("Зеленая миля", "Стивен Кинг");
    cy.contains("Favorites").click();
    cy.deleteABookFromFavorites("Зеленая миля");
    cy.contains(".mt-3", "Зеленая миля").should("not.exist");
  });
});
