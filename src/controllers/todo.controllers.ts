
import type { Request, Response } from "express";
import { todoValidationSchema, type Todo } from "../models/todo.schema";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async handleInsertTodos(req: Request, res: Response) {
    try {
      const unvalidated = req.body;

      const validationResult =
        await todoValidationSchema.parseAsync(unvalidated);

      this._db.push(validationResult);

      return res.status(201).json({ todo: validationResult });

    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default TodoController;