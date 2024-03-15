import { Loader } from "lucide-react";
import Image from "next/image";

export default function Loading() {

    return (
        <div className=" mt-32 h-screen flex justify-center text-center items-center mx-auto my-auto ">

            <Loader className='h-10 w-10 animate-spin text-muted-foreground' />


        </div>
    )
}