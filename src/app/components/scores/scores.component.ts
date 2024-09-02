import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { Score } from '../../models/score';
import { CommonModule } from '@angular/common';
import { ScoreLineComponent } from './components/score-line/score-line.component';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [CommonModule, ScoreLineComponent],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent implements OnInit {

  scores: Score[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores(): void {
    this.scoreService.getScores().subscribe(
      (scores: Score[]) => this.scores = scores.sort((a, b) => b.score - a.score),
      error => console.error('Error fetching scores', error))
  }
}
