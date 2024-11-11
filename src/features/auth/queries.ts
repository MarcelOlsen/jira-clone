import { cookies } from "next/headers"
import { Account, Client } from "node-appwrite"

import { createSessionClient } from "@/lib/appwrite"

import { AUTH_COOKIE } from "./constants"

export const getCurrent = async () => {
    try {
        const { account } = await createSessionClient()

        return await account.get()
    } catch {
        return null
    }
}