import axios from "axios";

export default function postAction(element, command, contains, commandOptions) {
  if (!localStorage.getItem("session_id")) {
    return;
  }
  axios
    .post("http://localhost:3001/postsessionaction", {
      params: {
        session_id: localStorage.getItem("session_id"),
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
