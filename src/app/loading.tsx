import Image from "next/image";

export default function Loading() {

    return (
        <div className=" mt-16 flex justify-center text-center items-center mx-auto my-auto ">

            <Image alt="loading" src="/load.svg" width='50' height="50" />
            <p className="mt-16">loading ...</p>

        </div>
    )
}