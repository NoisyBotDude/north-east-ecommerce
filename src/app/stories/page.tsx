"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";

const StoriesPage: React.FC = () => {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem("stories") || "[]");
    setStories(storedStories);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl">{story.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{story.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoriesPage;