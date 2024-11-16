interface ProductDetailsProps {
    title: string;
    price: string;
    seller: string;
    rating: number;
    reviewsCount: number;
    quantity: number;
    onAddToCart: () => void;
  }
  
  const ProductDetails: React.FC<ProductDetailsProps> = ({
    title,
    price,
    seller,
    rating,
    reviewsCount,
    quantity,
    onAddToCart,
  }) => {
    return (
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl font-semibold text-gray-800">{price}</p>
        <p className="text-sm text-gray-600">
          By <a href="#" className="text-blue-600 hover:underline">{seller}</a>
        </p>
        <div className="flex items-center space-x-1">
          <p className="text-yellow-500">{'★'.repeat(Math.round(rating))}</p>
          <p className="text-gray-600">({reviewsCount} Reviews)</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="w-10 h-10 border rounded-lg"
            onClick={() => console.log('Decrease quantity')}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="w-10 h-10 border rounded-lg"
            onClick={() => console.log('Increase quantity')}
          >
            +
          </button>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductDetails;