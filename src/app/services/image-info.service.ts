import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ImageInfo } from '../models/image-info';

@Injectable({
  providedIn: 'root'
})
export class ImageInfoService {
  
  private baseUrl = environment.baseUrl;
  private generateSequenceEndpoint = environment.generateSequenceEndpoint;

  private http = inject(HttpClient);

  /**
   * Gets generated sequence of image metadata for a game.
   * 
   * @returns {Observable<User>} - An observable of the array of image infos.
   */
  public getGeneratedImageInfoSequence(): Observable<ImageInfo[]>{
    const url = `${this.baseUrl}${this.generateSequenceEndpoint}`;
    return this.http.get<ImageInfo[]>(url);
  }
}
