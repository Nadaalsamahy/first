import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AddShoppingPage}from'../add-shopping/add-shopping';

import{ AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import{EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

shoppingListRef$: FirebaseListObservable<ShoppingItem[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) 
  {

    /*الحاجات الموجودة في الداتا بيز بتظهر في ليست  
    */


    this.shoppingListRef$ = this.database.list('shopping-list');
   

  }

  selectShoppingItem(shoppingItem: ShoppingItem){
/*
display an actionsheet that gives  the user the follwing options

1.edit the shopping item 
2.delete the shopping item 
3. cancel sellection

*/
 this.actionSheetCtrl.create({

title:'${shoppingItem.itemName}',  
buttons: [
  {

    text: 'Edit',
    handler: () => {

      //send user edit shopping item page and pass a key as a parameter
      this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key });


    }


  },
  {
    text: 'Delete',
    role:'destructive',
    handler: () =>{
      //delete the current shopping item

      this.shoppingListRef$.remove(shoppingItem.$key);
    }
  },
  {

    text: 'cancel',
    role: 'cancel ',
    handler: () =>{

      console.log("The user has selected the cancel button ");
    }


  }

]


 }).present();

  }

  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage);
    
  }

}
