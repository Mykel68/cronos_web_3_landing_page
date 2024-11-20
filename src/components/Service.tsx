import { Button, Container } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Spiral from "@/assets/spiral_.svg";

export default function Service() {
    return (
        <Container className="w-full min-h-screen overflow-hidden  relative">
            {/* Background Spiral */}
            <Image
                src={Spiral}
                className="-z-10 absolute w-[300px] sm:w-[400px] h-auto left-0 top-1/2 -translate-y-1/2"
                alt="spiral"
            />

            <Container>
                <div className="space-y-10 px-5 sm:px-10">
                    {/* Community Header */}
                    <p
                        className="text-sm sm:text-base text-white"
                        style={{ letterSpacing: '2.4px' }}
                    >
                        COMMUNITY-OWNED AND OPERATED
                    </p>

                    {/* Section 1: Title and Stats */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight md:w-1/2">
                            Enter a Universe of Connected Services.
                        </h1>
                        <div className="flex flex-col gap-1 items-end md:items-start">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-pretty">265+</h1>
                            <span className="text-gray-400 text-sm sm:text-base">Apps & Services</span>
                        </div>
                    </div>

                    {/* Section 2: Description and Stats */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                        <p className="text-sm sm:text-base lg:text-lg md:w-1/2 leading-relaxed">
                            Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol.
                            This innovation enables you to freely exchange assets and data across sovereign blockchains.
                        </p>
                        <div className="flex flex-col gap-1 items-end md:items-start">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-pretty">63B+</h1>
                            <span className="text-gray-400 text-sm sm:text-base">Digital Assets</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="contained"
                            className="linear-bg capitalize"
                            sx={{
                                height: "2.5rem",
                                width: "10rem",
                                color: "#111",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                lineHeight: "1.5rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Learn
                        </Button>
                        <Button
                            className="!text-white flex items-center gap-2"
                            sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                        >
                            Explore Token <ChevronRight />
                        </Button>
                    </div>
                </div>
            </Container>
        </Container>
    );
}
