import { Router } from "express";
import { getAllTodos } from "../../../controller/TodoController";
const router = Router();
const todoRouter = router.route("/todos").get(getAllTodos);
export { todoRouter };
