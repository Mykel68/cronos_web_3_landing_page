import { Container, Typography } from '@mui/material'
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Link2, Settings, Shield } from 'lucide-react'

export default function Network() {
    const cards = [
        {
            title: "CONNECT",
            heading: "Connect chains",
            description: "Grow the economy of your chain by connecting to Cronos Hub and accessing its power.",
            icon: <Link2 className="w-5 h-5" />
        },
        {
            title: "INTEGRATE",
            heading: "Provide services",
            description: "Get support to bring users to Cronos by providing services through bridges, wallets and more.",
            icon: <Settings className="w-5 h-5" />
        },
        {
            title: "VALIDATE",
            heading: "Validator level",
            description: "Join the ranks of trusted decentralized validator operators to help secure and help secure the interchain.",
            icon: <Shield className="w-5 h-5" />
        }
    ]

    return (
        <div className="w-full text-white py-20">
            <Container >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 'bold',
                        mb: 8,

                    }}
                >
                    Join the network.
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={card.title}
                        // whileHover={{
                        //     scale: 1.02,
                        //     transition: { duration: 0.2 }
                        // }}
                        // initial={{ opacity: 0, y: 20 }}
                        // animate={{
                        //     opacity: 1,
                        //     y: 0,
                        //     transition: { delay: index * 0.1 }
                        // }}
                        >
                            <Card className="bg-zinc-900/50 border-zinc-800 h-[30rem] p-6 group hover:bg-zinc-900/80 transition-colors duration-200">
                                <div className="space-y-14 h-full flex flex-col ">
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: 'grey.500',
                                            letterSpacing: '0.2em',
                                            fontSize: '0.75rem'
                                        }}
                                    >
                                        {card.title}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '1.5rem',
                                            color: 'white'
                                        }}
                                    >
                                        {card.heading}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: 'grey.400',
                                            fontSize: '0.875rem',
                                            lineHeight: 1.6,
                                            flex: 1
                                        }}
                                    >
                                        {card.description}
                                    </Typography>

                                    <div className="text-gray-500 group-hover:text-gray-300 transition-colors duration-200">
                                        {card.icon}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}