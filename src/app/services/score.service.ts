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

  getScores(): Observable<Score[]> {
    const url = `${this.baseUrl}${this.scoreEndpoint}`;
    return this.http.get<Score[]>(url);
  }

  postScore(score: number, nickname: string) {
    const payload: Score = { id: 0, score: score, nickname: nickname };
    const url = `${this.baseUrl}${this.scoreEndpoint}`;
    return this.http.post<void>(url, payload);
  }
  
}
