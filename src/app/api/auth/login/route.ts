import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest){
    try {
        const loginData = await req.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_ISHOP_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(loginData)
    })

    if(!res.ok){
        return NextResponse.json({message: "Unaothorized"}, {status:401})
    }
    const data = await res.json()

    const cookiesStore = await cookies()
    cookiesStore.set("better-auth.session_token", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "lax",
        path: "/"
    })
    return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
    
}