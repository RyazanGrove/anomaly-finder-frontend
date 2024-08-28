import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ImageComponent } from "./components/image/image.component";
import { ImageInfoService } from '../../services/image-info.service';
import { ImageInfo } from '../../models/image-info';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from "./components/stopwatch/stopwatch.component";
import { ControlPanelComponent } from "./components/control-panel/control-panel.component";

@Component({
  selector: 'app-game-manager',
  standalone: true,
  imports: [CommonModule, ImageComponent, StopwatchComponent, ControlPanelComponent],
  templateUrl: './game-manager.component.html',
  styleUrl: './game-manager.component.scss'
})
export class GameManagerComponent implements OnInit {

  @ViewChild(StopwatchComponent) stopwatch!: StopwatchComponent;
  @ViewChild(ControlPanelComponent) controlPanel!: ControlPanelComponent;

  public imageInfos! : ImageInfo[];
  public imageInfo! : ImageInfo;
  public currentImageInfo: number = 0;

  constructor(private imageInfoService: ImageInfoService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.imageInfoService.getGeneratedImageInfoSequence().subscribe((i: ImageInfo[])=> {
      this.imageInfos = i;
    })
  }

  onStartGame() {
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
    this.checkExistenceOfNextImage();
  }

  onFinishGame() {
    // show popup and write score
  }
}
