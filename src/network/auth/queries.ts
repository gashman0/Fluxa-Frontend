import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import queryKeys from "../query-keys";
import type { signupPayload, loginPayload } from "./types";
import { signup, login, checkAuth, logout } from ".";

export const useSignup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:(payload: signupPayload) => signup(payload),
        onSuccess: () => {
            console.log("Signup was successful");
        },
        onError: () => {
            console.log("There was error");
        }

    })
}

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: loginPayload) => login(payload),
        
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: queryKeys.users.getMe})
        }
    });
}

export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => logout(),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: queryKeys.auth.checkAuth});
            navigate('/')
        }
    })
}

export const useCheckAuth = () => {
    return useQuery({
        queryKey: queryKeys.auth.checkAuth,
        queryFn: checkAuth,
        retry: false,
    })
}

