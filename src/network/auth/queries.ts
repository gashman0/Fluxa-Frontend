import { useQueryClient, useMutation } from "@tanstack/react-query";
import queryKeys from "../query-keys";
import type { signupPayload } from "./types";
import { signup } from ".";

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

