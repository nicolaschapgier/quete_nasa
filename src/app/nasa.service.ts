import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './api';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  url: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  coucouKey: string = apiKey;
  constructor(public http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(
      'https://api.nasa.gov/planetary/apod?api_key=' + this.coucouKey
    );
  }
}
