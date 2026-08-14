import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-muted">
                    Loading...
                </div>
            </div>
        )
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;