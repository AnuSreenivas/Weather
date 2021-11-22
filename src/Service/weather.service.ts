import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppConfig } from 'src/Class/AppConfig';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  appConfig=new AppConfig();
  constructor(public http: HttpClient) { }
  GetAllWeatherDetailsWithLocation(location:string) {

    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };

    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=metric&appid=d5cd58bf6ad991168af99f4db6805328",options).pipe<any>(map(res => res));
  // api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
  // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  }

}
