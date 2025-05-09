'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";

type Story = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
};

const stories: Story[] = [
    { id: 1, title: 'The Sleepy', subtitle: '', image: '/Carousel/story1.png' },
    { id: 2, title: "Mitten's Space Adventure", subtitle: '', image: '/Carousel/story2.png' },
    { id: 3, title: "Tiger and Cat's Special Friendship", subtitle: '', image: '/Carousel/story3.png' },
    { id: 4, title: 'The Little Hero and the Snarling Dragon', subtitle: '', image: '/Carousel/story4.png' },
    { id: 5, title: "Tiger and Cat's Special Friendship", subtitle: '', image: '/Carousel/story3.png' },
    { id: 6, title: 'The Little Hero and the Snarling Dragon', subtitle: '', image: '/Carousel/story4.png' },
    { id: 7, title: "Tiger and Cat's Special Friendship", subtitle: '', image: '/Carousel/story3.png' },
    { id: 8, title: 'The Little Hero and the Snarling Dragon', subtitle: '', image: '/Carousel/story4.png' },
];

const filterOptions: { [key: string]: string[] } = {
    'Story Type': ['Fairy Tale', 'Adventure', 'Science Fiction'],
    'Age Group': ['3-5', '6-8', '9-12'],
    'Image Type': ['Illustration', 'Cartoon', 'Realistic'],
    'Language': ['English', 'Tagalog', 'Cebuano'],
};

function CustomDropdown({ label, options }: { label: string; options: string[] }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full"
            >
                {selected || label}
                <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <ul className="absolute z-10 mt-2 bg-white rounded shadow-lg w-48">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ExplorePage() {
    const [search, setSearch] = useState('');

    return (
        <div>
            <main className="min-h-screen bg-pink-100 text-gray-800 px-4 py-6 pb-22">
                <h2 className="text-2xl font-bold text-center text-secondary mb-4">Explore More Stories</h2>

                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search for stories..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-lg p-2 rounded-full border border-pink-500"
                    />
                </div>

                <div className="flex flex-wrap gap-4 justify-center mb-6">
                    {Object.entries(filterOptions).map(([label, options]) => (
                        <CustomDropdown key={label} label={`Select ${label}`} options={options} />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stories
                        .filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))
                        .map((story) => (
                            <Card
                                key={story.id}
                                isFooterBlurred
                                className="h-[300px] hover:scale-105 transition-transform rounded-xl overflow-hidden relative"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        alt={story.title}
                                        src={story.image}
                                        fill
                                        className="object-cover"
                                    />
                                    <CardFooter className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-sm border-t border-zinc-200/50 px-4 py-3 min-h-[64px] z-10 flex items-center justify-between gap-4">
                                        <p className="text-black text-2xl text-left max-w-[60%] break-words leading-tight">
                                            {story.title}
                                        </p>
                                        <Button className="text-xs bg-secondary text-white px-4 py-1 rounded-lg whitespace-nowrap shrink-0 p-2" size="sm">
                                            <Link href="/view-story" className="text-white">
                                                View Story
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
