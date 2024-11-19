import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import Cylinder from "@/assets/Cylinder.svg"

export default function TrustedValue() {
    return (
        <Container className="w-full min-h-screen text-white relative overflow-hidden">
            {/* Purple Gradient Blob */}
            {/* <svg
                className="absolute right-0 bottom-0 w-[600px] h-[600px]"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF00FF' }} />
                        <stop offset="100%" style={{ stopColor: '#7000FF' }} />
                    </linearGradient>
                </defs>
                <path
                    d="M300,200 Q350,150 300,100 T300,0 T200,0 T100,0 T0,100 T0,200 T0,300 T100,400 T200,400 T300,300 T300,200"
                    fill="url(#blob-gradient)"
                    opacity="0.5"
                >
                    <animate
                        attributeName="d"
                        dur="20s"
                        repeatCount="indefinite"
                        values="M300,200 Q350,150 300,100 T300,0 T200,0 T100,0 T0,100 T0,200 T0,300 T100,400 T200,400 T300,300 T300,200;
                    M300,200 Q250,150 300,100 T250,0 T150,0 T50,0 T0,150 T0,250 T0,350 T150,400 T250,400 T350,300 T300,200;
                    M300,200 Q350,150 300,100 T300,0 T200,0 T100,0 T0,100 T0,200 T0,300 T100,400 T200,400 T300,300 T300,200"
                    />
                </path>
            </svg> */}
            <Image src={Cylinder} alt="Cylinder" className="absolute bottom-0 right-0 w-[30rem] h-[30rem] object-cover" />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <div className="py-20 space-y-16">
                    {/* Header Section */}
                    <div className="flex items-start justify-between">
                        <div className="space-y-6">
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    letterSpacing: '0.2em',
                                    fontSize: '0.75rem'
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
                                    lineHeight: 1.2
                                }}
                            >
                                The most trusted way to build value.
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    maxWidth: '600px',
                                    fontSize: '1rem',
                                    lineHeight: 1.6
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
                                    lineHeight: 1.6
                                }}
                            >
                                Developers can use the SDK to build innovative applications that create
                                value through exchange with the Cronos Hub.
                            </Typography>

                        </div>
                        <div className=" ">
                            <div className="space-y-2">
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '3.5rem', md: '4rem' },
                                        fontWeight: 'bold'
                                    }}
                                >
                                    99%
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'grey.400',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    Lower carbon footprint
                                </Typography>
                            </div>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em'
                                }}
                            >
                                PROOF OF STAKE
                            </Typography>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Proof of Stake */}


                        {/* Low Fees */}
                        <div className="space-y-2">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '3.5rem', md: '4rem' },
                                    fontWeight: 'bold'
                                }}
                            >
                                $0.01
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    fontSize: '0.875rem'
                                }}
                            >
                                Enjoy the lowest fees - almost zero
                            </Typography>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em'
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
                                    fontSize: { xs: '3.5rem', md: '4rem' },
                                    fontWeight: 'bold'
                                }}
                            >
                                5 sec
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'grey.400',
                                    fontSize: '0.875rem'
                                }}
                            >
                                Transactions confirmed in seconds
                            </Typography>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'grey.500',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.2em'
                                }}
                            >
                                FAST TRANSACTIONS
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}