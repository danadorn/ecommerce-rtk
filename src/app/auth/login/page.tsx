import { LoginFormComponent } from '@/components/logins/LoginFormComponent'
import LoginWithGoogleComponent from '@/components/logins/LoginWithGoogle'
import LoginWithKeycloakComponent from '@/components/logins/LoginWithKeycloakComponent'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
        {/* <LoginFormComponent /> */}
        <LoginWithGoogleComponent />
        <LoginWithKeycloakComponent />

    </div>
  )
}
