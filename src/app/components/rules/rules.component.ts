import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {
  gameTitle: string = "Where's Wally?"; // Will change after find enough new images
  rules: string[] = [
    "1. The objective is to find Wally in a large, detailed image filled with people, animals, and objects.",
    "2. Wally is always wearing a red and white striped shirt, a bobble hat, and glasses.",
    "3. The image will be filled with distractions, making Wally hard to spot.",
    "4. Use your mouse or touch screen to navigate through the image and click on Wally when you find him.",
    "5. You can zoom in and out on the image to get a better view of specific areas.",
    "6. Once you find Wally, the game will confirm your selection, and you will be given a score based on how quickly you found him.",
    "7. The game can have multiple levels, with Wally becoming progressively harder to find as you advance.",
    "8. Enjoy the game and try to improve your time with each level!"
  ];
}
