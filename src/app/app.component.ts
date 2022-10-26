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
  // cityName!: string;
  cityName: string = 'Paris';
  description!: string;

  constructor(private weatherService: WeatherService){ }

  // weatherData?: WeatherData;

  ngOnInit(): void {
      this.getWeatherData(this.cityName);
      this.cityName = '';

      this.weatherService.getWeatherData('')
      .subscribe({
        next: (response) => {
          this.weatherData = response;

          this.cityName = this.weatherData.name;
          this.temp = (this.weatherData.main.temp);
          this.humidity = this.weatherData.main.humidity;
          this.wind_speed = this.weatherData.wind.speed;
          this.description = this.weatherData.weather[0].main;

          console.log(response);
          console.log('name: ' + this.cityName);
          console.log('temperature: ' + this.temp);
          console.log('humidity%: ' + this.humidity);
          console.log('wind_speed: ' + this.wind_speed);
          console.log('descr: ' + this.description);
        }
      })
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;

        this.cityName = this.weatherData.name;
        this.temp = (this.weatherData.main.temp);
        this.humidity = this.weatherData.main.humidity;
        this.wind_speed = this.weatherData.wind.speed;
        this.description = this.weatherData.weather[0].main;

        console.log(response);
        console.log('name: ' + this.cityName);
      }
    })
  }
}
