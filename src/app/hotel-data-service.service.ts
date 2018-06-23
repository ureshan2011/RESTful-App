import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HotelDataServiceService {

  endpointURL = "https://my-json-server.typicode.com/ureshan2011/RESTful-App";
  constructor(private http : HttpClient) { }

  getHotels(){
    return this
            .http
            .get(`${this.endpointURL}/markers`);
  }
}
