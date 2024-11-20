import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import Cylinder from "@/assets/Cylinder.svg";

export default function TrustedValue() {
    return (
        <Container className="w-full min-h-screen text-white relative overflow-hidden">
            {/* Purple Gradient Blob */}
            <Image
                src={Cylinder}
                alt="Cylinder"
                className="absolute bottom-0 right-0"
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <div className="py-20 space-y-16">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
                        <div className="space-y-6">
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    letterSpacing: '0.2em',
                                    fontSize: '0.75rem',
                                }}
                            >
                                TECHNOLOGY
                            </Typography>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 'bold',
                                    maxWidth: '600px',
                                    lineHeight: 1.2,
                                }}
                            >
                                The most trusted way to build value.
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    maxWidth: '600px',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                Cronos is a state-of-the-art blockchain framework that powers the Cronos Hub
                                and its rapidly expanding orbit of sovereign chains.
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    maxWidth: '600px',
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                Developers can use the SDK to build innovative applications that create
                                value through exchange with the Cronos Hub.
                            </Typography>
                        </div>

                        <div className="space-y-2 text-center lg:text-right">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4rem' },
                                    fontWeight: 'bold',
                                }}
                            >
                                99%
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    fontSize: '0.875rem',
                                }}
                            >
                                Lower carbon footprint
                            </Typography>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                PROOF OF STAKE
                            </Typography>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Low Fees */}
                        <div className="space-y-2">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4rem' },
                                    fontWeight: 'bold',
                                }}
                            >
                                $0.01
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    fontSize: '0.875rem',
                                }}
                            >
                                Enjoy the lowest fees - almost zero
                            </Typography>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                LOW FEES
                            </Typography>
                        </div>

                        {/* Fast Transactions */}
                        <div className="space-y-2">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4rem' },
                                    fontWeight: 'bold',
                                }}
                            >
                                5 sec
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    fontSize: '0.875rem',
                                }}
                            >
                                Transactions confirmed in seconds
                            </Typography>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                FAST TRANSACTIONS
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
}
