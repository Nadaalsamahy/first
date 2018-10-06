
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

import{AngularFireDatabase, FirebaseListObservable}from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {


  shoppingItem={} as ShoppingItem
  
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) 
  {

  this.shoppingItemRef$ = this.database.list('shopping-list');
  }
  addShoppingItem(shoppingItem:ShoppingItem){

    this.shoppingItemRef$.push({

      itemName: this.shoppingItem.itemName,
      itemNuumber:Number (this.shoppingItem.itemNumber)
    });

    this.shoppingItem = {}as ShoppingItem;
    //navigate the user back to shopping list page
    this.navCtrl.pop();
    
  }
  }

