import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { OcitavanjePage } from '../ocitavanje/ocitavanje';
// import { SinhronizacijaPage } from '../sinhronizacija/sinhronizacija';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  // ocitavanjePage = OcitavanjePage;
  // sinhronizacijaPage = SinhronizacijaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad StartPage');
  // }

  // ionViewWillEnter() {
  //   console.log('ionViewWillenter is fired just as the page is about to become active.');
  // }

  // ionViewDidEnter() {
  //   console.log('ionViewDidEtner fired each time the page is entered');
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave is fired each time the page is about to leave');
  // }

  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave is fired each time when the use has left the page');
  // }

  // ionViewWillUnload() {
  //   console.log('ionViewWillUnload is ran when the page is about to be destoryed');
  // }

  navigateToUlice(): void {
    //if there is data open this page and show streets else show alert
    this.navCtrl.push('UlicePage');
  }

  navigateToSinhronizacija(): void {
    this.navCtrl.push('SinhronizacijaPage');
  }

  visitMB() {
    window.open("http://micro.co.rs", '_system');
  }
}


