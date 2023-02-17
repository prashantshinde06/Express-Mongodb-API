import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { dbConnection } from "./dbconn/dbconn";
import { router } from "./routes/routes";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

dbConnection();


