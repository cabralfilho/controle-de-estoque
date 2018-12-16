import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  public product = null;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http
  ) {
  }

  ionViewDidLoad() {
    this.http.get(`http://localhost:8000/api/products/${this.navParams.get('id')}`)
        .toPromise().then((response)=> {
      this.product = response.json();
    });
  }
}
