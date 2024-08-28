import { TestBed } from '@angular/core/testing';
import { ImageInfoService } from './image-info.service';
import { HttpClient } from '@angular/common/http';
import { ImageInfo } from '../models/image-info';
import { lastValueFrom, of } from 'rxjs';
import { environment } from '../../environments/environment';

describe('ImageInfoService', () => {
  let service: ImageInfoService;
  let httpClientMock: jest.Mocked<HttpClient>;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    } as any;

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientMock }
      ]
    });
    service = TestBed.inject(ImageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch generated sequence of image infos', async () => {
    const expectedReturnValue = [
      {
        id: 0,
        fileName: "Wally",
        type: "jpg",
        imageWidth: 1440,
        imageHeight: 720,
        target: {
          xMin: 100,
          xMax: 120,
          yMin: 60,
          yMax: 80
        }
      },
      {
        id: 0,
        fileName: "Waldo",
        type: "png",
        imageWidth: 480,
        imageHeight: 320,
        target: {
          xMin: 40,
          xMax: 50,
          yMin: 30,
          yMax: 35
        }
      }
    ] as ImageInfo[];
    httpClientMock.get.mockReturnValue(of(expectedReturnValue));

    const returnValue = service.getGeneratedImageInfoSequence();

    await expect(lastValueFrom(returnValue)).resolves.toEqual(expectedReturnValue);
    const imageInfoUrl = environment.baseUrl + environment.generateSequenceEndpoint;
    expect(httpClientMock.get).toHaveBeenCalledWith(imageInfoUrl);
  })

});
