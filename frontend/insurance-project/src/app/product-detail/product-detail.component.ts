import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarFormComponent } from "../forms/car-form/car-form.component";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.sass']
})

export class ProductDetailComponent implements OnInit {
    productId!: string;
    product: any;
    carFormComponent = CarFormComponent;
    
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.productId = params.get('id')!;
          this.getProductDetails();
        });
      }

    getProductDetails() {
      this.productService.getProductDetails(this.productId).subscribe(data => {
        this.product = data;
      });
    }

    getRatingArray(rating: number): number[] {
      const ratingArray = [];
      for (let i = 0; i < rating; i++) {
        ratingArray.push(i);
      }
      return ratingArray;
    }
    
}