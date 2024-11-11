import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.projects[':projectId']["$patch"], 200>
type RequestType = InferRequestType<typeof client.api.projects[':projectId']["$patch"]>

export const useUpdateProject = () => {
    const queryClient = useQueryClient()
    const router = useRouter()

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async ({ form, param }) => {
            const response = await client.api.projects[':projectId']["$patch"]({ form, param })

            if (!response.ok) throw new Error("Failed to update project")

            return await response.json()
        },
        onSuccess: ({ data }) => {
            queryClient.invalidateQueries({ queryKey: ["projects"] })
            queryClient.invalidateQueries({ queryKey: ["project", data.$id] })
            toast.success("Project updated")
            router.refresh()
        },
        onError: () => {
            toast.error("Failed to update project")
        }
    })

    return mutation
}