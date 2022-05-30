import { Request, Response } from "express";
import { DataTypes } from "sequelize/types";
import { Todo } from "../models/Todo";

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll();
  res.json(todos);
};
export const createTodo = async (req: Request, res: Response) => {
  const { todo, completed } = req.body;
  await Todo.create({
    id: DataTypes.UUID,
    todo: todo,
    completed: completed,
  });
};
