import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
    const navigation = {
        learn: {
            title: "Learn",
            links: [
                { name: "Introduction", href: "#" },
                { name: "Features", href: "#" },
                { name: "Staking", href: "#" },
                { name: "Get HEDRON", href: "#" },
                { name: "FAQ", href: "#" },
            ],
        },
        build: {
            title: "Build",
            links: [
                { name: "Developer Portal", href: "#" },
                { name: "Ignite CLI", href: "#" },
                { name: "Cronos SDK", href: "#" },
                { name: "IBC Protocol", href: "#" },
            ],
        },
        explore: {
            title: "Explore",
            links: [
                { name: "Tokens", href: "#" },
                { name: "Apps & Services", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Gravity DEX", href: "#" },
                { name: "Blog", href: "#" },
            ],
        },
        participate: {
            title: "Participate",
            links: [
                { name: "Community", href: "#" },
                { name: "Contributors", href: "#" },
                { name: "Events", href: "#" },
                { name: "Newsletters", href: "#" },
            ],
        },
        resources: {
            title: "Resources",
            links: [
                { name: "About", href: "#" },
                { name: "Press Kit", href: "#" },
                { name: "Design", href: "#" },
                { name: "Resources", href: "#" },
            ],
        },
    };

    return (
        <footer className="text-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Newsletter Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Receive transmissions</h2>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-4">
                                <span>Unsubscribe at any time.</span>
                                <Link
                                    href="#"
                                    className="inline-flex items-center hover:text-white transition-colors"
                                >
                                    Privacy policy
                                    <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="bg-zinc-900 border-zinc-800 text-white w-full max-w-md focus:ring-zinc-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700" />

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 pt-14 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    {Object.values(navigation).map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-500 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
