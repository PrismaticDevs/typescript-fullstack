import { Router } from "express";
const router = Router();
const { createUser } = require("../../../controller/UserController");

// router.route("/").get(getAllUsers).post(createUser);

// router.route("/login").post(login);

router.route("/register").post(createUser);

// router.route("/:userId").get(getUserById);

// router.route("/logout").post(logout);

export const userRoutes = { router };
