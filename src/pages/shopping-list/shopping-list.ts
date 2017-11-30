import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'

import { ShoppingItem } from '../../models/shopping-item/shopping.item.interface'

import { AddShoppingPage } from '../add-shopping/add-shopping'
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item'

import { Observable } from 'rxjs/Observable';


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

  shoppingListItems: Observable<any[]>;
  shoppingListRef$: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      // we are pointing the shopping List reference @ Firebase -: 'shopping-list' node
      this.shoppingListRef$ = this.database.list('shopping-list');

      // log temporarily result set to console
      this.shoppingListItems = this.shoppingListRef$.snapshotChanges().map(actions =>{ return actions.map(a => ({ childKey: a.payload.key, ...a.payload.val()}))});
  }

  navigateToAddShoppingPage() {
    // navigate the user to AddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }

  selectShoppingItem(shoppingItem: ShoppingItem) {
    // display an action sheet that givs the user the following options
    // 1. edit the shopping item
    // 2. delete the shopping item
    // 3. cancel selection
    this.actionSheetCtrl.create({
      title: `Item Name: ${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // send the user to the editShoppingItemPage and pass the key as a parameter
            this.navCtrl.push(EditShoppingItemPage,{ shoppingItemID : shoppingItem.childKey });
            
          }   
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // delete the current shopping item
                      
            this.shoppingListRef$.remove(shoppingItem.childKey);

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('The user has canceled selection.')
          }
        }
      ]
    }).present();

  } 






  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

}
