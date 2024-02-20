import { Component } from '@angular/core';
import { BEERS } from '../mock-beers'

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrl: './beerlist.component.css'
})
export class BeerlistComponent {
  beers = BEERS
}
