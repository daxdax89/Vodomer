import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinhronizacijaPage } from './sinhronizacija';

@NgModule({
  declarations: [
    SinhronizacijaPage,
  ],
  imports: [
    IonicPageModule.forChild(SinhronizacijaPage),
  ],
  exports: [
    SinhronizacijaPage
  ]
})
export class SinhronizacijaPageModule {}
