let actions = [];
import axios from "axios";
axios
  .get("http://localhost:3001/getsessions")
  .then((response) => {
    let temp = response.data;
    actions = response.data;
  })
  .catch((err) => {
    console.log(err);
  });

describe("made from user session", () => {
  it("passes", () => {
    //init session with small desktop size
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000");
    // for each action stored
    actions.forEach((action) => {
      if (action.commandOptions === "true") {
        action.commandOptions = { force: true };
      } else {
        action.commandOptions = { force: false };
      }
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

// const actions = [
//   {
//     element: ".prodBtn1",
//     command: "click",
//     contains: "",
//     commandOptions: "",
//   },
//   {
//     element: ".select",
//     command: "click",
//     contains: "Sizes",
//     commandOptions: { force: true },
//   },
//   {
//     element: ".size",
//     command: "click",
//     contains: "9.5 UK",
//     commandOptions: "",
//   },
//   {
//     element: ".select",
//     command: "click",
//     contains: "Colors",
//     commandOptions: { force: true },
//   },
//   {
//     element: ".color",
//     command: "click",
//     contains: "Yellow",
//     commandOptions: "",
//   },
// ];
