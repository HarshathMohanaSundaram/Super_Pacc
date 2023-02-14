import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPage');
  }
  bf() {
    this.navCtrl.push('BreakfirstfoodaddPage');
  }
  ln() {
    this.navCtrl.push('LunchfoodaddPage');
  }
  dr() {
    this.navCtrl.push('DinnerfoodaddPage');
  }
  snx() {
    this.navCtrl.push('SnacksaddPage');
  }
}
