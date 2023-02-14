import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, Keyboard, } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  payID = 1;

  nadalist: any;

  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
    public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private http: Http, public toastCtrl: ToastController, public navp: NavParams) {
    // this.username = localStorage.getItem("a");
    // this.phone = localStorage.getItem("b");
    // this.cus_id = localStorage.getItem('cusid');

    // this.sel_id = localStorage.getItem('selid');
    // this.b_id = localStorage.getItem('bid');

    // console.log(this.username)
    // console.log(this.phone)
    // //console.log(this.cus_id)
    // //console.log(this.sel_id);
    // console.log(this.b_id);

    //this.banslider();
    this.ban();

  }
  ban() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodreq_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18"});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //let photo = '';
    this.http
      .post(url, body, options)
      .subscribe(
        data => {
          let dataval = data.json();
          /*   console.log(dataval['status']);
          console.log(dataval.status); */
          console.log(dataval[0])
          this.nadalist = dataval[0]
          if (dataval.status == 'error') { }
          else if (dataval.status == '1') { }
          else if (dataval.status == 'success') { }
          else { }
        },
        err => {
          console.log("ERROR!: ", err);
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  goToSuccess(){
    this.navCtrl.push('SuccessPage')
  }
  odetail(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o,p,q){
    this.navCtrl.push('OrderdetailsPage', { a1: a, b1: b, c1: c, d1: d, e1: e, f1: f, g1: g, h1: h, i1: i, j1: j, k1: k, l1: l, m1: m, n1: n, o1: o,p1:p,q1:q })

  }
}
