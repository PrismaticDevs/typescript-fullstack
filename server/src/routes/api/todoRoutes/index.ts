import { Router } from "express";
import { getAllTodos, createTodo } from "../../../controller/TodoController";
const router = Router();
// router.route("/todos").get(getAllTodos).post(createTodo);
export { router as todoRoutes };
