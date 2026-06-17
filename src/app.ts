import express, { Request, Response } from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/tasks",
    taskRoutes
);

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server Is Running"
    });
});

export default app;