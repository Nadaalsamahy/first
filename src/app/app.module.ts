import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';

import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { MyApp } from './app.component';
import {FIREBASE_CREDETIALS} from './firebase.credentials';
import{AddShoppingPage}from '../pages/add-shopping/add-shopping';
import{EditShoppingItemPage}from '../pages/edit-shopping-item/edit-shopping-item';


@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  AngularFireDatabaseModule,

    AngularFireModule.initializeApp(FIREBASE_CREDETIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
   
    
  ]
})
export class AppModule {}
