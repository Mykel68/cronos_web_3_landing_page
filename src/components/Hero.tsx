import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Octa from "@/assets/octagon.svg";

export default function Hero() {
    return (
        <Container className="relative py-20 pb-60">
            {/* Background Octagon */}
            <Image
                src={Octa}
                alt="octa"
                className="absolute -bottom-0 -right-56 octa w-[30rem] md:w-[20rem] lg:w-[25rem] opacity-50"
            />

            <div className="flex flex-col items-center justify-center text-center gap-7 relative">
                {/* Floating Octagon */}
                <Image
                    src={Octa}
                    alt="octa floating"
                    className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-36 md:translate-x-0 w-[8rem] md:w-[13rem] aspect-square h-auto"
                />

                {/* Welcome Text */}
                <p className="text-sm md:text-lg text-gray-400">WELCOME TO CRONOS</p>

                {/* Heading */}
                <h1
                    className="text-4xl md:text-6xl lg:text-8xl font-bold text-pretty"
                    style={{ lineHeight: '1.2' }}
                >
                    The Internet of <br className="hidden md:block" /> Blockchains.
                </h1>

                {/* Subtext */}
                <p className="text-sm md:text-base lg:text-lg text-balance max-w-[90%] sm:max-w-[70%] md:max-w-[50%] mx-auto px-5 md:px-10">
                    Cronos is an ever-expanding ecosystem of connected apps and services, built for a decentralized future.
                </p>
            </div>
        </Container>
    );
}
