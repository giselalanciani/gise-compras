import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MainBarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatIconModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
