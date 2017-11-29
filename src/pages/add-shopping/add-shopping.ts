import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingItem } from '../../models/shopping-item/shopping.item.interface';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');

    /* shopping-list:
        0: 
          itemName: 'Pizza'
          itemNumber: 1
        
        1:
          itemName: 'Cheesecake'
          itemNumber: 5
   
    */


  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    // log the results to the console
    console.log(shoppingItem);

    /* 
      Save data to database
      Create a new anonymous object and convert itemNumner fo Number to a number
      Push this to our Firebase Database under the shopping-list node.
      */
    this.shoppingItemRef$.push({
        itemName: this.shoppingItem.itemName,
        itemNumber: Number(this.shoppingItem.itemNumber)
    });

    // reset our shopping item
    this.shoppingItem = {} as ShoppingItem;

    // navigate the user to main screen
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

}
