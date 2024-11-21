import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'How Sucecess People Make the Most of their Business', price: 50.0, image_url: './img1.png', description: 'Um guia passo a passo para criar seu próprio blog'},
    {id: 2, name: 'How Sucecess People Make the Most of their Business', price: 50.0, image_url: './img2.png', description: 'Um guia passo a passo para criar seu próprio blog'},
    {id: 3, name: 'How Sucecess People Make the Most of their Business', price: 50.0, image_url: './img3.png', description: 'Um guia passo a passo para criar seu próprio blog'},
    {id: 3, name: 'How Sucecess People Make the Most of their Business', price: 50.0, image_url: './img4.png', description: 'Um guia passo a passo para criar seu próprio blog'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
