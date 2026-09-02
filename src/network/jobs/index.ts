import api from "../../api/axios";
import routes from "../routes";

export const jobs = async () => {
    try{
        const response = await api.get(routes.job.jobs);
        return response.data;
    }catch(error) {
        throw error;
    }
}