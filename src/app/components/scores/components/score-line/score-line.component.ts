import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-line',
  standalone: true,
  imports: [],
  templateUrl: './score-line.component.html',
  styleUrl: './score-line.component.scss'
})
export class ScoreLineComponent {

  @Input() nickname!: string;
  @Input() score!: number;
  
}
