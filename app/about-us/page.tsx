import React from "react";
import Footer from "../_components/Footer";

const AboutUs: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="w-full h-screen relative bg-cover bg-top" style={{ backgroundImage: 'url("/Images/hero-background.png")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-6xl font-extrabold text-white tracking-tight">Welcome to TaleScape</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                {/* About Us Section */}
                <div className="w-full bg-white py-16">
                    <div className="max-w-5xl mx-auto px-8 text-center">
                        <h1 className="text-6xl font-extrabold text-pink-600 mb-8 tracking-tight">About Us</h1>
                        <div className="flex justify-center items-center gap-16">
                            <img
                                src="/Images/newlogo.png"
                                alt="TaleScape Logo"
                                className="h-30 w-auto"
                            />
                        </div>
                        <p className="text-xl text-black leading-relaxed">
                            Welcome to <strong className="text-pink-700 text-2xl">TaleScape</strong>, your ultimate platform for creating captivating and personalized storybooks!
                            We believe every story should be as unique as its storyteller. Our innovative storybook generator empowers you
                            to craft meaningful narratives for children, families, and friends with just a few clicks.
                        </p>
                        <p className="text-xl text-black leading-relaxed">
                            Whether you’re a parent, teacher, or someone who loves storytelling, our platform provides customizable tools to bring your ideas to life.
                        </p>
                    </div>
                </div>

                {/* Why TaleScape Section */}
                <div className="w-full bg-pink-50 py-16">
                    <div className="max-w-5xl mx-auto px-8">
                        <h2 className="text-5xl font-bold text-pink-600 mb-8 text-center">Why Choose TaleScape?</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <li className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
                                <h3 className="text-xl font-semibold text-pink-700 mb-2">Personalized Storytelling</h3>
                                <p className="text-black">Create stories tailored to your characters, settings, and themes.</p>
                            </li>
                            <li className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
                                <h3 className="text-xl font-semibold text-pink-700 mb-2">Easy-to-Use Interface</h3>
                                <p className="text-black">No technical skills are needed! Just select your preferences and let our generator do the magic.</p>
                            </li>
                            <li className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
                                <h3 className="text-xl font-semibold text-pink-700 mb-2">Wide Range of Themes</h3>
                                <p className="text-black">From fantasy adventures to heartwarming family tales, we have something for everyone.</p>
                            </li>
                            <li className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
                                <h3 className="text-xl font-semibold text-pink-700 mb-2">Shareable</h3>
                                <p className="text-black">Share your storybooks or explore what others created in our community.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Infinite Scroll Section */}
                <div className="w-full bg-white py-16">
                    <div className="max-w-5xl mx-auto px-8">
                        <h2 className="text-5xl font-bold text-pink-600 mb-8 text-center">Technologies We Use</h2>
                        <div className="relative h-32 overflow-hidden">
                            <div className="flex gap-6 animate-scroll whitespace-nowrap">
                                <img src="/Tools/react-banner.png" alt="React" className="h-20" />
                                <img src="/Tools/tailwind.jpg" alt="Tailwind CSS" className="h-20" />
                                <img src="/Tools/drizzle.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/next.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/new-gemini.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/replicate.jpg" alt="Tailwind CSS" className="h-20 mb-4" />
                                <img src="/Tools/clerk.jpg" alt="Tailwind CSS" className="h-16 pt-4" />
                                {/* Repeat images for seamless scrolling */}
                                <img src="/Tools/react-banner.png" alt="React" className="h-20" />
                                <img src="/Tools/tailwind.jpg" alt="Tailwind CSS" className="h-20" />
                                <img src="/Tools/drizzle.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/next.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/new-gemini.png" alt="Tailwind CSS" className="h-28 pb-6" />
                                <img src="/Tools/replicate.jpg" alt="Tailwind CSS" className="h-20 mb-4" />
                                <img src="/Tools/clerk.jpg" alt="Tailwind CSS" className="h-16 pt-4 " />
                                <img src="/Tools/react-banner.png" alt="React" className="h-20" />
                                <img src="/Tools/tailwind.jpg" alt="Tailwind CSS" className="h-20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Developers Section */}
                <div className="w-full bg-pink-100 py-16">
                    <div className="max-w-6xl mx-auto px-8 text-center">
                        <h2 className="text-5xl font-bold text-pink-600">Meet Our Developers</h2>

                        {/* {Developer1} */}
                        <div className="flex items-center mt-10">
                            <img
                                className="bg-transparent"
                                width={400}
                                src="/Images/rhaz.png"
                                alt="Team with open book and rainbow"
                            />
                            <div className="bg-pink-100 ml-32 -mt-2">
                                <p className="text-5xl text-black">Rhazel Jay Gumacal</p>
                                <p className="text-4xl text-black mt-2 ">"Rhaz"</p>
                                <p className="text-3xl text-black mt-4">Team Leader / Front-End Developer</p>
                            </div>
                        </div>
                        {/* {Developer2} */}
                        <div className="flex items-center justify-end mt-20">
                            <div className="bg-pink-100 mr-20">
                                <p className="text-5xl text-black">Regino Balogo Jr.</p>
                                <p className="text-4xl text-black mt-2">"Reg"</p>
                                <p className="text-3xl text-black mt-4">Project Manager / Full-Stack Developer / Quality Assurance</p>
                            </div>
                            <img
                                className="bg-transparent"
                                width={450}
                                src="/Images/Reg.png"
                                alt="Team with open book and rainbow"
                            />
                        </div>
                        {/* {Developer3} */}
                        <div className="flex items-center justify-start mt-16">
                            <img
                                className="bg-transparent w-96"
                                src="/Images/Deyb.png"
                                alt="Team with open book and rainbow"
                            />
                            <div className="bg-pink-100 ml-32">
                                <p className="text-5xl text-black">Lemmuel Dave Dañosos</p>
                                <p className="text-4xl text-black mt-2">"Lem"</p>
                                <p className="text-3xl text-black mt-4">Graphic Designer / Front-End Developer / Documentator</p>
                            </div>
                        </div>
                        {/* {Developer4} */}
                        <div className="flex items-center justify-end mt-20">
                            <div className="bg-pink-100 mr-16">
                                <p className="text-5xl text-black">Christian Angelo Panique</p>
                                <p className="text-4xl text-black mt-2">"Tian"</p>
                                <p className="text-3xl text-black mt-4">Documentator</p>
                            </div>
                            <img
                                className="bg-transparent"
                                width={500}
                                src="/Images/Tian.png"
                                alt="Team with open book and rainbow"
                            />
                        </div>
                        {/* {Developer5} */}
                        <div className="flex items-center justify-start mt-10">
                            <img
                                className="bg-transparent"
                                src="/Images/Ethan.png"
                                width={550}
                                alt="Team with open book and rainbow"
                            />
                            <div className="bg-pink-100 ml-24">
                                <p className="text-5xl text-black">Ethan Gabriel Consio</p>
                                <p className="text-4xl text-black mt-2">"Tan"</p>
                                <p className="text-3xl text-black mt-4">Full-Stack Developer</p>
                            </div>
                        </div>

                        {/* {Talescape Boys} */}
                        <h2 className="text-5xl font-bold text-pink-600 mt-48">We Are Talescape</h2>
                        <img
                            className="mt-10"
                            src="/Images/Taleboys3.png"
                            alt="Team with open book and rainbow"
                        />
                    </div>
                </div>

                {/* {Wvsu LOgo} */}
                <div className="flex flex-col items-center gap-11 bg-white py-16">
                    <h2 className="text-5xl font-medium text-primary mb-8">Partnered With:</h2>
                    {/* Adjusted logo sizes */}
                    <div className="flex flex-wrap justify-center gap-8 mb-30">
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition w-72 flex flex-col items-center">
                            <img
                                src="/wvsulogo/wvsu_logo.png" // Replace with the actual path to the logo
                                alt="WVSU Logo"
                                className="h-44 w-auto"
                            />
                            <p className="text-black mt-4 text-center text-lg">West Visayas State University</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition w-72 flex flex-col items-center">
                            <img
                                src="/wvsulogo/CICT.png" // Replace with the actual path to the logo
                                alt="CICT Logo"
                                className="h-40 w-auto"
                            />
                            <p className="text-black mt-4 text-start ml-0 text-lg">College of Information and <br />Communications Technology</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;
