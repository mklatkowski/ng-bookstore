import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review';
import { Observable } from 'rxjs';

const reviewsApiPrefix = '/api/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private readonly http: HttpClient) { }

  getReviewsForBook(bookId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${reviewsApiPrefix}?forBook=${bookId}`);
  }
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(reviewsApiPrefix, review);
  }
}
