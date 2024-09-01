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
  targetIsShown = false;

  constructor(private imageService: ImageService) { }

  ngOnChanges(){
    this.imageService.loadImage(this.data.fileName).subscribe(image => {
      this.image = image;
    })
    this.targetIsShown = false;
  }

  onImageClick(event: MouseEvent): void {
    if(!this.targetIsShown){
      const imageElement = event.target as HTMLImageElement;
      
      const boundingRect = imageElement.getBoundingClientRect();
      const x = event.clientX - boundingRect.left;
      const y = event.clientY - boundingRect.top;
      
      this.checkForFoundTarget(x,y, imageElement);
    }
  }

  // This function is not tight to a specific number because it could be reused later with different widths 
  checkForFoundTarget(x: number, y: number, imageElement: HTMLImageElement){
    const target = this.data.target;
    // Images have different dimensions and to make them consistent they are reshaped to 1024 width
    // Because of that the click coordinates should be changed according to the ratio 
    const imageRatio = this.getImageRatio(this.data.imageWidth, this.data.imageHeight, imageElement);
    x *= imageRatio.x;
    y *= imageRatio.y;

    if(target.xMin <= x && x <= target.xMax && target.yMin <= y && y <= target.yMax){
      this.targetIsShown = true;
      
      // User can scale or move picture. Important to adjust position every time
      const imagePosition = this.getImagePosition(imageElement);
      this.circleCenterX = (target.xMin + target.xMax) / imageRatio.x / 2 + imagePosition.x - 30; // offset x to center circle on target
      this.circleCenterY = (target.yMin + target.yMax) / imageRatio.y / 2 + imagePosition.y - 30; // offset y to center circle on target

      this.targetFound.emit();
    }
  }

  getImagePosition(element: HTMLImageElement) {
    const xPosition = (element.offsetLeft - element.scrollLeft + element.clientLeft);
    const yPosition = (element.offsetTop - element.scrollTop + element.clientTop);

    return { x: xPosition, y: yPosition };
  }

  getImageRatio(imageWidthOrigin: number, imageHeightOrigin: number, imageElement: HTMLImageElement){
    const widthRatio = imageWidthOrigin / imageElement.width;
    const heightRatio = imageHeightOrigin / imageElement.height;

    return { x: widthRatio, y: heightRatio };
  }
}
