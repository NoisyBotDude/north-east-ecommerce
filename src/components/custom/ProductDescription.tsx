interface ProductDescriptionProps {
    description: string;
    features: string[];
    shippingInfo: string;
    causes: string[];
  }
  
  const ProductDescription: React.FC<ProductDescriptionProps> = ({
    description,
    features,
    shippingInfo,
    causes,
  }) => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg">Description</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Features & Details</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Shipping & Returns</h3>
          <p className="text-gray-600">{shippingInfo}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Causes This Product Supports</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProductDescription;