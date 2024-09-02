import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Score } from '../models/score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private baseUrl = environment.baseUrl;
  private scoreEndpoint = environment.scoreEndpoint;

  private http = inject(HttpClient);

  /**
   * Gets all the scores stored in backend.
   * 
   * @returns {Observable<Score[]>} - An observable of the array of scores.
   */
  getScores(): Observable<Score[]> {
    const url = `${this.baseUrl}${this.scoreEndpoint}`;
    return this.http.get<Score[]>(url);
  }

  /**
   * Sends a request to backend to save a new score.
   * 
   * @param {number} score - The score of the user.
   * @param {string} nickname - The nickname of the user.
   */
  postScore(score: number, nickname: string) {
    const payload: Score = { id: 0, score: score, nickname: nickname };
    const url = `${this.baseUrl}${this.scoreEndpoint}`;
    return this.http.post<void>(url, payload);
  }
  
}
