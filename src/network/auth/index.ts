import api from "../../api/axios";
import routes from "../routes";
import type{ signupPayload, loginPayload } from "./types";

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

export const logout = async () => {
    const response = await api.post(
        routes.auth.logout
    );

    return response?.data;
}

export const checkAuth = async () => {
    const response = await api.get(
        routes.auth.checkAuth,
    );

    return response?.data;
}