import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.members[":memberId"]["$patch"], 200>
type RequestType = InferRequestType<typeof client.api.members[":memberId"]["$patch"]>

export const useUpdateMember = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async ({ param, json }) => {
            const response = await client.api.members[":memberId"]["$patch"]({ param, json })

            if (!response.ok) throw new Error("Failed to udpate member")

            return await response.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["members"] })
            toast.success("Member udpated")
        },
        onError: () => {
            toast.error("Failed to udpate member")
        }
    })

    return mutation
}