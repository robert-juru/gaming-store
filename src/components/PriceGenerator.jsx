export const generatePrice = (releaseYear, popularity, avgRating) => {
  const currentYear = new Date().getFullYear();
  const ageOfGame = currentYear - releaseYear;
  const basePrice = 59;
  const ratingCountFactor = (1 / popularity) * 6600;
  const ratingFactor = 4.69 - avgRating;
  const popularityAdjustment = 2 * ratingCountFactor;
  const ratingAdjustment = 10 * ratingFactor;
  let price =
    basePrice - ageOfGame * 2 - popularityAdjustment - ratingAdjustment;
  price = Math.max(price, 5);
  const roundedPrice = Math.round(price / 5) * 5 + 0.99;

  return roundedPrice;
};
