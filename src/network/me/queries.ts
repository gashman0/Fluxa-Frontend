import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { me, fluxa } from ".";
import queryKeys from "../query-keys";
import type{ MeResponse, FluxaProPayload } from "./types";

export const useMe = () => {
    return useQuery<MeResponse>({
        queryKey: [queryKeys.users.getMe],
        queryFn: me,
        retry: false,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });

}

export const useFluxaPro = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => fluxa(),

        onSuccess: () => {
            console.log("Payment Initiated successfully ");
            
        },

        onError: () => {
            console.log("There was an error")
        },
    })
}