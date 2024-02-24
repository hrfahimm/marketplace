'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const AddToCartButton = () => {


    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(true)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [isSuccess])





    return (
        <Button
            onClick={() => {
                setIsSuccess(true)
            }}
            size='lg'
            className='w-full'
        >
            {isSuccess ? " Added" : "Add to cart"}
        </Button>
    )
}

export default AddToCartButton