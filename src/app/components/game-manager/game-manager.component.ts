import { Component } from '@angular/core';
import { ImageComponent } from "./components/image/image.component";

@Component({
  selector: 'app-game-manager',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './game-manager.component.html',
  styleUrl: './game-manager.component.scss'
})
export class GameManagerComponent {
}
