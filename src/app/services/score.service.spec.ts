import { TestBed } from '@angular/core/testing';
import { ScoreService } from './score.service';
import { HttpClient } from '@angular/common/http';
import { Score } from '../models/score';
import { lastValueFrom, of } from 'rxjs';
import { environment } from '../../environments/environment';

describe('ScoreService', () => {
  let service: ScoreService;
  let httpClientMock: jest.Mocked<HttpClient>;

  const scoreUrl = environment.baseUrl + environment.scoreEndpoint;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
      post: jest.fn()
    } as any;

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientMock }
      ]
    });
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch array of scores', async () => {
    const expectedReturnValue = [
      {
        id: 0,
        nickname: "John Doe",
        score: 10000
      },
      {
        id: 1,
        nickname: "Jane Doe",
        score: 18000
      }
    ] as Score[];
    httpClientMock.get.mockReturnValue(of(expectedReturnValue));

    const returnValue = service.getScores();

    await expect(lastValueFrom(returnValue)).resolves.toEqual(expectedReturnValue);
    expect(httpClientMock.get).toHaveBeenCalledWith(scoreUrl);
  })

  it('should send new score', () => {
    const score: number = 10000;
    const nickname: string = 'John Doe';
    const expectedPayloadValue = {
      id: 0,
      nickname: "John Doe",
      score: 10000
    } as Score;

    service.postScore(score, nickname);
    
    expect(httpClientMock.post).toHaveBeenCalledWith(scoreUrl, expectedPayloadValue);
  })
});
