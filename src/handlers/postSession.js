import axios from "axios";
import version from "../config/version.json";
import isElectron from "../handlers/isElectron";
version = version.version;

export default function postSession() {
  if (!localStorage.getItem("session_id")) {
    return;
  }
  if (version !== "staging") {
    console.log("sessions disabled in development mode");
    return;
  }
  if (isElectron) {
    return;
  }
  axios
    .post("http://localhost:3001/postsession", null, {
      params: {
        user_id: localStorage.getItem("user_id"),
      },
    })
    .then((response) => {
      console.log("session_id", response.data.session_id);
      localStorage.setItem("session_id", response.data.session_id);
    })
    .catch((err) => {
      console.log(err);
    });
}
