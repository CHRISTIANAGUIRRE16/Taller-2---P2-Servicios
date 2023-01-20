import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  [x: string]: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.updateProduct();
    //this.createProduct();
    //this.deleteProduct();
  }
  getProducts() {
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products')
      .subscribe(response => {
        console.log(response);
      });
  }

  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/100';
    const response = this.httpClient.get(url).subscribe(response => {
      console.log(response);
    });
  }


  createProduct() {
    const data = {
      title: 'Samsung Galaxy',
      price: 850,
      description: 'Tecnología  / Christian Aguirre',
      images: [
        'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
      ],
      categoryId: 1,
    };
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(response => {
      console.log(response);
    });
  }


  updateProduct() {
    const data = {
      title: 'Telefono celular samsung galaxy prime',
      price: 1500,
      description: 'Técnologia- celulares  / Christian Aguirre',
    };
    const url = 'https://api.escuelajs.co/api/v1/products/200';
    this.httpClient.put(url, data).subscribe(response => {
      console.log(response);
    });
  }


  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/200';
    this.httpClient.delete(url).subscribe(response => {
      console.log(response);
    });
  }
}
