import express from "express";
import { createProject, getProjects, updateProject,deleteProject } from "../controllers/project.controller.js";

const router = express.Router();

router
    .route("/")
    .post(createProject)
    .get(getProjects);

router
    .route("/:id")
    .put(updateProject)
    .delete(deleteProject);


export default router;