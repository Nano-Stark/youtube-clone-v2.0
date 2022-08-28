import axios from "axios";

//  I hosted my server on heroku
// const Axios = axios.create({
//   baseURL: "https://yt-clone2.herokuapp.com/api",
//   withCredentials: true,
// });

//  i already shifted my front end as static folder to nodejs on heroku
//  i don't require starktube.netlify.app as heroku does not support access token
//  REBUILD the frontend if their is another hosting server which supports cookies
//  unlike heroku to the above axios configuration.
const Axios = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default Axios;
