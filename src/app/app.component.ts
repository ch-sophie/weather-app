import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // test
  weatherData!: WeatherData;
  temp!: number;
  humidity!: number;
  wind_speed!: number;
  cityName!: string;

  constructor(private weatherService: WeatherService){

  }

  // weatherData?: WeatherData;

  ngOnInit(): void {
      this.weatherService.getWeatherData('Paris')
      .subscribe({
        next: (response) => {
          this.weatherData = response;

          this.temp = (this.weatherData.main.temp);
          this.humidity = this.weatherData.main.humidity;
          this.wind_speed = this.weatherData.wind.speed;
          this.cityName = this.weatherData.name;

          console.log(response);

          console.log(this.temp);
          console.log(this.humidity);
          console.log(this.wind_speed);
          console.log(this.cityName);
        }
      })
  }
}
