import React from 'react'
import MaxWidthWrapper from '../Sub/MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'

const Hero = () => {
    return (
        <MaxWidthWrapper>
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
                <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">Your Marketplace for high-Quality
                    <span className="text-blue-600"> Digital Asseyts</span>
                </h1>
                <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim eaque odio similique reprehenderit quis vel sed expedita commodi vero.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
                    <Button variant='ghost' className="">Our Quality Promise &rarr;</Button>
                </div>
            </div>
            {/* todo: list product */}
        </MaxWidthWrapper>
    )
}

export default Hero