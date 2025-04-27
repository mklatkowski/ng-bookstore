import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule]
})
export class BookEditComponent {
  readonly book: Book;
  readonly form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly booksService: BooksService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];

    this.form = this.fb.group({
      title: [this.book.title, [Validators.required, Validators.maxLength(50)]],
      author: [this.book.author, [Validators.required, Validators.maxLength(50)]],
      year: [this.book.year, [Validators.required, Validators.min(1000), Validators.max(2023)]],
      description: [this.book.description, [Validators.maxLength(1000)]]
    });
  }

  save(): void {
    if (this.form.valid && this.form.dirty) {
      const updatedBook: Book = { ...this.book, ...this.form.value };
      this.booksService.saveBook(updatedBook).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
