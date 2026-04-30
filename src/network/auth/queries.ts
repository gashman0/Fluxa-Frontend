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
    return useMutation({
        mutationFn: (payload: loginPayload) => login(payload),
        onSuccess: () => {
            console.log("Login successful");
        },
        onError: () => {
            console.log("Login failed");
        }
    })
}

