import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
  product: Product | undefined;

  
}