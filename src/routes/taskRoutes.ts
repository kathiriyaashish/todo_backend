import { Router } from "express";

import {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    markComplete,
    getTaskById
} from "../controllers/taskController";

const router = Router();

router.post("/", createTask);

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.patch(
    "/:id/complete",
    markComplete
);

export default router;