import { Routes } from '@angular/router';
import { BookListComponent } from "./books/components/book-list/book-list.component";
import { bookListResolver } from "./books/resolvers/book-list.resolver";
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';
import { bookDetailResolver } from './books/resolvers/book-details.resolver';
import { BookEditComponent } from './books/components/book-edit/book-edit.component';
import { reviewsResolver } from './reviews/resolvers/reviews-resolver.resolver';
import { ReviewAddComponent } from './reviews/components/review-add/review-add.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: bookListResolver
    }
  },
  {
    path: 'books/:bookId/reviews',
    component: BookDetailComponent,
    resolve: {
      book: bookDetailResolver,
      reviews: reviewsResolver
    }
  },
  {
    path: 'books/:bookId/edit',
    component: BookEditComponent,
    resolve: {
      book: bookDetailResolver
    }
  },
  {
    path: 'books/:bookId/reviews/add',
    component: ReviewAddComponent
  }
];
