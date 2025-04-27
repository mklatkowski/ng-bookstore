import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../model/book';
import { Review } from '../../../reviews/model/review';
import { ReviewComponent } from '../../../reviews/components/review.component';
import { CommonModule } from '@angular/common';  // Dodaj CommonModule

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  standalone: true,
  imports: [RouterLink, ReviewComponent, CommonModule]  // Dodaj CommonModule
})
export class BookDetailComponent {
  readonly book: Book;
  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
