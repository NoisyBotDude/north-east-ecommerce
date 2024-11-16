interface HeroSectionProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
  }
  
  const HeroStorySection: React.FC<HeroSectionProps> = ({
    title,
    description,
    buttonText,
    imageUrl,
  }) => {
    return (
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{description}</p>
          <button className="bg-white text-black py-2 px-6 rounded-lg">
            {buttonText}
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroStorySection;