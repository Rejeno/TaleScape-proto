
export default function Home() {
    return (
        <div className="bg-pink-100 text-center py-10 md:py-16 lg:py-20 px-4">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-600">Craft Your Magical Adventures</h1>
                <p className="text-xl md:text-2xl text-black mt-2">with Talescape</p>
            </header>

            {/* Steps Section */}
            <section className="flex flex-col md:flex-row justify-center gap-8 container mx-auto">
                {/* 1 */}
                <div className="bg-white shadow-md w-full max-w-sm mx-auto rounded-2xl hover:scale-105 transform transition duration-300">
                    <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                        <img
                            src="/Images/craft-story.png"
                            className="w-full h-full object-cover"
                            alt="Craft Your Story"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-black mt-4">Craft Your Story</h2>
                    <p className="text-black mt-2 p-2 pb-4">
                        Let your imagination guide the way. Write your adventure and bring it to life!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto">
                    {/* 2 */}
                    <div className="bg-white shadow-md w-full max-w-sm mx-auto rounded-2xl hover:scale-105 transform transition duration-300">
                        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                            <img
                                src="/Images/story-spark2.png"
                                className="w-full h-full object-cover"
                                alt="Spark Adventures"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-black mt-4">Spark Adventures</h2>
                        <p className="text-black mt-2 p-2 pb-4">
                            Bring characters to life and start exploring endless adventures.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="bg-white shadow-md w-full max-w-sm mx-auto rounded-2xl hover:scale-105 transform transition duration-300">
                        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                            <img
                                src="/Images/story-journey2.png"
                                className="w-full h-full object-cover"
                                alt="Customize Your Journey"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-black mt-4">Customize Your Journey</h2>
                        <p className="text-black mt-2 p-2 pb-4">
                            Tailor your story to meet unique learning needs and preferences.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
