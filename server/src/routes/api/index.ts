import { todoRouter } from "./todoRoutes/index";
import { Router } from "express";
const router = Router();

// router.use("/todos", todoRouter);

export { router as api };
