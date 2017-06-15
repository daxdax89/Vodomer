import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// newsimport 'rxjs/add/operator/map'

import { HttpProvider } from '../../providers/http/http';



@IonicPage()
@Component({
  selector: 'page-ulice',
  templateUrl: 'ulice.html',
  providers: [HttpProvider]
})
export class UlicePage {
  newsData: any;
  loading: any;
  // posts: any;

  // podaci: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Učitavanje podataka...'
    });
    this.getdata();
  }

  getdata() {
    this.loading.present();
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.newsData = result;
        console.log("Success : " + this.newsData);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );
  }

  filter() {

  }
}