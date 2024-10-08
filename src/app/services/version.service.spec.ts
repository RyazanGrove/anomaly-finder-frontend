import { TestBed } from '@angular/core/testing';
import { VersionService } from './version.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { lastValueFrom, of } from 'rxjs';

describe('VersionService', () => {
  let service: VersionService;
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
    service = TestBed.inject(VersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get frontend version', () => {
    const environmentVersion = environment.version;
    const version = service.getFrontendVersion();
    expect(version).toEqual(environmentVersion);
  })

  it('should get backend version', async () => {
    const expectedVersion = '1.0.0';
    httpClientMock.get.mockReturnValue(of(expectedVersion));

    const functionCall = service.getBackendVersion();

    await expect(lastValueFrom(functionCall)).resolves.toEqual(expectedVersion);
    const versionUrl = environment.baseUrl + environment.versionEndpoint;
    expect(httpClientMock.get).toHaveBeenCalledWith(versionUrl);
  })
});
