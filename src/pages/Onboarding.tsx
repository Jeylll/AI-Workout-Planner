import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../context/AuthContext";

export default function Onboarding() {
    const { user } = useAuth();

    if (!user) {
        return <RedirectToSignIn />;
    }

    return (
        <SignedIn>
            <div className="min-h-screen pt-24 pb-12 px-6">
                <div className="max-w-xl mx-auto">

                </div>
            </div>
        </SignedIn>
    )
}