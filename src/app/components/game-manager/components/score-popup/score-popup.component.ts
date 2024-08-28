import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreService } from '../../../../services/score.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './score-popup.component.html',
  styleUrl: './score-popup.component.scss'
})
export class ScorePopupComponent {
  @Input() score!: number;
  nickname: string = '';
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  constructor(private scoreService: ScoreService) {}

  submitScore() {
    const payload = { score: this.score, nickname: this.nickname };
    this.scoreService.postScore(this.score, this.nickname).subscribe(
      response => {
        // redirect to scores tab
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
