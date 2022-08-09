import axios from "axios";

const Axios = axios.create({
  baseURL: "https://yt-clone2.herokuapp.com/api",
  withCredentials: true,
});

// const Axios = axios.create({
//   baseURL: "http://localhost:8800/api",
//   withCredentials: true,
// });

export default Axios;
