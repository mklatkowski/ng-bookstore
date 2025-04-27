import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';
import { Review } from '../model/review';

export const reviewsResolver: ResolveFn<Review[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const bookId = Number(route.paramMap.get('bookId'));
  console.log(`Fetching reviews for book with ID: ${bookId}`);
  return inject(ReviewsService).getReviewsForBook(bookId);
};
