import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
// __dirname is available in commonjs and not ES6. This is the
//  work around.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connect to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//  Useful if frontend and backend are on separate origin
// http://localhost:3000
const whitelist = [
  "http://localhost:3000",
  "https://starktube.netlify.app",
  "https://yt-clone2.herokuapp.com",
];

app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (whitelist.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 8800, () => {
  connectDB();
  console.log("Server listening on 8800");
});
