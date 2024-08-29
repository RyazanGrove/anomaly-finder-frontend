import { Component } from '@angular/core';

@Component({
  selector: 'app-brief-rules',
  standalone: true,
  imports: [],
  templateUrl: './brief-rules.component.html',
  styleUrl: './brief-rules.component.scss'
})
export class BriefRulesComponent {
  gameTitle: string = "Where's Wally?"; // // Will change after find enough new images
  briefRules: string = "Find Wally in the image. Wally is always wearing a red and white striped shirt, a bobble hat, and glasses. Good luck!";
  wallyImageUrl: string = "assets/images/wally-reference.jpg";
}
