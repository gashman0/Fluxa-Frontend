import api from "../../api/axios";
import routes from "../routes";

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
