import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
sno:any;
fid:any;
pid:any;
oid:any;
fname:any;
qty:any;
desc:any;
fprice:any;
pay:any;
status:any;
seat:any;
passname:any;
mobile:any;
set:any;
date:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public navp: NavParams,) {

    this.sno = this.navp.get('a1'); this.fid = this.navp.get('b1');
    this.pid = this.navp.get('c1'); this.oid = this.navp.get('d1');
    this.fname = this.navp.get('e1'); this.qty = this.navp.get('f1');
    this.desc = this.navp.get('g1');this.fprice = this.navp.get('h1');
    this.pay = this.navp.get('i1');this.status = this.navp.get('j1');
    this.seat = this.navp.get('k1');this.passname = this.navp.get('l1');
    this.mobile = this.navp.get('m1');this.set = this.navp.get('n1');
    this.date = this.navp.get('o1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }

}
