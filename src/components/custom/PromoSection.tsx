interface PromoSectionProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrls: string[]; // Array for multiple images
  }
  
  const PromoSection: React.FC<PromoSectionProps> = ({
    title,
    description,
    buttonText,
    imageUrls,
  }) => {
    return (
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-64 rounded-lg"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="mb-6">{description}</p>
                    <button className="bg-white text-black py-2 px-6 rounded-lg">
                      {buttonText}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PromoSection;