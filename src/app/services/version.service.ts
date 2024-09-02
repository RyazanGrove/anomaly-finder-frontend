import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Version } from '../models/version';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private baseUrl = environment.baseUrl;
  private versionEndpoint = environment.versionEndpoint;

  private http = inject(HttpClient)

  getBackendVersion(): Observable<Version> {
    const url = `${this.baseUrl}${this.versionEndpoint}`;
    return this.http.get<Version>(url);
  }

  getFrontendVersion(): string {
    return environment.version;
  }
}