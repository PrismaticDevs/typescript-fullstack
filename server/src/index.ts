import { log } from "console";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { TaskController } from "./controller/task-controller";
import { Task } from "./model/task";

const PORT = 3001;
const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));

const taskController: TaskController = new TaskController();

app.get("/", (req: Request, res: Response) => {
  return res.send(taskController.tasks);
});

app.post("/", (req: Request, res: Response) => {
  const { name, completed } = req.body;
  const task: Task = taskController.createTask(name, completed);
  return res.send(task);
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
