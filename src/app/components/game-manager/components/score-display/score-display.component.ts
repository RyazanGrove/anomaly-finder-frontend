import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-display',
  standalone: true,
  imports: [],
  templateUrl: './score-display.component.html',
  styleUrl: './score-display.component.scss'
})
export class ScoreDisplayComponent {

  @Input() score = 0;

}
