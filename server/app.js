import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects",projectRoutes);
app.use("/api/auth",authRoutes);

app.get("/",(req,res) => {
    res.json({
        success: true,
        message: "DevFlow API is running",
    });
});

export default app;