import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;
  private running: boolean = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.intervalId = setInterval(() => {
        this.incrementTime();
      }, 1000);
    }
  }

  stop() {
    if (this.running) {
      this.running = false;
      clearInterval(this.intervalId);
    }
  }

  reset() {
    this.stop();
    this.minutes = 0;
    this.seconds = 0;
  }

  resetAndStart() {
    this.reset();
    this.start();
  }

  private incrementTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
  }

  getTotalNumberOfSeconds(): number{
    return this.minutes * 60 + this.seconds;
  }
}
