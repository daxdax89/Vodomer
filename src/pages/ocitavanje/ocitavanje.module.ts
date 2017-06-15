import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OcitavanjePage } from './ocitavanje';

@NgModule({
  declarations: [
    OcitavanjePage,
  ],
  imports: [
    IonicPageModule.forChild(OcitavanjePage),
  ],
  exports: [
    OcitavanjePage
  ]
})
export class OcitavanjePageModule { }
