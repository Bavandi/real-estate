import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { PropertySellerComponent } from './property-seller/property-seller.component';
import { ListingsComponent } from './listings/listings.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertySellerComponent,
    ListingsComponent,
    PropertyOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
