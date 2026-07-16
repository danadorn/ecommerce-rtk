import { loginData, LoginResponse } from "./type/login-type";

export async function loginAdmin(loginData: loginData): Promise<LoginResponse> {
    try {
        const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(loginData)
    })

    const data = await res.json()
    if (!res.ok) 
        throw new Error(data.message)
        return data;
    
    } catch(err) {
        throw err;
    }
    
} 