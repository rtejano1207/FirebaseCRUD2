import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { ShoppingItem } from '../../models/shopping-item/shopping.item.interface'

import { AddShoppingPage } from '../add-shopping/add-shopping'

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: AngularFireList<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {
      // we are pointing the shopping List reference @ Firebase -: 'shopping-list' node
      this.shoppingListRef$ = this.database.list('shopping-list');

      // log temporarily result set to console
      this.shoppingListRef$.valueChanges().subscribe(x => console.log(x));
  }

  navigateToAddShoppingPage() {
    // navigate the user to AddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

}
