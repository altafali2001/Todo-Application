
import { Router } from "express";
import TodoController from "../controllers/todo.controllers";

const router = Router();
const controller = new TodoController();

router.get("/", controller.handleGetAllTodos.bind(controller));
router.post("/", controller.handleInsertTodos.bind(controller));

export default router;