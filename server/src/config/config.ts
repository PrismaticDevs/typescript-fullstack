import "dotenv/config";
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});
