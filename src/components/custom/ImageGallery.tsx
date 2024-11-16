interface ImageGalleryProps {
    images: string[];
  }
  
  const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
      <div className="flex flex-col items-center">
        <img
          src={images[0]}
          alt="Main Product"
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Thumbnail ${index}`}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageGallery;