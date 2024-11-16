interface GiftCard {
    title: string;
    imageUrl: string;
  }
  
  interface GiftSectionProps {
    cards: GiftCard[];
  }
  
  const GiftSection: React.FC<GiftSectionProps> = ({ cards }) => {
    return (
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Find the Perfect Gift</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.title} className="text-center">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-medium">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GiftSection;