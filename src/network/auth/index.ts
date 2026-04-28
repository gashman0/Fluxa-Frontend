import { data } from "react-router-dom";
import api from "../../api/axios";
import routes from "../routes";
import type{ signupPayload } from "./types";

export const signup = async (payload: signupPayload) => {
    const response = await api.post(
        routes.auth.signup, payload
    );

    return response?.data;
}