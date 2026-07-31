import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["Active", "Review", "Completed"],
            default: "Active",
        },

        dueDate: {
            type: Date,
            required: true,
        },

        progress: {
            type: Number,
            default: 0,
        },

        tasks: {
            type: Number,
            default: 0,
        },

        members: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;