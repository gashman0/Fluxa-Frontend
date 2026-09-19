import api from "../../api/axios";
import routes from "../routes";
import type{ FluxaProPayload } from "./types";

export const me = async () => {
    // const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
        const response = await api.get(routes.dashboard.me);
        // await sleep(10000);
        return response.data;
    } catch (error) {
        throw error;
    }
    
}

export const fluxa = async () => {
    const response = await api.post(
        routes.dashboard.fluxaPro,
    );

    return response?.data;
}
