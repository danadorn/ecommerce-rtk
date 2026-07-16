import {betterAuth} from 'better-auth'
import {genericOAuth} from 'better-auth/plugins'
import {keycloak} from 'better-auth/plugins'
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    socialProviders:{
        google:{
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    },
    plugins: [
        genericOAuth({
            config: [
                keycloak({
          clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
          clientSecret: "",
          issuer: `${process.env.KEYCLOAK_ISSUER}`,
                    redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/oauth2/callback/keycloak`,
                    pkce: true,
        }),
            ]
        })
    ]

})