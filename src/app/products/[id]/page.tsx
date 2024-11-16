"use client"

import ImageGallery from '../../../components/custom/ImageGallery';
import ProductDetails from '../../../components/custom/ProductDetails';
import ProductDescription from '../../../components/custom/ProductDescription';
import CustomerReviews from '../../../components/custom/CustomerReviews';
import Navbar from '@/components/custom/Navbar';

const ProductDetailsPage: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <ImageGallery
            images={[
                'https://www.goodeeworld.com/cdn/shop/products/Goodee-Berea-College-Shakerbraid-Multicolor_1296x.jpg?v=1632945092',
                'https://www.goodeeworld.com/cdn/shop/products/Goodee-Berea-College-Shakerbraid-Multicolor-2_1296x.jpg?v=1632945096',
                'https://www.goodeeworld.com/cdn/shop/products/Goodee-Berea-College-Shakerbraid-Multicolor-3_1296x.jpg?v=1632945100',
            ]}
            />

            {/* Product Details */}
            <ProductDetails
            title="Shakerbraid Multicolor"
            price="$80.00"
            seller="Berea College"
            rating={4.9}
            reviewsCount={13}
            quantity={1}
            onAddToCart={() => console.log('Added to Cart')}
            />
        </div>

        <div className="mt-10">
            {/* Product Description */}
            <ProductDescription
            description="Building a collection of plastic-free house cleaning tools..."
            features={['Handcrafted', 'Eco-friendly', 'Durable']}
            shippingInfo="Free returns within 30 days."
            causes={['Environmental Conservation', 'Handmade Craft Support']}
            />
        </div>

        <div className="mt-10">
            {/* Customer Reviews */}
            <CustomerReviews
            reviews={[
                {
                name: 'Anne M.',
                rating: 5,
                date: '10/28/23',
                comment: 'I do love a good broom!',
                helpful: 0,
                notHelpful: 0,
                },
                {
                name: 'Kristine A.',
                rating: 5,
                date: '08/22/23',
                comment: 'Keeps things looking lovely...',
                helpful: 0,
                notHelpful: 0,
                },
            ]}
            />
        </div>
        </div>
    </>
  );
};

export default ProductDetailsPage;