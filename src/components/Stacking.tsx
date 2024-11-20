import { Button, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import blueOctagon from "@/assets/blueoctagon.svg";
import { ChevronRight } from 'lucide-react';

export default function Stacking() {
    return (
        <Container className="py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-around ">
                {/* Image Section */}
                <Image
                    src={blueOctagon}
                    alt="octa"
                    className="w-48 sm:w-72 lg:w-[25rem] "
                />

                {/* Text Section */}
                <div className="flex flex-col gap-5 items-center lg:items-end justify-center text-center lg:text-right lg:w-1/3">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl">
                        Secured by the Hedron.
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg max-w-md">
                        In return for securing the services on the Cronos Hub, transaction fees
                        and staking rewards are distributed to HEDRON stakers.
                    </p>

                    {/* Buttons Section */}
                    <div className="flex items-center justify-center lg:justify-end gap-4">
                        <Button
                            variant="contained"
                            className="linear-bg capitalize"
                            sx={{
                                height: "2.5rem",
                                width: "10rem",
                                color: "#111",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                lineHeight: "1.5rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Start Stacking
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                height: "2.5rem",
                                width: "10rem",
                                color: "#fff",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                lineHeight: "1.5rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Learn More <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
