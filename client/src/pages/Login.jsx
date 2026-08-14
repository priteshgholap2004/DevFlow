import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await loginUser(formData);

            login(
                response.data.data,
                response.data.token
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message ||
                "Login failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-xl space-y-6 "
            >

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">
                        DevFlow
                    </p>

                    <h1 className="text-3xl font-bold text-white">
                        Login
                    </h1>

                    <p className="text-muted">
                        Sign in to continue managing your workspace.
                    </p>

                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white placeholder:text-muted outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white placeholder:text-muted outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>

        </div>
    );
}

export default Login;