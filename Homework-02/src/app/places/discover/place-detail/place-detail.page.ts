import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, ModalController} from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute, 
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placedi')){
        this.navCtrl.navigateBack('/places/tabs/discover')
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeid'));
    });
  }

  onBookPlace(){
    this.modalCtrl
    .create({
      component: CreateBookingComponent
    })
    .then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('BOOKED!')
      }
    }
    );
  }

}
