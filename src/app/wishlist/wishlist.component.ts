import { Component } from '@angular/core';
import { WISHES } from '../mock-wish'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishes = WISHES
}
