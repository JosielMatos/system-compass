import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const users = require("./users.json");
const posts = require("./posts.json");

app.get(
  "/api/v1/user",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send(JSON.stringify(users));
  }
);

app.get(
  "/api/v1/user/post",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send(JSON.stringify(posts));
  }
);

app.listen(port, (): void => {
  console.log(`Connected successfully on port ${port}`);
});
