'use client';

import { Button } from "@heroui/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/** List of navigation links */
const MenuList = [
    { name: 'Home', path: '/' },
    { name: 'My Stories', path: '/my-story' },
    { name: 'Explore Stories', path: '/explore' },
    { name: 'About Us', path: '/about-us' },
];

function Header() {
    /** State to manage if the mobile menu is open */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /** State to track if the user has scrolled (for shadow effect) */
    const [isScrolled, setIsScrolled] = useState(false);

    /** Handle scroll event: add shadow when user scrolls down */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            maxWidth="full"
            className={`bg-pink-200 p-2 transition-shadow fixed w-full z-50 duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Left side: Logo */}
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} className="sm:hidden" />
                <NavbarBrand className="ml-4 md:ml-7 flex items-center">
                    <Image src="/Images/logo5.png" height={60} width={60} alt="New Logo" />
                    <h2 className="font-bold text-xl md:text-2xl text-[#E13B80] ml-2">TaleScape</h2>
                </NavbarBrand>
            </NavbarContent>

            {/* Center nav links */}
            <NavbarContent className="hidden sm:flex flex-grow justify-center">
                {MenuList.map((item, index) => (
                    <NavbarItem
                        key={index}
                        className="text-md md:text-xl text-black font-medium hover:text-[#D51565] hover:scale-110 p-2"
                    >
                        <Link href={item.path}>{item.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Right side button: no user-based conditional logic anymore */}
            <NavbarContent className="flex justify-end">
                <Link href="/create_story">
                    <Button
                        size="md"
                        className="hidden sm:flex items-center justify-center p-2 text-sm md:text-md mr-2 rounded-lg
                            bg-secondary text-gray-100
                            hover:bg-primary-hover
                            transition-colors duration-300 ease-in-out
                            cursor-pointer"
                    >
                        Create Story
                    </Button>
                </Link>
            </NavbarContent>

            {/* Mobile menu */}
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
