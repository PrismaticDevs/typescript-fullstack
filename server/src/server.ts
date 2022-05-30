import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./config/config";
import { router } from "./routes/router";

const PORT = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

sequelize.sync({ force: false });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
