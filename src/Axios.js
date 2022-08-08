import axios from "axios";

// https://yt-clone2.herokuapp.com/api
const Axios = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default Axios;
