import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {
  slides = [
    { id: '1', title: '車の保険', image: 'assets/images/car_insurance.jpg' },
    { id: '2', title: 'バイクの保険', image: 'assets/images/motor_bike_insurance.jpg' },
    { id: '3', title: '自転車の保険', image: 'assets/images/bicycle_insurance.jpg' },
    { id: '4', title: '交通障害保険', image: 'assets/images/traffic_accident_insurance.jpg'}
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  goToProductDetails(id: string) {
    this.router.navigate(['/products', id]);
  }

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}
}
