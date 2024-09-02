import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageComponent } from "./components/image/image.component";
import { ImageInfoService } from '../../services/image-info.service';
import { ImageInfo } from '../../models/image-info';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from "./components/stopwatch/stopwatch.component";
import { ControlPanelComponent } from "./components/control-panel/control-panel.component";
import { ScorePopupComponent } from './components/score-popup/score-popup.component';
import { BriefRulesComponent } from "./components/brief-rules/brief-rules.component";
import { ScoreDisplayComponent } from './components/score-display/score-display.component';

@Component({
  selector: 'app-game-manager',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    StopwatchComponent,
    ControlPanelComponent,
    ScorePopupComponent,
    BriefRulesComponent,
    ScoreDisplayComponent
  ],
  templateUrl: './game-manager.component.html',
  styleUrl: './game-manager.component.scss'
})
export class GameManagerComponent implements OnInit {

  @ViewChild(StopwatchComponent) stopwatch!: StopwatchComponent;
  @ViewChild(ControlPanelComponent) controlPanel!: ControlPanelComponent;

  private imageInfos! : ImageInfo[];
  public imageInfo! : ImageInfo;
  private currentImageInfo = 0;
  score = 0;
  showPopup = false;
  gameStarted = false;

  constructor(private imageInfoService: ImageInfoService) {}

  ngOnInit() {
    this.imageInfoService.getGeneratedImageInfoSequence().subscribe(
      (i: ImageInfo[])=> this.imageInfos = i,
      error => console.log("Error fetching generated sequence", error)
    );
  }

  onStartGame() {
    this.gameStarted = true;
    this.imageInfo = this.imageInfos[this.currentImageInfo++];
    this.stopwatch.start();
  }

  onNextImage() {
    this.stopwatch.resetAndStart();
    this.imageInfo = this.imageInfos[this.currentImageInfo++];
  }

  getI(i: number) : ImageInfo {
    return this.imageInfos[i]
  }

  checkExistenceOfNextImage() {
    if(this.currentImageInfo >= this.imageInfos.length){
      this.controlPanel.makeFinishButtonActive();
    } else {
      this.controlPanel.makeNextImageButtonActive();
    }
  }
  
  onTargetFound() {
    this.stopwatch.stop();
    this.score += 1000;
    const scorePenalty = this.stopwatch.getTotalNumberOfSeconds() * 100;
    this.score += scorePenalty >= 10000 ? 0 : 10000 - scorePenalty;
    this.checkExistenceOfNextImage();
  }

  onFinishGame() {
    this.openPopup()
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
