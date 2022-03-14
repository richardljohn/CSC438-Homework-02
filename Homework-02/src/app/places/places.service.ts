import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.', 
      'https://media.architecturaldigest.com/photos/5669f85ed1a7e002146ae981/2:1/w_5269,h_2634,c_limit/1_WebEstate_NYC.jpg',
      149.99
    ),
    new Place (
      'p2',
      'London & Big Ben',
      'Welcome to London!', 
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/bb/big-ben.jpg?w=1200&h=-1&s=1',
      300.00
    ),
    new Place (
      'p3',
      'India & The Taj Mahal', 
      'Welcome to the Land of India',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/500px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
      1000.00
    )
  ]

  getPlaces(){ 
    return [...this._places];
  }

  getPlace(id: string) { 
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
