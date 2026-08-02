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
        <div className="flex min-h-screen items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border p-8"
            >

                <h1 className="text-2xl font-bold">
                    Login
                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-blue-600 p-3 text-white"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>

        </div>
    );
}

export default Login;