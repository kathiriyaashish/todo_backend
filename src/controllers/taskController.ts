import { Request, Response } from "express";
import Task from "../models/Task";

export const createTask = async (
  req: Request,
  res: Response
) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTasks = async (
  req: Request,
  res: Response
) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response
) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const markComplete = async (
  req: Request,
  res: Response
) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        status: "Completed",
      },
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTaskById = async (
    req: Request,
    res: Response
) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res
                .status(404)
                .json({ message: "Task not found" });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};