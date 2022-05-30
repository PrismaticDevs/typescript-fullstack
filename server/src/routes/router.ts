import { Router } from "express";
import { todoRouter } from "./api/todoRoutes";
const router = Router();

router.get("/", (req, res) => {
  res.send("blah");
});
router.get("/todos", (req, res) => {
  res.send();
});

export { router };
