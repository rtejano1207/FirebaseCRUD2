import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { Subscription } from 'rxjs/Subscription';

import { ShoppingItem } from '../../models/shopping-item/shopping.item.interface';
/*
 * Generated class for the EditShoppingItemPage page.
 *;
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemSubscription: Subscription;
  shoppingItemRef$: AngularFireObject<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
   
   // captre the shopping item ID as a nav Parameter
   const shoppingItemID = navParams.get('shoppingItemID');
   
   // log out selected item key into console
   console.log(shoppingItemID);

   // set the scope of our Firebase object = navParams or Selected Item

   this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemID}`);
   
   // subscribe to the obect and assign the result to this.shoppingItem
   this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(shoppingItem => this.shoppingItem = shoppingItem);


  }

  editShoppingItem(shoppingItem : ShoppingItem) {
      // update our firebase node with new item data\
      this.shoppingItemRef$.update(shoppingItem);

      // close the current edit template
      this.navCtrl.pop();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

  ionViewWillLeave() {
    // unscubscribe from the observable when leaving the page
    this.shoppingItemSubscription.unsubscribe();
  }
}
