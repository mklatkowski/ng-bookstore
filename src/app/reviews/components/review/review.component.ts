import { Component, Input } from '@angular/core';
import { Review } from '../../model/review';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ReviewComponent {
  @Input() review!: Review;
}
