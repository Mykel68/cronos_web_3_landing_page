import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Secure from "@/assets/secure1.svg";
import Yen from "@/assets/yen.svg";
import Eth from "@/assets/eth.svg";
import { Container } from "@mui/material";

export default function Component() {
    return (
        <Container className="w-full text-white py-16">
            <div className="max-w-6xl mx-auto px-4 ">
                {/* Header */}
                <div className="space-y-4 w-full lg:w-3/4 mb-12 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                        Be Part of the Open Economy of the Future.
                    </h1>
                    <Link
                        href="#features"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        Powerful features <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Interchain Accounts */}
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 space-y-6">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                            INTERCHAIN ACCOUNTS
                        </div>
                        <div className="relative h-fit mx-auto lg:mx-0">
                            <Image
                                src={Secure}
                                alt="Secure vault illustration"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-xl sm:text-3xl font-bold w-2/3">
                            One secure account for all your digital assets.
                        </h1>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                            COMING SOON
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-6">
                        {/* Decentralized Exchange */}
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 space-y-4">
                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                                DECENTRALIZED EXCHANGE
                            </div>
                            <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
                                <h1 className="text-xl sm:text-4xl font-bold text-center sm:text-left">
                                    Swap tokens & collectibles.
                                </h1>
                                <Image
                                    src={Yen}
                                    alt="Golden coin illustration"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                                COMING SOON
                            </p>
                        </div>

                        {/* Bottom Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Liquidity Pool */}
                            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 space-y-4">
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                    LIQUIDITY POOL
                                </div>
                                <h1 className="text-xl sm:text-4xl font-bold">
                                    Provide liquidity, earn rewards.
                                </h1>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    COMING SOON
                                </p>
                            </div>

                            {/* Wrapped ETH */}
                            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 space-y-4">
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                    WRAPPED ETH
                                </div>
                                <h3 className="text-3xl sm:text-6xl font-bold">
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
    );
}
