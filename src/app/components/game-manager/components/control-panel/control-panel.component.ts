import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

  @Output() startGame: EventEmitter<void> = new EventEmitter();
  @Output() nextImage: EventEmitter<void> = new EventEmitter();
  @Output() finishGame: EventEmitter<void> = new EventEmitter();

  startButtonIsDisabled: boolean = false;
  nextImageButtonIsDisabled: boolean = true;
  finishButtonIsDisabled: boolean = true;

  startButtonPressed() {
    this.startButtonIsDisabled = true;
    this.startGame.emit();
  }

  nextImageButtonPressed() {
    this.nextImageButtonIsDisabled = true;
    this.nextImage.emit();
  }

  finishButtonPressed() {
    this.finishGame.emit();
  }

  makeNextImageButtonActive() {
    this.nextImageButtonIsDisabled = false;
  }

  makeFinishButtonActive() {
    this.finishButtonIsDisabled = false;
  }
}
