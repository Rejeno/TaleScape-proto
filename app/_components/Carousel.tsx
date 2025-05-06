import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

function Carousel() {
  const images = [
    "/Carousel/story1.png",
    "/Carousel/story9.png",
    "/Carousel/story6.png",
    "/Carousel/story4.png",
    "/Carousel/story5.png",
    "/Carousel/story3.png",
    "/Carousel/story7.png",
    "/Carousel/story8.png",
    "/Carousel/story2.png",
  ];

  return (
    <div className="overflow-hidden w-full bg-pink-100 h-screen">
        <div className="p-2 mb-4 mt-10">
            <h4 className="text-primary font-semibold text-center text-4xl">
                Explore Various Stories
            </h4>
            <p className="text-black text-center text-xl p-2">
                These are stories created with the magic of TaleScape
            </p>
        </div>
      <div className="flex animate-scroll-x gap-4 bg-pink-100 mt-6">
        {/* Map through the images twice to create seamless scrolling */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-pink-100 w-[300px] h-[300px] relative" // Increased size
          >
            {/* Image is now inside a container with increased size */}
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4 mt-6">
        <Link href={'/explore'}>
            <Button className="bg-[#E13B80] text-white text-medium rounded-md p-2" >
                Read Stories Now
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
