import { TestBed } from '@angular/core/testing';
import { reviewsResolver } from './reviews-resolver.resolver';
import { ResolveFn } from '@angular/router';
import { Review } from '../model/review';

describe('ReviewsResolver', () => {
  const reviewsResolveFn: ResolveFn<Review[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => reviewsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(reviewsResolveFn).toBeTruthy();
  });
});
