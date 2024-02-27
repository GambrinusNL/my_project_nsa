import { Component } from '@angular/core';
import { BEERS } from '../mock-beers'
import { Beer } from '../beer'

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrl: './beerlist.component.css'
})
export class BeerlistComponent {
  beers = BEERS;

  bremove(name: string): void {
    this.beers.splice(this.beers.findIndex((bla) => bla["name"] === name ), 1)
  }
}
