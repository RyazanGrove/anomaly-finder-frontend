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
  gameTitle = "Where's Wally?"; // Will change after find enough new images
  wallyImageUrl = "assets/images/wally-reference.jpg";
  rules: string[] = [
    "1. The objective is to find Wally in a large, detailed image filled with people, animals, and objects.",
    "2. Wally is always wearing a red and white striped shirt, a bobble hat, and glasses.",
    "3. The image will be filled with distractions, making Wally hard to spot.",
    "4. Use your mouse or touch screen to navigate through the image and click on Wally when you find him.",
    "5. You can zoom in and out on the image to get a better view of specific areas.",
    "6. Once you find Wally, the game will confirm your selection showing a red circle around Wally, and you will be given a score based on how quickly you found him.",
    "7. The game has multiple images, and the sequence is generated automatically.",
    //"7. The game can have multiple levels, with Wally becoming progressively harder to find as you advance.", // will be implemented later
    "8. Enjoy the game and try to improve your time with each level!"
  ];
  scores : string[] = [
    "1. You get 1000 points every time you find Wally in the image.",
    "2. Additionally you get 10,000 points minus 100 points for every second you spend searching for Wally, but not less than 0."
  ];
}
