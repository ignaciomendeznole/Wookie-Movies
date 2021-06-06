/**
 *
 * @param rating Movie rating
 * @returns number based on movie rating to be used for calculating number of stars for each movie
 */
export const useRatingParser = (rating: number) => {
  if (rating < 2) {
    return 1;
  } else if (rating >= 2 && rating < 4.5) {
    return 2;
  } else if (rating >= 4.5 && rating < 6.5) {
    return 3;
  } else if (rating >= 6.5 && rating < 9) {
    return 4;
  } else {
    return 5;
  }
};
