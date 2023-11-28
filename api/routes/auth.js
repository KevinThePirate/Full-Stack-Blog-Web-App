import express from "express";
import { register, login, logout, testGet } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/", (req, res) => {
  res.json("authRoutes");
});

router.get("/testget", testGet)

export default router;