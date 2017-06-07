import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { StartPage } from '../pages/start/start';
// import { OcitavanjePage } from '../pages/ocitavanje/ocitavanje';
// import { SinhronizacijaPage } from '../pages/sinhronizacija/sinhronizacija';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    // StartPage,
    // OcitavanjePage
    // SinhronizacijaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    // StartPage,
    // OcitavanjePage
    // SinhronizacijaPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
