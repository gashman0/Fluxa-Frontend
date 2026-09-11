import { useQuery } from "@tanstack/react-query";
import { jobs } from ".";
import queryKeys from "../query-keys";
import type{ JobsResponse } from "./types";

export const useJobs = () => {
    return useQuery<JobsResponse>({
        queryKey: [queryKeys.job.getJobs],
        queryFn: jobs,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        
    })
}