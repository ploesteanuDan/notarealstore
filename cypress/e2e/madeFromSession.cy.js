const actions = [
  {
    element: ".prodBtn1",
    command: "click",
    contains: "",
    commandOptions: "",
  },
  {
    element: ".select",
    command: "click",
    contains: "Sizes",
    commandOptions: { force: true },
  },
  {
    element: ".size",
    command: "click",
    contains: "9.5 UK",
    commandOptions: "",
  },
  {
    element: ".select",
    command: "click",
    contains: "Colors",
    commandOptions: { force: true },
  },
  {
    element: ".color",
    command: "click",
    contains: "Yellow",
    commandOptions: "",
  },
];

describe("made from user session", () => {
  it("passes", () => {
    //init session with small desktop size
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000");
    actions.forEach((action) => {
      if (action.contains) {
        cy.get(action.element)
          .contains(action.contains)
          [action.command](action.commandOptions);
      } else {
        cy.get(action.element)[action.command](action.commandOptions);
      }
    });
  });
});
