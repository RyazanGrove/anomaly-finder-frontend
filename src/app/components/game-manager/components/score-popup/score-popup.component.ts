import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreService } from '../../../../services/score.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './score-popup.component.html',
  styleUrl: './score-popup.component.scss'
})
export class ScorePopupComponent {
  @Input() score!: number;
  nickname = '';
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  constructor(private scoreService: ScoreService, private router: Router) {}

  submitScore() {
    this.scoreService.postScore(this.score, this.nickname).subscribe(
      response => {
        // redirect to scores tab
        this.router.navigate(['/scores']);
      },
      error => {
        console.error('Error submitting score', error);
      }
    );
  }

  close() {
    this.closePopup.emit();
  }
}
