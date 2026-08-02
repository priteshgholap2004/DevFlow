import express from "express";
import protect from "../middleware/auth.middleware.js";
import { createProject, getProjects, updateProject,deleteProject } from "../controllers/project.controller.js";

const router = express.Router();

router
    .route("/")
    .post(protect, createProject)
    .get(protect,getProjects);

router
    .route("/:id")
    .put(protect,updateProject)
    .delete(protect,deleteProject);


export default router;