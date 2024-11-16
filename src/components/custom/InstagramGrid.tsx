interface InstagramPost {
    imageUrl: string;
    altText: string;
  }
  
  interface InstagramGridProps {
    posts: InstagramPost[];
  }
  
  const InstagramGrid: React.FC<InstagramGridProps> = ({ posts }) => {
    return (
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Follow Us on Instagram
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post, index) => (
              <div key={index} className="relative group">
                {/* Image */}
                <img
                  src={post.imageUrl}
                  alt={post.altText}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {/* Instagram Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.061 2.633.337 3.608 1.312.975.975 1.251 2.243 1.312 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.061 1.366-.337 2.633-1.312 3.608-.975.975-2.243 1.251-3.608 1.312-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.061-2.633-.337-3.608-1.312-.975-.975-1.251-2.243-1.312-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.061-1.366.337-2.633 1.312-3.608.975-.975 2.243-1.251 3.608-1.312 1.265-.059 1.645-.07 4.849-.07m0-2.163C8.741 0 8.332.015 7.052.07 5.762.126 4.614.397 3.608 1.403c-1.007 1.006-1.278 2.154-1.334 3.444C2.015 6.746 2 7.154 2 12c0 4.846.015 5.254.07 6.534.056 1.29.327 2.438 1.334 3.444 1.006 1.007 2.154 1.278 3.444 1.334 1.28.056 1.689.07 6.534.07 4.846 0 5.254-.015 6.534-.07 1.29-.056 2.438-.327 3.444-1.334 1.007-1.006 1.278-2.154 1.334-3.444.056-1.28.07-1.689.07-6.534 0-4.846-.015-5.254-.07-6.534-.056-1.29-.327-2.438-1.334-3.444-1.006-1.007-2.154-1.278-3.444-1.334-1.28-.056-1.689-.07-6.534-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 1 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.881 0 1.44 1.44 0 1 0 2.881 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default InstagramGrid;