/** Routes for Tasks. */

// const jsonschema = require("jsonschema");
import { Router } from "express";
import {
  createTask,
  getTaskDetails,
  getTasks,
} from "../controllers/task.controller.js";

const router = new Router();

// get all tasks matching search query params
router.get("/", getTasks);

// get single task with task ID
router.get("/task-details", getTaskDetails);

// create Task with optional Assignment
router.post("/", createTask);

export default router;