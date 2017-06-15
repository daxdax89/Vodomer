import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@IonicPage()
@Component({
  selector: 'page-ocitavanje',
  templateUrl: 'ocitavanje.html',
})
export class OcitavanjePage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private firebase: Firebase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OcitavanjePage');
  }

}
