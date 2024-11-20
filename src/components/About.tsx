import { Button, Container } from '@mui/material'
import React from 'react'
import One from "@/assets/one.svg"
import Two from "@/assets/two.svg"
import Three from "@/assets/three.svg"
import Four from "@/assets/four.svg"
import Card from './Card'
import { ChevronRight } from 'lucide-react'

const AboutData = [
    {
        title: 'Marketplace',
        description: 'Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.',
        image: One
    },
    {
        title: 'Security Provider',
        description: 'With the upcoming Interchain Security feature, HEDRON will soon be securing many hains, in exchange for additional staking rewards.',
        image: Two
    },
    {
        title: 'Router',
        description: 'A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin..',
        image: Three
    },
    {
        title: 'Custodian',
        description: 'Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.',
        image: Four
    }
]
export default function About() {
    return (
        <Container>
            <div className="space-y-14 ">
                <div className="flex flex-col sm:flex-row items-center  justify-around ">
                    {
                        AboutData.slice(0, 2).map((item, index) => (
                            <Card key={index} title={item.title} description={item.description} image={item.image} />
                        ))
                    }
                </div>
                <div className="flex flex-col sm:flex-row items-center  justify-around  ">
                    {
                        AboutData.slice(2, 4).map((item, index) => (
                            <Card key={index} title={item.title} description={item.description} image={item.image} />
                        ))
                    }
                </div>
                <div className="flex md:pl-32  ">
                    <Button variant='contained' className='linear-bg capitalize ' sx={{
                        height: "2.5rem",
                        width: "10rem",
                        color: "#111",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "0.6rem",
                        lineHeight: "1.5rem",
                        textTransform: "capitalize",
                    }}>Cosmos Hub <ChevronRight /> </Button>
                    <div className=""></div>
                </div>
            </div>
        </Container>
    )
}
