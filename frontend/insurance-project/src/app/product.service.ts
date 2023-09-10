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
          title: '車の安心おまかせ保険プラン',
          Coverage_Details: '車の補償内容:',
          Coverage_Details_01: '自動車事故による損害補償: 自動車事故による車両の損害や第三者への損害を補償します。',
          Coverage_Details_02: '盗難・車両損害補償: 車両の盗難や車両に対する損害を補償します。',
          Coverage_Details_03: '人身傷害補償: 自動車事故による人身傷害に対する補償を提供します。',
          Coverage_Limit: '補償限度額: 事故による補償限度額は最大で3000万円までとなります。',
          Special_Conditions: '特記事項: 自己負担額や免責事項など、契約に関する特記事項がありますので、契約書をご確認ください。',
          Premium: '保険料: 年間保険料は10万円となりますが、車両の種類や運転歴によって保険料が異なる場合があります。',
          image: 'assets/images/car_insurance.jpg',
          rating: 4.5,
          reviews: [
            {
              rating: 5,
              comment: 'ある意味すばらしい！',
              user: 'UserA'
            },
            {
              rating: 4,
              comment: '満足しようと思えば満足します！',
              user: 'UserA'
            }
          ]
          // Other properties as needed
        };
        return of(productData);

      case '2':
        return of({
          id: '2',
          title: 'バイクの安心保険プラン',
          Coverage_Details: 'バイクの補償内容:',
          Coverage_Details_01: 'バイク事故による損害補償: バイク事故によるバイクの損害や第三者への損害を補償します。',
          Coverage_Details_02: '盗難・車両損害補償: バイクの盗難やバイクに対する損害を補償します。',
          Coverage_Details_03: '人身傷害補償: バイク事故によるバイク乗員や第三者の人身傷害に対する補償を提供します。',
          Coverage_Limit: '補償限度額: 事故による補償限度額は最大で1000万円までとなります。',
          Special_Conditions: '特記事項: 自己負担額や免責事項など、契約に関する特記事項がありますので、契約書をご確認ください。',
          Premium: '保険料: 年間保険料は12,000円となりますが、バイクの種類や運転歴によって保険料が異なる場合があります。',
          image: 'assets/images/motor_bike_insurance.jpg',
          rating: 4.5,
          reviews: [
            {
              rating: 5,
              comment: 'ある意味すばらしい！',
              user: 'UserA'
            },
            {
              rating: 4,
              comment: '満足しようと思えば満足します！',
              user: 'UserA'
            }
          ]
        });
      case '3':
        return of({
          id: '3',
          title: '自転車のおまかせ保険プラン',
          Coverage_Details: '自転車の補償内容:',
          Coverage_Details_01: '自転車事故による損害補償: 自転車事故による自転車の損害や第三者への損害を補償します。',
          Coverage_Details_02: '盗難・車両損害補償: 自転車の盗難や自転車に対する損害を補償します。',
          Coverage_Details_03: '人身傷害補償: 自転車事故による自転車乗員や第三者の人身傷害に対する補償を提供します。',
          Coverage_Limit: '補償限度額: 事故による補償限度額は最大で500万円までとなります。',
          Special_Conditions: '特記事項: 自己負担額や免責事項など、契約に関する特記事項がありますので、契約書をご確認ください。',
          Premium: '保険料: 年間保険料は3,000円となりますが、バイクの種類や運転歴によって保険料が異なる場合があります。',
          image: 'assets/images/bicycle_insurance.jpg',
          rating: 4.5,
          reviews: [
            {
              rating: 5,
              comment: 'ある意味すばらしい！',
              user: 'UserA'
            },
            {
              rating: 4,
              comment: '満足しようと思えば満足します！',
              user: 'UserA'
            }
          ]
        });
      case '4':
        return of({
          id: '4',
          title: '交通障害保険',
          Coverage_Details: '交通障害保険の補償内容:',
          Coverage_Details_01: '交通事故による損害補償: 交通事故による人身傷害や物損などの損害を補償します。',
          Coverage_Details_02: '交通事故による入院給付金: 交通事故による入院治療に対して一定の給付金を支払います。',
          Coverage_Details_03: '交通事故による後遺障害給付金: 交通事故によって生じた後遺障害に対して一定の給付金を支払います。',
          Coverage_Limit: '補償限度額: 事故による補償限度額は最大で1億円までとなります。',
          Special_Conditions: '特記事項: 自己負担額や免責事項など、契約に関する特記事項がありますので、契約書をご確認ください。',
          Premium: '保険料: 年間保険料は15,000円となりますが、加入者の年齢や運転履歴によって保険料が異なる場合があります。',
          image: 'assets/images/traffic_accident_insurance.jpg',
          rating: 4.5,
          reviews: [
            {
              rating: 5,
              comment: 'ある意味すばらしい！',
              user: 'UserA'
            },
            {
              rating: 4,
              comment: '満足しようと思えば満足します！',
              user: 'UserA'
            }
          ]
        });
        case '5':
        return of({
          id: '5',
          title: '航空機保険',
          Coverage_Details: '航空機保険の補償内容:',
          Coverage_Details_01: '航空事故による損害補償: 航空事故による人身傷害や物損などの損害を補償します。',
          Coverage_Details_02: '航空事故による損害補償: 航空事故による人身傷害や物損などの損害を補償します。',
          Coverage_Details_03: '航空機キャンセル補償: 航空機のフライトがキャンセルされた場合に一定の補償を提供します。',
          Coverage_Limit: '補償限度額: 事故による補償限度額は最大で1億円までとなります。',
          Special_Conditions: '特記事項: 自己負担額や免責事項など、契約に関する特記事項がありますので、契約書をご確認ください。',
          Premium: '保険料: 航空機保険の保険料は航空券の価格に応じて計算されます。',
          image: 'assets/images/aviation_insurance.jpg',
          rating: 4.5,
          reviews: [
            {
              rating: 3,
              comment: 'ある意味すばらしい！',
              user: 'UserA'
            },
            {
              rating: 4,
              comment: '満足しようと思えば満足します！',
              user: 'UserA'
            }
          ]
        });
      default:
        return of(null); // Return null or handle other cases as needed
    }
  }
}