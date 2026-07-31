import Modal from "../../../components/ui/Modal";
import { useState, useEffect } from "react";

function CreateProjectModal({
    open,
    onClose,
    onCreateProject,
    onUpdateProject,
    selectedProject,
}) {

    const initialFormData = {
        name: "",
        description: "",
        status: "Active",
        dueDate: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (selectedProject) {
            setFormData({
                name: selectedProject.name,
                description: selectedProject.description,
                status: selectedProject.status,
                dueDate: selectedProject.dueDate
                    ? selectedProject.dueDate.split("T")[0]
                    : "",
            });

            setErrors({});
        } else {
            setFormData(initialFormData);
            setErrors({});
        }
    }, [selectedProject]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const isEditMode = selectedProject !== null;

    const isFormValid =
        formData.name.trim() &&
        formData.description.trim() &&
        formData.dueDate;

    const handleSubmit = () => {
        if (!validateForm()) return;

        if (isEditMode) {
            onUpdateProject({
                ...selectedProject,
                ...formData,
            });
        } else {
            onCreateProject(formData);
        }

        setFormData(initialFormData);

        setErrors({});

        onClose();
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Project name is required.";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Description is required.";
        }

        if (!formData.dueDate) {
            newErrors.dueDate = "Due date is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div
                className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border p-6">
                    <div>
                        <h2 className="text-xl font-semibold text-text">
                            {isEditMode ? "Edit Project" : "Create New Project"}
                        </h2>

                        <p className="mt-1 text-sm text-muted">
                            {isEditMode
                                ? "Update the project details."
                                : "Fill in the project details below."}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-background"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="space-y-5 p-6">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-text">
                            Project Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter project name"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder:text-muted outline-none focus:border-primary"
                        />

                        {errors.name && (
                            <p className="mt-2 text-sm text-danger">
                                {errors.name}
                            </p>
                        )}

                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-text">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Describe your project..."
                            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-text placeholder:text-muted outline-none focus:border-primary"
                        />

                        {errors.description && (
                            <p className="mt-2 text-sm text-danger">
                                {errors.description}
                            </p>
                        )}

                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-text">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder:text-muted outline-none focus:border-primary"
                            >
                                <option value="Active">Active</option>
                                <option value="Review">Review</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-text">
                                Due Date
                            </label>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder:text-muted outline-none focus:border-primary"
                            />

                            {errors.dueDate && (
                                <p className="mt-2 text-sm text-danger">
                                    {errors.dueDate}
                                </p>
                            )}

                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-border p-6">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-border px-5 py-2.5 transition hover:bg-background text-text"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={!isFormValid}
                        className={`rounded-xl px-5 py-2.5 text-white transition
                            ${isFormValid
                                ? "bg-primary hover:opacity-90"
                                : "cursor-not-allowed bg-primary/50"
                            }`}
                    >
                        {isEditMode ? "Save Changes" : "Create Project"}
                    </button>

                </div>
            </div>

        </Modal >
    );
}

export default CreateProjectModal;