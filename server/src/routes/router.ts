import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("blah");
});
router.get("/todos", (req, res) => {
  res.send("todos");
});

export { router };
