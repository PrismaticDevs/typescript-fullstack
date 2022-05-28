import { Request, Response } from "express";
import Todo from "../models/Todo";

module.exports = {
  createTodo: async (req: Request, res: Response) => {
    Todo.create();
  },
};
