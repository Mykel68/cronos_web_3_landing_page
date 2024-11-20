import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import thorus from "@/assets/Thorus.svg";

export default function TheHeart() {
    return (
        <Container className="relative min-h-[28rem] flex items-center justify-center text-center text-white px-5 sm:px-10">
            {/* Background Image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={thorus}
                    alt="Thorus Logo"
                    width={300}
                    height={300}
                    className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 aspect-square opacity-20"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                {/* Small heading */}
                <p className="tracking-widest text-xs sm:text-sm text-white uppercase">
                    Enter the Cronos Hub
                </p>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-pretty">
                    The Heart of the
                    <br />
                    Interchain.
                </h1>

                {/* Paragraph */}
                <p className="max-w-xs sm:max-w-md text-sm sm:text-base lg:text-lg mx-auto leading-relaxed">
                    Serving as the economic center of Cronos, the Cronos Hub is a blockchain that provides vital services to the Interchain.
                </p>
            </div>
        </Container>
    );
}
