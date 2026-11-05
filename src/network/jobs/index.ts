import api from "../../api/axios";
import routes from "../routes";
import type { JobsPayload } from "./types";

export const jobs = async ({page, limit, search = ""}: JobsPayload) => {
    try{
        const response = await api.get(routes.job.jobs, {
            params: {page, limit, search}
        });
        return response.data;
    }catch(error) {
        throw error;
    }
}