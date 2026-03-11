
import express, { Application } from "express";
import todoRouter from "./routes/todo.route";

export function createServerApplication(): Application {
  const app = express();

  app.use(express.json());
  app.use("/todo", todoRouter);

  return app;
}