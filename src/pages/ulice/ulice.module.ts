import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UlicePage } from './ulice';

@NgModule({
  declarations: [
    UlicePage,
  ],
  imports: [
    IonicPageModule.forChild(UlicePage),
  ],
  exports: [
    UlicePage
  ]
})
export class UlicePageModule {}
