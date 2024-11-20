import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
interface CardProps {
    title: string
    description: string
    image: string
}

export default function Card({ title, description, image }: CardProps
) {
    return (
        <Box>
            <div className="flex flex-col gap-2 items-start justify-center w-[20rem]">
                <Image src={image} alt={title} className='w-[7rem] aspect-square h-[7rem]' />
                <p className='text-xl font-bold text-pretty tracking-wider'>{title}</p>
                <p className='text-[1rem] text-balance font-normal tracking-widest '>{description}</p>
            </div>
        </Box>
    )
}
