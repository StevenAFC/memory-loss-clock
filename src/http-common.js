import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_REALM_URI,
  headers: {
    "Content-type": "application/json",
  },
});
