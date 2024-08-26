import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private baseUrl = environment.baseUrl;
  private versionEndpoint = environment.versionEndpoint;

  private http = inject(HttpClient)

  getBackendVersion(): Observable<{ version: string }> {
    const url = `${this.baseUrl}${this.versionEndpoint}`;
    return this.http.get<{ version: string }>(url);
  }

  getFrontendVersion(): string {
    return '1.0.0';
  }
}