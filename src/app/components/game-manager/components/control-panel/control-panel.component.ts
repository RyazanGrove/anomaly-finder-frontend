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

  @Output() startGame = new EventEmitter<void>();
  @Output() nextImage = new EventEmitter<void>();
  @Output() finishGame = new EventEmitter<void>();

  startButtonIsDisabled = false;
  nextImageButtonIsDisabled = true;
  finishButtonIsDisabled = true;

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
