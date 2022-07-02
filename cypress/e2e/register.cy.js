import { faker } from "@faker-js/faker";

import mockUsers from "../mock/mockUsers.json";

mockUsers.data.forEach((user) => {
  describe("register with random data", () => {
    // for (let i = 0; i < i; i++) {
    it("passes", () => {
      cy.visit("http://localhost:3000/register");
      cy.get('[placeholder="Email"]').type(user.email);
      cy.get('[placeholder="Name"]').type(user.name);
      cy.get('[placeholder="Surname"]').type(user.surname);
      cy.get('[placeholder="Password"]').type(user.password);
      cy.get(".button").click();
      cy.on("window:alert", (t) => {
        //assertions
        throw new Error(t);
      });
    });
    // }
  });
});
