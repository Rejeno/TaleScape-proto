"use client";

import React from "react";

interface ContentSectionProps {
    title: string;
    description: string;
    image: string;
    altText: string;
    reverse?: boolean;
    link?: string; // Optional link for the title
}

const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    description,
    image,
    altText,
    reverse = false, // Default layout
    link, // Optional link for clickable title
}) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center justify-center p-14 gap-8 bg-white ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Image Section */}
            <div className="flex-1 text-center">
                <img
                    src={image}
                    alt={altText}
                    className="w-full h-full max-w-md mx-auto rounded-lg shadow-md"
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 p-12">
                <h2 className="text-4xl font-bold mb-4 text-pink-600 hover:underline transition duration-300 cursor-pointer">
                    {link ? <a href={link}>{title}</a> : title}
                </h2>
                <p className="text-lg text-black leading-relaxed mb-6">{description}</p>
            </div>
        </div>
    );
};

export default ContentSection;
