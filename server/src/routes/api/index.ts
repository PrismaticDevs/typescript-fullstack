import { todoRoutes } from "./todoRoutes/index";
import { Router } from "express";
const router = Router();

router.use("/todos", todoRoutes);
// router.get("/todos", (req, res) => {
//   res.send("new todo test");
// });

export { router as api };
