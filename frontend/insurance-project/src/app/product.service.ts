import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProductDetails(productId: string): Observable<any> {
    // Hardcoded product details based on productId
    switch (productId) {
      case '1':
        const productData = {
          id: '1',
          title: '車の保険',
          description: '車の保険の詳細情報です。',
          image: 'assets/images/car_insurance.jpg',
          // Other properties as needed
        };
        console.log(productData); // Add this line to log the retrieved data
        return of(productData);

      case '2':
        return of({
          id: '2',
          title: 'バイクの保険',
          description: 'バイクの保険の詳細情報です。',
          image: 'assets/images/motor_bike_insurance.jpg',
          // Other properties as needed
        });
      case '3':
        return of({
          id: '3',
          title: '自転車の保険',
          description: '自転車の保険の詳細情報です。',
          image: 'assets/images/bicycle_insurance.jpg',
          // Other properties as needed
        });
      case '4':
        return of({
          id: '4',
          title: '交通障害保険',
          description: '交通障害保険の詳細情報です。',
          image: 'assets/images/traffic_accident_insurance.jpg',
          // Other properties as needed
        });
      default:
        return of(null); // Return null or handle other cases as needed
    }
  }
}