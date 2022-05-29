import { Request, Response } from "express";
import { UUIDV4 as UUID, DataTypes } from "sequelize/types";
import { Todo } from "../models/Todo";

module.exports = {
  createTodo: async (req: Request, res: Response) => {
    const { todo, completed } = req.body;
    // await Todo.create({
    //   id: DataTypes.UUIDV4,
    //   todo,
    //   completed,
    // });
  },
};

// this is a test
