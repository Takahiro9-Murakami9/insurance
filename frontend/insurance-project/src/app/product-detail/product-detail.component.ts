import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.sass']
})

export class ProductDetailComponent implements OnInit {
    productId!: string;
    product: any;
    
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
}