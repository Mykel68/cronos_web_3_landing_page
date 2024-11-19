import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CommunityService() {
    const links = [
        {
            title: "Community Chat",
            description: "Ask general questions and chat with the worldwide community on Telegram.",
            href: "#"
        },
        {
            title: "Twitter",
            description: "Follow @cronos to get the latest news and updates from across the ecosystem.",
            href: "#"
        },
        {
            title: "Developer Chat",
            description: "Have technical questions about Cronos tools? Ask a developer on the Discord.",
            href: "#"
        },
        {
            title: "Cronos Forum",
            description: "Thinking about becoming a validator or interested in network matters?",
            href: "#"
        }
    ]

    return (
        <div className="w-full min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center py-20">
                    {/* Left side - Sticky */}
                    <div className="relative lg:sticky lg:top-20 lg:h-[calc(100vh-8rem)]">
                        {/* Gradient Circle */}
                        <div className="absolute -left-1/3 top-16 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 opacity-80 blur-2xl" />

                        {/* Content */}
                        <div className="relative z-10 pt-12 space-y-6">
                            <h2 className="text-5xl font-bold leading-tight">
                                Meet <span className="text-gray-400">the worldwide community.</span>
                            </h2>
                            <p className="text-lg text-gray-300 max-w-md">
                                Join a fast-growing community of developers and innovators connected
                                all over the world building the new era of the internet.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center text-lg hover:text-gray-300 transition-colors"
                            >
                                Community
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Links */}
                    <div className="space-y-24 pt-20">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="block group"
                            >
                                <div className="space-y-5">
                                    <div className="flex items-center">
                                        <h3 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">
                                            {link.title}
                                        </h3>
                                        <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-gray-400 text-[1rem] pr-12">
                                        {link.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}