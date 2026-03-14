import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function Profile() {
    const { user, isLoading, plan } = useAuth();

    if (!user && !isLoading) {
        return <Navigate to="/auth/sign-in" replace />
    }
    
    if (!plan) {
        return <Navigate to="/onboarding" replace />
    }

    return (
        <div></div>
    )
}