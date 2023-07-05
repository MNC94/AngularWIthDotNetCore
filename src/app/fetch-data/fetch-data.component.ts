import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  public hurl: string = "https://localhost:7224/";
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(this.hurl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

    //http.get(baseUrl +'api/Values/GetAllvalue').subscribe(result => {
      
    //}, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
