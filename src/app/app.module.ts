import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart-component/cart-component.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MainBarComponent,
    ProductDetailComponent,
    CartComponent,
    ProductAlertsComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
