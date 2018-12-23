import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {ProductListPage} from "../product-list/product-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    this.http.post('http://127.0.0.1:8000/api/login', this.user)
        .toPromise().then((response) => {

          let data = response.json();
          //console.log(data.data.token);

          window.localStorage['token'] = data;

          this.navCtrl.setRoot(ProductListPage)
    });

  }

}
