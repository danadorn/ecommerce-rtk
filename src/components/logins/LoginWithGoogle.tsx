"use client"

import { authClient } from "@/lib/auth-client";

export default function LoginWithGoogleComponent() {
    const handleSignInWithGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: `http://localhost:3000`,
        });
        console.log(data);
    };
    return (
        <div>
            <button onClick={handleSignInWithGoogle} className="border p-4">
                Sign in with google
            </button>
        </div>
    );
}
