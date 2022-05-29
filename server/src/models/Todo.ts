import { sequelize } from "../config/config";
import { Model } from "sequelize";

type TodoAttributes = {
  id: number;
  todo: string;
  completed: boolean;
};

export class Todo extends Model<TodoAttributes> {
  declare id: string;
  declare todo: string;
  declare completed: boolean;
}
