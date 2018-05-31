import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getWeather(city, country) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.myglamapp.pl/api/categories?language=EN');
    //return this.http.get(
  }

}
