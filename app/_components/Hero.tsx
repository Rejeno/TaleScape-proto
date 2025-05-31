"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <div className="bg-pink-200 px-4 py-10 md:py-16 lg:py-20 min-h-screen -mt-12 flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h3 className="text-4xl md:text-6xl lg:text-[80px] text-[#E13B80] font-bold leading-tight">
                        Craft Magical Stories for Kids
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-black mt-4">
                        Bring your kids' imagination into an amazing story.
                    </p>
                    <div className="mt-8">
                        <Link href={'/dashboard'}>
                            <Button size="lg" className="bg-secondary text-gray-100 text-xl font-medium rounded-lg p-4 cursor-pointer">
                                Create Story
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <div className="w-full flex justify-center md:justify-end">
                        <Image src={"/Images/HeroImage.png"} alt="hero" width={600} height={600} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
