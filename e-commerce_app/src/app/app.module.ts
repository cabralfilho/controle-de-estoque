import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProductListPage} from "../pages/product-list/product-list";
import {ProductDetailPage} from "../pages/product-detail/product-detail";
import {CartPage} from "../pages/cart/cart";
import {LoginPage} from "../pages/login/login";
import {CheckoutPage} from "../pages/checkout/checkout";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    ProductDetailPage,
    CartPage,
    LoginPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    ProductDetailPage,
    CartPage,
    LoginPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
