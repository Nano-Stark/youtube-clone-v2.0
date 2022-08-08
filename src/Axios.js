import axios from "axios";

// http://localhost:8800
// https://yt-clone2.herokuapp.com/api
const Axios = axios.create({
  baseURL: "https://yt-clone2.herokuapp.com/api",
  withCredentials: true,
});

export default Axios;
