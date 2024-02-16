"use client"

import dotenv from 'dotenv'
import { useRouter } from 'next/navigation'
import path from 'path'
import { toast } from 'sonner'

dotenv.config({
    path: path.resolve(__dirname, '../.env.local'),
})

export const useAuth = () => {
    const router = useRouter()

    const signOut = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!res.ok) throw new Error()
            toast.success('You have been signed out')
            router.push('/sign-in')
            router.refresh()
        } catch (err) {
            toast.error("Counl't Sign Out, please try again")

        }
    }
    return { signOut }
}