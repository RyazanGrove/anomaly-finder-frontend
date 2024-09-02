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
 
  /**
   * Gets blob of the requested image by url.
   * 
   * @param {string} imageUrl - The url of the requested image.
   * @returns {Observable<Blob>} - An observable of the blob of the requested image.
   */
  getImageByUrl(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  /**
   * Gets string representation of requested image by file name.
   * 
   * @param {string} imageFileName - The name of the requested image.
   * @returns {Observable<string>} - An observable of the string representation of the requested image.
   */
  loadImage(imageFileName: string): Observable<string> {
    const url = `${this.baseUrl}${this.imageEndpoint}/${imageFileName}`;
    return this.getImageByUrl(url).pipe(
      map((blob: Blob) => URL.createObjectURL(blob))
    );
  }
}
