import api from "../../api/axios";
import routes from "../routes";

export const me = async () => {
    const response = await api.get(
        routes.dashboard.me
    );

    return response?.data;
}
