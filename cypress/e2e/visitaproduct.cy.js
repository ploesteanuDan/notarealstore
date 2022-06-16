describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000");
    cy.get(".prodBtn1").click();
    cy.get(".select").contains("Sizes").click({ force: true });
    cy.get(".size").first().click();
    cy.get(".select").contains("Colors").click({ force: true });
    cy.get(".color").first().click();
    cy.get(".toPurchase").click({ force: true });
    cy.get('[href="/shoppingbag"] > .navLink > :nth-child(1) > svg').click();
    cy.get('[type="email"]').type("testdan@mail.com");
    cy.get('[placeholder="Name"]').type("Dan");
    cy.get('[placeholder="Surname"]').type("Ploesteanu");
    cy.get('[placeholder="City"]').type("Bucharest");
    cy.get('[placeholder="Adress"]').type("Popa Soare");
    cy.get('[placeholder="Adress (optional)"]').type("Nr. 64");
    cy.get(".button").click();
    cy.get('[href="/account"] > .navLink > p > svg').click();
    cy.get('[type="email"]').type("testdan@mail.com");
    cy.get('[type="password"]').type("123456");
    cy.get(".button").click();
  });
});
