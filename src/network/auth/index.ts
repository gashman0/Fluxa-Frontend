// import { resolve } from "path";
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
    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    console.log("CHECK AUTH START");

    const response = await api.get(routes.auth.checkAuth);

    console.log("REQUEST FINISHED", response);

    await sleep(10000);

    console.log("SLEEP FINISHED");

    return response.data;
}

// export const checkAuth = async () => {
//     console.log("CHECK AUTH START");

//     try {
//         const response = await api.get(routes.auth.checkAuth);

//         console.log("REQUEST FINISHED");

//         return response.data;
//     } catch (error) {
//         console.log("CHECK AUTH ERROR", error);
//         throw error;
//     }
// };