// review-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ReviewAddComponent {
  reviewForm: FormGroup;
  bookId: number;

  constructor(
    private fb: FormBuilder,
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.bookId = Number(this.activatedRoute.snapshot.paramMap.get('bookId'));

    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      rate: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const newReview = {
        ...this.reviewForm.value,
        forBook: this.bookId
      };

      this.reviewsService.addReview(newReview).subscribe(() => {
        this.router.navigate([`/books/${this.bookId}/reviews`]);
      });
    }
  }
}
