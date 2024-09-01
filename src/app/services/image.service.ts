import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private baseUrl = environment.baseUrl;
  private imageEndpoint = environment.imageEndpoint;

  private http = inject(HttpClient)
 
  getImageByUrl(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  loadImage(imageId: string): Observable<string> {
    const url = `${this.baseUrl}${this.imageEndpoint}/${imageId}`;
    return this.getImageByUrl(url).pipe(
      map((blob: Blob) => URL.createObjectURL(blob))
    );
  }
}
