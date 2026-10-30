import { useQuery } from "@tanstack/react-query";
import { jobs } from ".";
import queryKeys from "../query-keys";
import type{ JobsResponse, JobsPayload } from "./types";

export const useJobs = ({page, limit}: JobsPayload) => {
    return useQuery<JobsResponse>({
        queryKey: [queryKeys.job.getJobs, page, limit],
        queryFn: () => jobs({page, limit}),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        
    })
}