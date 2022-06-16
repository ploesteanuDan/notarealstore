describe("empty spec", () => {
  it("passes", () => {
    //init session with small desktop size
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000");
    //click on the first product cart -> goes to product page
    cy.get(".prodBtn1").click();
    //select the wanted size
    cy.get(".select").contains("Sizes").click({ force: true });
    cy.get(".size").first().click();
    //select the wanted color
    cy.get(".select").contains("Colors").click({ force: true });
    cy.get(".color").first().click();
    //click the purchase button -> adds to cart
    cy.get(".toPurchase").click({ force: true });
    //click the cart button -> goes to shopping cart page
    cy.get('[href="/shoppingbag"] > .navLink > :nth-child(1) > svg').click();
    //complete the inputs
    cy.get('[type="email"]').type("testdan@mail.com");
    cy.get('[placeholder="Name"]').type("Dan");
    cy.get('[placeholder="Surname"]').type("Ploesteanu");
    cy.get('[placeholder="City"]').type("Bucharest");
    cy.get('[placeholder="Adress"]').type("Popa Soare");
    cy.get('[placeholder="Adress (optional)"]').type("Nr. 64");
    //click the buy button -> order is created
    cy.get(".button").click();
    //click account button -> goes to login page
    cy.get('[href="/account"] > .navLink > p > svg').click();
    //complete the inputs
    cy.get('[type="email"]').type("testdan@mail.com");
    cy.get('[type="password"]').type("123456");
    //click log in button -> goes to account page
    cy.get(".button").click();
  });
});
