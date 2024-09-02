import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  public frontendVersion!: string;
  public backendVersion!: string;

  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
    this.frontendVersion = this.versionService.getFrontendVersion();
    this.versionService.getBackendVersion().subscribe(
      response => this.backendVersion = response.version
    );
  }
}
