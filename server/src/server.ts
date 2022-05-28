import express from "express";
import bodyParser from "body-parser";

const db = require("./config");
db.sync().then(() => console.log("typescript todos database connected"));

const PORT = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
