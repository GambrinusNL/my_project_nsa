import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'beerlist', component: BeerlistComponent},
  { path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
