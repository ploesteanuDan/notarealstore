import axios from "axios";

export default function postAction(element, command, contains, commandOptions) {
  axios
    .post("http://localhost:3001/postsessionaction", {
      params: {
        element: element,
        command: command,
        contains: contains,
        commandOptions: commandOptions,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// element: ".prodBtn1",
//     command: "click",
//     contains: "",
//     commandOptions: "",
