import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute() {
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
        <Navigate to="/dashboard" replace />
    ) : (
        <Outlet />
    );
}

export default PublicRoute;