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
  clickCoords: { x: number, y: number } | null = null;

  boundingRectLeft = 0;  
  boundingRectTop = 0;  

  constructor(private imageService: ImageService) { }

  ngOnChanges(){
    this.imageService.loadImage(this.data.fileName).subscribe(image => {
      this.image = image;
    })
  }

  onImageClick(event: MouseEvent): void {
    const imageElement = event.target as HTMLImageElement;

    const boundingRect = imageElement.getBoundingClientRect();
    this.boundingRectLeft = boundingRect.left;
    this.boundingRectTop = boundingRect.top;
    const x = event.clientX - this.boundingRectLeft;
    const y = event.clientY - this.boundingRectTop;

    this.clickCoords = {
      x: x,
      y: y
    }

    this.checkForFoundTarget(x,y);
  }

  checkForFoundTarget(x: number, y: number){
    const target = this.data.target;

    if(target.xMin <= x && x <= target.xMax && target.yMin <= y && target.yMax){
      this.targetFound.emit();
    }
  }
}
