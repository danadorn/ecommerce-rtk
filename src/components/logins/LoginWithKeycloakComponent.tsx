"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginWithKeycloakComponent() {
    async function handleKeycloakLogin() {
        await authClient.signIn.oauth2({
            providerId: "keycloak",
            callbackURL: `http://localhost:3000`,
        });
    }
    return (
        <div>
            <button onClick={handleKeycloakLogin} className="border p-4">
                Sign in with keycloak
            </button>
        </div>
    );
}
