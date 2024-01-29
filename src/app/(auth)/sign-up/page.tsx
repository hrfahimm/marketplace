'use client'
import { Icons } from '@/components/Sub/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


const Page = () => {


    const AuthCredentialsValidator = z.object({
        email: z.string().email(),

        password: z.string().min(8, { message: 'Password Must 8 charector' }),
    });


    type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({ resolver: zodResolver(AuthCredentialsValidator), })



    // const onSubmit: SubmitHandler<TAuthCredentialsValidator> = (data) => console.log(data)

    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
        console.log({ email, password })
        //srnd data to server

        
    }

    return (
        <>
            <div className="container flex relative pt-20 flex-col items-center justify-center lg:px-0 ">
                <div className="mx-auto flex w-full flex-col  justify-center space-y-6 sm:w-[350px] ">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className='h-20 w-20' />
                        <h1 className='text-2xl font-bold '>Create Account</h1>

                        <Link href='sign-in' className={buttonVariants({ variant: 'link', className: "gap-1.5 !text-cyan-500" })}>
                            Alredy have an account! Sign In →
                        </Link>
                    </div>

                    <div className="grid gap-6 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor='email'>Email</Label>
                                    <Input {...register("email")} className={cn({ "focus-visible:ring-gray-300": errors.email, })} placeholder='you@example.com' />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor='password'>Password</Label>
                                    <Input {...register("password")} className={cn({ "focus-visible:ring-gray-300": errors.password, })} placeholder='password' />
                                </div>
                                <Button  >Sign up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Page