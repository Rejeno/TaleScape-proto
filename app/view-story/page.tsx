"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import HTMLFlipBook from 'react-pageflip';

// Types for our story data
interface Page {
  content: string;
  imageUrl?: string;
}

interface Story {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  pages: Page[];
}

// Sample story data (this would come from your API/database in production)
const sampleStory: Story = {
  id: '1',
  title: 'The Enchanted Forest',
  author: 'Jane Doe',
  coverImage: '/Carousel/story1.png',
  pages: [
    { content: 'The Beginning\n\nOnce upon a time, in a land far away, there lived a young adventurer named Lily.' },
    { content: 'Lily had always dreamed of exploring the Enchanted Forest that bordered her small village.' },
    { content: 'The villagers spoke of strange magic and mysterious creatures that dwelled within its ancient trees.' },
    { content: 'On her eighteenth birthday, Lily decided it was finally time to venture into the forest.' },
    { content: 'She packed her bag with supplies and set off at dawn, as the first rays of sunlight filtered through the canopy.' },
    { content: 'Chapter 2: The Discovery\n\nAs Lily ventured deeper into the forest, the trees grew taller and the air became thick with magic.' },
    { content: 'Strange glowing mushrooms illuminated her path, and she could hear whispers in the wind.' },
    { content: 'After walking for hours, she stumbled upon a clearing where a magnificent tree stood, its branches reaching toward the sky.' },
    { content: 'At the base of the tree was a small wooden door, hardly noticeable unless you were looking for it.' },
    { content: 'Curiosity getting the better of her, Lily approached the door and gently knocked three times.' },
  ]
};

// Page component for the flip book
const PageCover = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div className="bg-fourth text-white border overflow-hidden relative" ref={ref} data-density="hard">
      <div className="w-full h-full relative flex flex-col justify-end">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {props.coverImage && (
            <Image 
              src={props.coverImage}
              alt="Story Cover"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>
        <div className="p-8 z-20 bg-gradient-to-t from-black/80 to-transparent relative">
          <h1 className="text-4xl mb-2 font-bold text-shadow">{props.title}</h1>
          <p className="text-xl">{props.author && `By ${props.author}`}</p>
        </div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';

// Regular page component
const Page = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div className=" text-gray-800  overflow-hidden bg-gray-50" ref={ref}>
      <div className="p-8 h-full relative flex flex-col">
        {props.imageUrl && (
          <div className="mb-6 text-center">
            <Image 
              src={props.imageUrl} 
              alt="Page illustration" 
              width={300} 
              height={200}
              className="mx-auto"
            />
          </div>
        )}
        <div className="text-lg leading-relaxed flex-grow">
          {props.content.split('\n').map((paragraph: string, idx: number) => (
            <p key={idx} className={idx > 0 ? "mt-4" : ""}>{paragraph}</p>
          ))}
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">{props.number}</div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default function StoryViewer() {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const bookRef = useRef<any>(null);

  useEffect(() => {
    // Simulate fetching story data
    setTimeout(() => {
      setStory(sampleStory);
      setLoading(false);
      // Add 2 for front and back covers
      setTotalPages(sampleStory.pages.length + 2);
    }, 1000);
  }, []);

  const handlePrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
      setCurrentPage(bookRef.current.pageFlip().getCurrentPageIndex());
    }
  };

  const handleNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
      setCurrentPage(bookRef.current.pageFlip().getCurrentPageIndex());
    }
  };
  
  // Listen for page changes from the flip book component
  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pink-100">
        <div className="text-2xl text-third text-secondary">Loading story...</div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="p-8 bg-white border border-red-200 text-red-800 rounded-md text-center m-8">
        Failed to load story. Please try again later.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-pink-100">
      <HTMLFlipBook
        width={200}
        height={190}
        size="stretch"
        minWidth={250}
        maxWidth={500}
        minHeight={400}
        maxHeight={800}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl rounded"
        ref={bookRef}
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        onFlip={onFlip}
      >
        {/* Front Cover */}
        <PageCover 
          title={story.title} 
          author={story.author} 
          coverImage={story.coverImage}
        />

        {/* Story Pages */}
        {story.pages.map((page, index) => (
          <Page 
            key={index} 
            content={page.content} 
            imageUrl={page.imageUrl} 
            number={index + 1}
          />
        ))}

        {/* Back Cover */}
        <PageCover />
      </HTMLFlipBook>
      
      {/* Navigation Arrows */}
      {/* Next Button: Hide on last page */}
      {currentPage < totalPages - 1 && (
        <div
          className="absolute right-40 top-[450px]"
          onClick={handleNextPage}
        >
          <IoIosArrowDroprightCircle className="text-secondary text-[40px] rounded-full cursor-pointer" />
        </div>
      )}

      {/* Previous Button: Hide on first page */}
      {currentPage > 0 && (
        <div
          className="absolute left-40 top-[450px]"
          onClick={handlePrevPage}
        >
          <IoIosArrowDropleftCircle className="text-secondary text-[40px] rounded-full cursor-pointer" />
        </div>
      )}
    </div>
  );
}