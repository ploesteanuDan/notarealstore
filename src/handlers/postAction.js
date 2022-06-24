import axios from "axios";
import version from "../config/version.json";

let appVersion = version.version;

export default function postAction(element, command, contains, commandOptions) {
  if (!localStorage.getItem("session_id")) {
    return;
  }
  if (appVersion !== "staging") {
    console.log("sessions actions disabled in development mode");
    return;
  }
  axios
    .post("http://localhost:3001/postsessionaction", null, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt_token"),
      },
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
