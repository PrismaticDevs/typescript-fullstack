import { Router } from "express";
const router: Router = require("express").Router();
const { createTask } = require("../../../controller/UserController");

router.route("/").post(createTask);
// .get(getAllTasks)
module.exports = router;
