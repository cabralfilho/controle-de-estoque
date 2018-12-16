import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ProductDetailPage} from "../product-detail/product-detail";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  public products = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http
  ) { }

  ionViewDidLoad() {
    this.http.get('http://localhost:8000/api/products')
        .toPromise().then((response)=> {
        this.products = response.json();
    });
  }

  goToProductDetails(product){
    this.navCtrl.push(ProductDetailPage, {id: product.id})
  }

}
