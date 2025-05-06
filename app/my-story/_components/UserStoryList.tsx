"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stories = [
  { id: 1, coverImage: "/Carousel/story1.png", storyName: "The Enchanted Forest" },
  { id: 2, coverImage: "/Carousel/story2.png", storyName: "The Lost Kingdom of Jake" },
  { id: 3, coverImage: "/Carousel/story3.png", storyName: "The Hidden Treasure" },
  { id: 4, coverImage: "/Carousel/story4.png", storyName: "The Magical World" },
  { id: 5, coverImage: "/Carousel/story1.png", storyName: "The Enchanted Forest" },
  { id: 6, coverImage: "/Carousel/story2.png", storyName: "The Lost Kingdom of Jake" },
  { id: 7, coverImage: "/Carousel/story3.png", storyName: "The Hidden Treasure" },
  { id: 8, coverImage: "/Carousel/story4.png", storyName: "The Magical World" },
];

function UserStoryList() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isMyStory, setIsMyStory] = useState(true);

  const handleDelete = (id: number) => {
    setIsDeleting(true);
    setTimeout(() => {
      alert(`Story with ID: ${id} deleted`);
      setIsDeleting(false);
      setShowConfirmDelete(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stories.map((story) => (
        <Card
        key={story.id}
        isFooterBlurred
        className="h-[300px] hover:scale-105 transition-transform rounded-xl overflow-hidden relative"
      >
        <div className="relative w-full h-full">
          <Image
            alt={story.storyName}
            src={story.coverImage}
            fill
            className="object-cover"
          />
          {/* Transparent overlay footer */}
          <CardFooter className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-sm border-t border-zinc-200/50 px-4 py-3 min-h-[64px] z-10 flex items-center justify-between gap-4">
          <p className="text-black text-2xl text-left max-w-[60%] break-words leading-tight">
                {story.storyName}
            </p>
            <div className="flex gap-2 items-center shrink-0">
                <Button className="text-xs bg-secondary text-white px-4 py-1 rounded-lg whitespace-nowrap shrink-0 p-2" size="sm">
                <Link href={'/view-story'} className="text-white">
                View Story
                </Link>
                </Button>
                {isMyStory && (
                <button
                    disabled={isDeleting}
                    className="p-1"
                    onClick={(e) => {
                    e.preventDefault();
                    setShowConfirmDelete(true);
                    handleDelete(story.id);
                    }}
                >
                    {isDeleting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-secondary border-t-transparent rounded-full"></div>
                    ) : (
                    <TrashIcon className="h-5 w-5 text-secondary hover:text-primary" />
                    )}
                </button>
                )}
            </div>
            </CardFooter>

        </div>
      </Card>
      
      ))}
    </div>
  );
}

export default UserStoryList;
