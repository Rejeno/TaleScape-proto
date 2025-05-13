'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MenuList = [
    { name: 'Home', path: '/' },
    { name: 'My Stories', path: '/my-story' },
    { name: 'Explore Stories', path: '/explore' },
    { name: 'About Us', path: '/about-us' },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
    const { user, isSignedIn } = useUser();

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Add shadow if scrolled
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup
        };
    }, []);

    return (
        <Navbar
            maxWidth="full"
            className={`bg-pink-200 p-4 transition-shadow fixed top-0 left-0 w-full z-50 duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} className="sm:hidden" />
                <NavbarBrand className="ml-7">
                    <Image src="/Images/logo5.png" height={80} width={100} alt="New Logo" />
                    <h2 className="font-bold text-4xl text-[#E13B80] ml-2">TaleScape</h2>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="pl-56 hidden sm:flex">
                {MenuList.map((item, index) => (
                    <NavbarItem key={index} className="text-xl text-black font-medium hover:text-[#D51565] hover:scale-110 p-2">
                        <Link href={item.path}>{item.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent className=" pl-36">
                <Link href="/create_story">
                    <Button
                        size="lg"
                        className="hidden sm:flex items-center justify-center p-2 text-md mr-2 rounded-lg
                            bg-secondary text-gray-100
                            hover:bg-primary-hover
                            transition-colors duration-300 ease-in-out
                            cursor-pointer"
                    >
                        {isSignedIn ? 'Create Story' : 'Get Started'}
                    </Button>
                </Link>
                {isSignedIn && (
                    <div className="scale-150 border-4 border-[#E13B80] rounded-full flex items-center justify-center ml-1">
                        <UserButton />
                    </div>
                )}
            </NavbarContent>

            <NavbarMenu>
                {MenuList.map((item, index) => (
                    <NavbarItem key={index} className="text-xl text-black mt-6">
                        <Link href={item.path}>{item.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default Header;
