import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5ad210e7135ed0d49bdca1e1d5257daf`;
    return this.http.get<WeatherData>(path, {
      params: new HttpParams()
      // .set('q', cityName)
      .set('mode', 'json')
    })
  }
}
