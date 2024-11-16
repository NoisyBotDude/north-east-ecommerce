interface Review {
    name: string;
    rating: number;
    date: string;
    comment: string;
    helpful: number;
    notHelpful: number;
  }
  
  interface CustomerReviewsProps {
    reviews: Review[];
  }
  
  const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold">Customer Reviews</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-yellow-500">
            {(
              reviews.reduce((sum, review) => sum + review.rating, 0) /
              reviews.length
            ).toFixed(1)}{' '}
            ★
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Write A Review
          </button>
        </div>
        {reviews.map((review, index) => (
          <div key={index} className="border-t pt-4">
            <p className="font-bold">{review.name}</p>
            <div className="flex items-center space-x-1">
              <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
              <p className="text-sm text-gray-600">{review.date}</p>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-sm text-gray-500">
              Was this review helpful?{' '}
              <span className="text-blue-600">{review.helpful} Yes</span> |{' '}
              <span className="text-blue-600">{review.notHelpful} No</span>
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CustomerReviews;