import axios from "axios";
import version from "../config/version.json";
import isElectron from "../handlers/isElectron";
let appVersion = version.version;

export default function postSession() {
  if (appVersion !== "staging") {
    console.log("sessions disabled in development mode");
    return;
  }
  if (isElectron) {
    return;
  }
  axios
    .post("http://localhost:3001/postsession", null, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt_token"),
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
