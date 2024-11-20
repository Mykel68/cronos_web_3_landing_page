'use client'

import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Navbar Items
const navbar = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Contact', path: '#' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container component="nav" className="bg-[#050505] text-white">
            <div className="flex items-center justify-between py-4">
                {/* Logo */}


                {/* <Link href="/" className={`font-bold text-xl ${isOpen ? " hidden" : ""}`}>
                    CRONOS
                </Link> */}

                {
                    isOpen ?
                        (
                            <Link href="/" className={`font-bold text-xl `}>
                                {""}
                            </Link>
                        )
                        :
                        (
                            <Link href="/" className={`font-bold text-xl ${isOpen ? " hidden" : ""}`}>
                                CRONOS
                            </Link>
                        )
                }


                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-5">
                    {navbar.map((item, index) => (
                        <Link href={item.path} key={index} passHref>
                            <Button
                                variant="text"
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center">
                    <Button
                        variant="text"
                        endIcon={<ChevronRight />}
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            },
                        }}
                    >
                        GET CRONOS
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            className="md:!hidden"
                            variant="text"
                            sx={{ color: 'white' }}
                        >
                            <Menu />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#050505] text-white">
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex justify-between items-center mb-8">
                                <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                                    CRONOS
                                </Link>
                                {/* <Button
                                    variant="text"
                                    sx={{ color: 'white' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X />
                                    <span className="sr-only">Close menu</span>
                                </Button> */}
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="flex flex-col space-y-4">
                                {navbar.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className="text-lg hover:text-gray-300 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <div className="mt-auto mb-8">
                                <Button
                                    variant="outlined"
                                    endIcon={<ChevronRight />}
                                    fullWidth
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        },
                                    }}
                                >
                                    GET CRONOS
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </Container>
    );
}
