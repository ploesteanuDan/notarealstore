import axios from "axios";
import version from "../config/version.json";

version = version.version;

export default function postSession() {
  if (version !== "staging") {
    console.log("sessions disabled in development mode");
    console.log(version);
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
