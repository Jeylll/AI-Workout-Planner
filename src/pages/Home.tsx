import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { user, isLoading } = useAuth();

    if (user && !isLoading) {
        return <Navigate to="/profile" replace />
    }

    return <div>Welcome to the Home Page</div>
}