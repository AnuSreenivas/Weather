import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/Class/Weather';
import { WeatherService } from 'src/Service/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
weather=new Weather();
location:string='';
date:any;
weatherdata:any[]=[];
WeatherList:any;
TempMax:any;
TempMin:any;
SunSet_time:any;
SunRise_time:any;
description:any;
city:any;
list:any[]=[];
times:any;
datepipe = new DatePipe('en-IND');
  today = new Date();
  // SunSet_time: any;
  
  tempCelcious: any;
  constructor(public weatherservice:WeatherService) { 


  
  }

  ngOnInit(): void {
  }
  GetWeather()
  {


   
    console.log(this.date);     
console.log(this.date);

    

      this.weatherservice.GetAllWeatherDetailsWithLocation(this.location).subscribe(data => {
        if (data) {
          console.log(data);
         
          this.WeatherList = <Array<any>>data;
         this.city=this.WeatherList.city;
         this.list=this.WeatherList.list;
         this.description=this.list[0].weather[0].description
          console.log(this.WeatherList);
         // console.log("hii",this.WeatherList.city);
          
          // this.WeatherListFilter = this.WeatherList;
          // console.log(this.WeatherListFilter);
          this.setweatherdata();
        }
        else {
          this.WeatherList = [];
          
        }
      })

  }
setweatherdata()
{

  this.date = this.datepipe.transform(this.today, 'MM-dd-yyyy');

let sunsetTime=new Date(this.city.sunset*1000)
// console.log(this.sunsetTime);
let sunrisetime=new Date(this.city.sunrise*1000)
this.SunRise_time=sunrisetime.toLocaleTimeString();
this.SunSet_time=sunsetTime.toLocaleTimeString();
 this.tempCelcious=this.list[0].main.temp;
 this.TempMax=this.list[0].main.temp_max;
 this.TempMin=this.list[0].main.temp_min;
//  this.weather=this.lis
// this.tempCelcious=(this.list.temp-273.15).toFixed(0)
this.times=[];
for(let j of this.list)
{
  
  let day=this.datepipe.transform(j.dt_txt, 'MM-dd-yyyy');
  if(day==this.date)
  {
this.times.push(j)

  }
}
console.log(this.times);

}

}
