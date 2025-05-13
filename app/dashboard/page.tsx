"use client";

import Image from 'next/image';
import { useState } from 'react';

const storyTypes = [
    '/Images/bedtime.png',
    '/Images/storybook.jpg',
    '/Images/educational.png',
];

const ageGroups = [
    '/Images/0-2.png',
    '/Images/3-5.png',
    '/Images/5-8.png',
];

const imageStyles = [
    '/Images/oilpainting.png',
    '/Images/3d.png',
    '/Images/papercut.png',
    '/Images/retro.png',
    '/Images/watercolor.png',
    '/Images/fantasy.png',
];


const languages = ['English', 'Tagalog', 'Hiligaynon'];

export default function CreateStoryPage() {
    const [subject, setSubject] = useState('');
    const [selectedStoryType, setStoryType] = useState(0);
    const [selectedAgeGroup, setAgeGroup] = useState(0);
    const [selectedStyle, setStyle] = useState(0);
    const [selectedLanguage, setLanguage] = useState(0);

    return (
        <div className="p-6 bg-pink-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-pink-700 mb-2">Create Your Own Story</h1>
            <p className="text-center text-lg text-pink-800 mb-6">Bring your idea into a story with AI</p>

            {/* Subject Input */}
            <div className="mb-6">
                <h2 className="text-xl font-bold justify-center text-pink-700 mb-2">Subject of the story</h2>
                <textarea
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Write the subject of the story you want to generate."
                    className="w-full text-pink-700 p-4 rounded-lg border border-pink-400"
                />
            </div>

            {/* Story Type */}
            <div className="mb-6">
                <h2 className="text-xl ml-48 font-bold text-pink-700 mb-2">1. Select story type</h2>
                <div className="flex justify-center gap-4">
                    {storyTypes.map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt={`Story type ${idx + 1}`}
                            width={150}
                            height={150}
                            onClick={() => setStoryType(idx)}
                            className={`cursor-pointer rounded-lg border-4 ${selectedStoryType === idx ? 'border-pink-600' : 'border-transparent'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Age Group */}
            <div className="mb-6">
                <h2 className="text-xl ml-48 font-bold text-pink-700 mb-2">2. Select the age group</h2>
                <div className="flex justify-center gap-4">
                    {ageGroups.map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt={`Age group ${idx + 1}`}
                            width={150}
                            height={150}
                            onClick={() => setAgeGroup(idx)}
                            className={`cursor-pointer rounded-lg border-4 ${selectedAgeGroup === idx ? 'border-pink-600' : 'border-transparent'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Image Style */}
            <div className="mb-6">
                <h2 className="text-xl ml-48 font-bold text-pink-700 mb-2">3. Select image style</h2>
                <div className="flex justify-center grid-cols-3 gap-4">
                    {imageStyles.map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt={`Style ${idx + 1}`}
                            width={150}
                            height={100}
                            onClick={() => setStyle(idx)}
                            className={`cursor-pointer rounded-lg border-4 ${selectedStyle === idx ? 'border-pink-600' : 'border-transparent'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Language */}
            <div className="mb-6">
                <h2 className="text-xl ml-48 font-bold text-pink-700 mb-2">4. Select Language or Dialect</h2>
                <div className="flex justify-center gap-4">
                    {languages.map((lang, idx) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(idx)}
                            className={`px-6 py-3 rounded-lg text-lg text-pink-400 font-bold ${selectedLanguage === idx
                                ? 'bg-pink-500 text-white'
                                : 'bg-white border border-pink-400'
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-end text-center mt-8">
                <button className="px-8 py-4 bg-pink-500 text-white font-bold rounded-xl shadow-lg hover:bg-pink-800 transition">
                    Generate Story
                </button>
            </div>
        </div>
    );
}