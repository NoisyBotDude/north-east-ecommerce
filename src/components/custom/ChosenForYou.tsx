interface ProductCard {
    title: string;
    price: string;
    imageUrl: string;
    rating: number; // Use stars (e.g., 4 for 4 stars)
    by: string;
  }
  
  interface ChosenForYouProps {
    products: ProductCard[];
  }
  
  const ChosenForYou: React.FC<ChosenForYouProps> = ({ products }) => {
    return (
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Chosen For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.title} className="text-center">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="font-bold">{product.title}</p>
                <p className="text-gray-500">by {product.by}</p>
                <p className="text-lg font-medium">{product.price}</p>
                <div className="flex justify-center space-x-1 mt-2">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ChosenForYou;