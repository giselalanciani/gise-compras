import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productsList: Product[] = products;
  

  share () {
    alert('Product shared!');
  }

  onNotify () {
    alert('You will be notifed!')
  }
}
          