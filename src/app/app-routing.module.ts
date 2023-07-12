import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertySellerComponent } from './property-seller/property-seller.component';
import { ListingsComponent } from './listings/listings.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'property-list',
    component: ListingsComponent,
  },
  {
    path: 'property-overview',
    component: PropertyOverviewComponent,
  },
  {
    path: 'property-seller',
    component: PropertySellerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
