import api from "./axios";

export const getProjects = () => {
    return api.get("/projects");
};

export const createProject = (projectData) => {
    return api.post("/projects", projectData);
};

export const updateProject = (id, projectData) => {
    return api.put(`/projects/${id}`, projectData);
};

export const deleteProject = (id) => {
    return api.delete(`/projects/${id}`);
};