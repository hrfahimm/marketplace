'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import Link from "next/link"
import { useState } from "react"
import Navitem from "./Navitem"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)


    const isAnyOpen = activeIndex !== null

    return (
        <div className=" flex gap-4 h-full">
            {
                PRODUCT_CATEGORIES.map((category, i) => {

                    const handleOpen = () => {
                        if (activeIndex === i) {
                            setActiveIndex(null)
                        } else {
                            setActiveIndex(i)
                        }
                    }

                    const isOpen = i === activeIndex


                    return (
                        <Navitem category={category}
                            isAnyOpen={isAnyOpen}
                            handleOpen={handleOpen}
                            isOpen={isOpen}
                            key={category.value}

                        />
                    )
                })
            }
        </div>
    )
}

export default NavItems