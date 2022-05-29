import { sequelize } from "../config/config";
import { Model, UUID, DataTypes } from "sequelize";

type TodoAttributes = {
  id: any;
  todo: string;
  completed: boolean;
};

export class Todo extends Model<TodoAttributes> {
  declare id: string;
  declare todo: string;
  declare completed: boolean;
}
