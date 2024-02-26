'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'

const AddToCartButton = ({ product }: { product: Product }) => {

    const { addItem } = useCart()

    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [isSuccess])





    return (
        <Button
            onClick={() => {
                addItem(product)
                setIsSuccess(true)
            }}
            size='lg'
            className='w-full h-14 shadow-md'
        >
            {isSuccess ? " Added" : "Add to cart"}
        </Button>
    )
}

export default AddToCartButton