import Image from "next/image";

export default function Loading() {

    return (
        <div className=" mt-32 h-screen flex justify-center text-center items-center mx-auto my-auto ">

            <Image alt="loading" src="/load.svg" width='300' height="300" />


        </div>
    )
}