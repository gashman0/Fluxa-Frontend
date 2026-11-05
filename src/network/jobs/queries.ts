import { useQuery } from "@tanstack/react-query";
import { jobs } from ".";
import queryKeys from "../query-keys";
import type{ JobsResponse, JobsPayload } from "./types";

export const useJobs = ({page, limit, search = ""}: JobsPayload) => {
    return useQuery<JobsResponse>({
        queryKey: [queryKeys.job.getJobs, page, limit, search],
        queryFn: () => jobs({page, limit, search}),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        
    })
}