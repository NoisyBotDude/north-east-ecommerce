interface StoryCard {
    title: string;
    description: string;
    imageUrl: string;
    link: string; // Link to the full story
  }
  
  interface GoodStoriesProps {
    stories: StoryCard[];
  }
  
  const GoodStories: React.FC<GoodStoriesProps> = ({ stories }) => {
    return (
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Good Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.title}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                  <a
                    href={story.link}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Read More Good Stories
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default GoodStories;