import { Router } from "express";
const router: Router = require("express").Router();
const api = require("./api");

router.use("/", api);

module.exports = router;
