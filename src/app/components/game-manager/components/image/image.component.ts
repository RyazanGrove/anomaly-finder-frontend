import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ImageService } from '../../../../services/image.service';
import { CommonModule } from '@angular/common';
import { ImageInfo } from '../../../../models/image-info';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnChanges {

  @Input() data!: ImageInfo;
  @Output() targetFound = new EventEmitter<void>();

  image: string | undefined;
  circleCenterX = 0;
  circleCenterY = 0;
  showTarget = false;

  constructor(private imageService: ImageService) { }

  ngOnChanges(){
    this.imageService.loadImage(this.data.fileName).subscribe(image => {
      this.image = image;
    })
    this.showTarget = false;
  }

  onImageClick(event: MouseEvent): void {
    const imageElement = event.target as HTMLImageElement;

    const boundingRect = imageElement.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;

    this.checkForFoundTarget(x,y, imageElement);
  }

  checkForFoundTarget(x: number, y: number, imageElement: any){
    const target = this.data.target;

    if(target.xMin <= x && x <= target.xMax && target.yMin <= y && y <= target.yMax){
      this.showTarget = true;
      
      // User can scale or move picture. Important to adjust position every time
      const answer = this.getImagePosition(imageElement);
      this.circleCenterX = (target.xMin + target.xMax) / 2 + answer.x - 35; // offset x to center circle on target
      this.circleCenterY = (target.yMin + target.yMax) / 2 + answer.y - 35; // offset y to center circle on target

      this.targetFound.emit();
    }
  }

  getImagePosition(element: any) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  }
}
