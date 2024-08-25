import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../../services/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
  @Input() imageId: number = 1;
  image: string | undefined;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.loadImage(this.imageId).subscribe(image => {
      this.image = image;
    })
  }
}
