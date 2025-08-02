type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex items-center">
      <span className="text-yellow-500">{'★'.repeat(filledStars)}</span>
      <span className="text-gray-400">{'★'.repeat(emptyStars)}</span>
    </div>
  );
}
