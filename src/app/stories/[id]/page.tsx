"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/custom/Navbar";

const StoryPage: React.FC = () => {
  const { id } = useParams();
  const [story, setStory] = useState<any | null>(null);

  useEffect(() => {
    const stories = JSON.parse(localStorage.getItem("stories") || "[]");
    const foundStory = stories.find((story: any) => story.id === Number(id));
    setStory(foundStory);
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center space-y-6">
          <img
            src={story.imageUrl}
            alt={story.title}
            className="w-full max-w-4xl rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold">{story.title}</h1>
          <p className="text-gray-600 text-lg">{story.description}</p>
          <div className="text-gray-800 text-base leading-7 max-w-3xl">
            {story.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryPage;