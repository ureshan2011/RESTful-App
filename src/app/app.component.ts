import { Component } from '@angular/core';

import { HotelDataServiceService } from './hotel-data-service.service';
import { hotel } from './hotel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hotels: hotel[];
  constructor(private hotelService : HotelDataServiceService){}

  ngOnInit(){
    this
      .hotelService
      .getHotels()
      .subscribe((data: hotel[]) => {
          this.hotels = data;
      })

  }

}
