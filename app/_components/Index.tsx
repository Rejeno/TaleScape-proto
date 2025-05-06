// pages/index.tsx
import React from 'react';
import ContentSection from '../_components/ContentSection';
const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-100">

            <ContentSection
                title="Generate Your Stories"
                description="Generate thousands of unique stories using our ultimate story generator. Just enter some words about your story, and press the 'Generate Story' button. You can create a unique story within minutes to share with your friends. Writing stories has never been so easy! Try out our story generator and step-by-step story maker tool now!"
                image="/Images/giphy.webp" // Replace with actual image path
                altText="Story Generator Image"
                link="/dashboard"

            />
        </div>

    );
};

export default HomePage;
