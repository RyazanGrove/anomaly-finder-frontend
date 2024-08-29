import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  activeTab = 'main';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get the current path and highlight correct tab
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTab = this.router.url.substring(1);
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigateByUrl('/' + this.activeTab)
  }
}