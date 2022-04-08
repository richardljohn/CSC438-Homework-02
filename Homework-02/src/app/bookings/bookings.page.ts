import { Component, OnInit } from '@angular/core';
import { IonItem, IonItemSliding } from '@ionic/angular';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancelBookings(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  } 

}
