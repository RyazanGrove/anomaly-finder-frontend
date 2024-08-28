import { Component } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { Score } from '../../models/score';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {

  scores: Score[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores(): void {
    this.scoreService.getScores().subscribe((scores: Score[]) => {
      this.scores = scores;
    },
    (error) => {
      console.error('Error fetching scores', error);
    })
  }
}
