import { Button, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import blueOctagon from "@/assets/blueoctagon.svg"
import { ChevronRight } from 'lucide-react'

export default function Stacking() {
    return (
        <Container className='py-20'>
            <div className="flex items-center justify-around">
                <Image src={blueOctagon} alt="octa" className='w-[25rem]' />
                <div className="flex flex-col gap-5 items-start justify-center w-1/3 ">
                    <h1 className='text-6xl text-right'>Secured by
                        the Hedron.</h1>
                    <p className='text-right'>In return for securing the services on
                        the Cronos Hub, transaction fees
                        and staking rewards are distributed
                        to HEDRON stakers.</p>
                    <div className="flex items-end w-full  justify-end gap-4 pl-40 ">
                        <Button variant='contained' className='linear-bg capitalize ' sx={{
                            height: "2.5rem",
                            width: "10rem",
                            color: "#111",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "0.6rem",
                            lineHeight: "1.5rem",
                            textTransform: "capitalize",
                        }}>Start Stacking  </Button>
                        <Button variant='text' sx={{
                            height: "2.5rem",
                            width: "10rem",
                            color: "#fff",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "0.6rem",
                            lineHeight: "1.5rem",
                            textTransform: "capitalize",
                        }}>Learn More <ChevronRight /> </Button>
                    </div>
                </div>

            </div>
        </Container>
    )
}
