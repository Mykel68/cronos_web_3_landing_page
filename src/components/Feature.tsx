import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Secure from "@/assets/secure1.svg"
import Yen from "@/assets/yen.svg"
import Eth from "@/assets/eth.svg"
import { Container } from '@mui/material'

export default function Component() {
    return (
        <Container className="w-full  text-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="space-y-4 w-3/4 mb-12">
                    <h1 className="text-5xl  text-balance font-bold leading-tight">
                        Be Part of the Open{" "}
                        Economy of the Future.
                    </h1>
                    <Link
                        href="#features"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        Powerful features <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="flex  gap-4">
                    {/* Interchain Accounts */}
                    <div className="bg-gradient-to-br w-[450px]  space-y-14  from-zinc-900 to-zinc-800 rounded-lg p-6 row-span-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                            INTERCHAIN ACCOUNTS
                        </div>
                        <div className="relative h-fit mb-2">
                            <Image
                                src={Secure}
                                alt="Secure vault illustration"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-3xl  w-3/4 font-bold mb-2">
                            One secure account for all your digital assets.
                        </h1>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                            COMING SOON
                        </p>
                    </div>

                    {/* Decentralized Exchange */}
                    <div className="space-y-5 flex-1">
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6">
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                                DECENTRALIZED EXCHANGE
                            </div>

                            <div className="flex items-center ">
                                <h1 className="text-4xl text-balance w-[220px] font-bold mb-2">
                                    Swap tokens & collectibles.
                                </h1>
                                <div className="relative h-fit mb-4 flex-1">
                                    <Image
                                        src={Yen}
                                        alt="Golden coin illustration"
                                        width={200}
                                        height={200}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                                COMING SOON
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4">
                            {/* Liquidity Pool */}
                            <div className="bg-gradient-to-br flex flex-col gap-14 from-zinc-900 to-zinc-800 rounded-lg p-6">
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                                    LIQUIDITY POOL
                                </div>
                                <h1 className="text-4xl font-bold mb-2">
                                    Provide liquidity, earn rewards.
                                </h1>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    COMING SOON
                                </p>
                            </div>

                            {/* Wrapped ETH */}
                            <div className="bg-gradient-to-br flex flex-col justify-between from-zinc-900 to-zinc-800 rounded-lg p-6">
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                                    WRAPPED ETH
                                </div>
                                <h3 className="text-6xl font-bold mb-2">
                                    Eth Included
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    COMING SOON
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    )
}