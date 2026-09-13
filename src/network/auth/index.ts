// import { resolve } from "path";
import api from "../../api/axios";
import routes from "../routes";
import type{ signupPayload, loginPayload, forgottenPasswordPayload } from "./types";

export const signup = async (payload: signupPayload) => {
    const response = await api.post(
        routes.auth.signup, payload
    );

    return response?.data;
}

export const login = async (payload: loginPayload) => {
    const response = await api.post(
        routes.auth.login, payload
    );

    return response?.data;
}

export const googleAuth = async(credential: string) => {
    const response = await api.post(
        routes.auth.google, { credential }
    );

    return response.data;
}

export const forgotPassword = async(payload: forgottenPasswordPayload) => {
    const response = await api.post(
        routes.auth.forgotPassword, payload
    );

    return response?.data;
}

export const logout = async () => {
    const response = await api.post(
        routes.auth.logout
    );

    return response?.data;
}

