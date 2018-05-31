import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;

  city;
  data2;
  country;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getWeatherBtn() {
    this.apiService.getWeather(this.city, this.country).subscribe(res => {
      console.log(res.status);
      console.log(res.status);
      console.log(res.json());
      console.log(res.json().data[0].description);
      this.data = res.json().data[0].description;
      this.data2 = res.json().data[0].Services[0].description_service;

    });

    console.log('weather btn presed');


  }
}
