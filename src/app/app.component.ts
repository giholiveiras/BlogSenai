import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproducts } from './model/services/iproducts';
import { ProductsService } from './model/services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products: Iproducts[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
