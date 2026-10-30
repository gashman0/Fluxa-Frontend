import api from "../../api/axios";
import routes from "../routes";
import type { JobsPayload } from "./types";

export const jobs = async ({page, limit}: JobsPayload) => {
    try{
        const response = await api.get(routes.job.jobs, {
            params: {page, limit}
        });
        return response.data;
    }catch(error) {
        throw error;
    }
}