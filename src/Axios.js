import axios from "axios";

const Axios = axios.create({
  baseURL: "https://yt-clone2.herokuapp.com/api",
});

export default Axios;
