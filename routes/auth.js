import express from "express";
import { register, signin } from "../controllers/auth.js";

const router = express.Router();

// CREATE USER
router.post("/register", register);
//SIGN IN
router.post("/signin", signin);
//GOOGLE AUTH_ROUTES
// router.post("/google", googleAuth);

export default router;
