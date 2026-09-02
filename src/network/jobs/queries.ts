import { useQuery } from "@tanstack/react-query";
import { jobs } from ".";
import queryKeys from "../query-keys";
import type{ JobsResponse } from "./types";

export const useJobs = () => {
    return useQuery<JobsResponse>({
        queryKey: [queryKeys.job.getJobs],
        queryFn: jobs,
    })
}