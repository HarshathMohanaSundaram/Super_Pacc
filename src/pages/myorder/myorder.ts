import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, Keyboard, } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  nadalist: any;
  orderid:any;
  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
    public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private http: Http, public toastCtrl: ToastController, public navp: NavParams) {

      
    // this.username = localStorage.getItem("a");
    // this.phone = localStorage.getItem("b");
    // this.cus_id = localStorage.getItem('cusid');
    // this.sel_id = localStorage.getItem('selid');

    // console.log(this.username)
    // console.log(this.phone)
    // console.log(this.cus_id)
    // console.log(this.sel_id);

    //this.banslider();
    this.ban();

  }
  ban() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodreq_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18", id: 1 });
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
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }
feed(a,b,c,d,e,f,g,h,i,j,k,l){
  this.navCtrl.push('FeedbackPage',{a1:a,b1:b,c1:c,d1:d,e1:e,f1:f,g1:g,h1:h,i1:i,j1:j,k1:k,l1:l})
}
cancel(a,b,c,d,e,f,g,h,i,j,k,l){
  this.navCtrl.push('OrdercancelPage',{a1:a,b1:b,c1:c,d1:d,e1:e,f1:f,g1:g,h1:h,i1:i,j1:j,k1:k,l1:l})
}
}
