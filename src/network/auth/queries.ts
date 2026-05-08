import { useQueryClient, useMutation } from "@tanstack/react-query";
import queryKeys from "../query-keys";
import type { signupPayload, loginPayload } from "./types";
import { signup, login } from ".";

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

