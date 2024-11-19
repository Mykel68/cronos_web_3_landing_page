import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import thorus from "@/assets/Thorus.svg";

export default function TheHeart() {
    return (
        <Container className="relative min-h-[28rem] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={thorus}
                    alt="Thorus Logo"
                    fill
                    className=" w-[12rem] h-[12rem] "
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-7">
                <p className="tracking-widest text-sm text-white uppercase">
                    Enter the Cronos Hub
                </p>
                <h1 className="text-7xl font-bold text-pretty">
                    The Heart of the
                    <br />
                    Interchain.
                </h1>
                <p className="max-w-md mx-auto">
                    Serving as the economic center of Cronos, the Cronos Hub is a blockchain that provides vital services to the Interchain.
                </p>
            </div>
        </Container>
    );
}
