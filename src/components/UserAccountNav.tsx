'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { User } from "@/payload-types"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"


const UserAccountNav = ({ user }: { user: User }) => {
    const { signOut } = useAuth()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="overflow-visible ">
                <Button className="relative" variant="ghost" size="sm">My Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-60" align="end">
                <div className="flex items-center justify-start gap-2 p-2 ">
                    <div className="flex flex-col space-y-0.5 leading-none">

                        <p className="font-medium text-sm text-black">
                            {user.email}
                        </p>
                    </div>
                </div>
                <DropdownMenuSeparator />

                <DropdownMenuItem  >
                    <Link href="/sell">Seller Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                    <Link href="/sign-out" className="text-[#fa2f2fe3] font-extrabold hover:text-[#f11]">Sign Out &rarr;</Link>
                </DropdownMenuItem>


                <DropdownMenuItem> </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav