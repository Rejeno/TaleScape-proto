"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <div className="bg-pink-100 px-4 h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="pt-16 mt-10 ml-20">
                    <h3 className="text-[80px] text-[#E13B80] font-bold">
                        Craft Magical Stories for Kids
                    </h3>
                    <p className="text-2xl text-black">
                        Bring your kids' imagination into an amazing story.
                    </p>
                    <div className="mt-5">
                        <Link href={'/dashboard'}>
                            <Button size="lg" className="bg-secondary text-gray-100 text-xl font-medium rounded-lg p-2">
                                Create Story
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="w-full">
                        <Image src={"/Images/HeroImage.png"} alt="hero" width={900} height={900} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
