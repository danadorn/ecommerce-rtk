import { int } from "zod";

export interface loginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    accessToken: string;
    refreshToken?: string;
}