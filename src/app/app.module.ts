import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ForemanComponent } from './foreman/foreman.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TrackingComponent,
    CarritoComponent,
    ForemanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
