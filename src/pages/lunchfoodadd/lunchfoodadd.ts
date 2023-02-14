import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
/**
 * Generated class for the LunchfoodaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunchfoodadd',
  templateUrl: 'lunchfoodadd.html',
})
export class LunchfoodaddPage {
  fname:any;
  fqty:any;
  desc:any;
  price:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetController: ActionSheetController, public storage: Storage,
    public forgotCtrl: AlertController,
    private loadingCtrl: LoadingController, private http: Http,
    public toastCtrl: ToastController, public navp: NavParams) {
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
    console.log('ionViewDidLoad LunchfoodaddPage');
  }
  add() {
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/lunchfood_add";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({
      appkey: "t@ftc2o18", foodname: this.fname, quantity: this.fqty, description: this.desc,foodprice: this.price});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let photo = '';
    this.http
      .post(url, body, options)
      .subscribe(
        data => {
          loading.dismiss();
          let dataval = data.json();
          /*   console.log(dataval['status']);
            console.log(dataval.status); */
          console.log("data", dataval.status)
          if (dataval.status == 'error') {
            this.presentToast('Please Check Your Inputs');
          }
          else if (dataval.status == '1') {
            this.presentToast('Contact Your Admin ');
          }
          else if (dataval.status == '2') {
            this.presentToast('User has Already Logined');
          }
          else if (dataval.status == 'success') {
           // this.storage.set('nms', dataval[0].name);
            //localStorage.setItem('name', dataval[0].name);
            //localStorage.setItem('selid', dataval[0].sel_id);
            this.presentToast('Food Added Successfully');

            //this.navCtrl.setRoot('SessionPage');

            // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
            // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
            // this.navCtrl.setRoot('HLoginPage');     

            //console.log("selid", dataval[0].sel_id);


          }
          else {
            this.presentToast('Please Check Your Inputs');

          }


        },
        err => {
          loading.dismiss();
          console.log("ERROR!: ", err);
        }
      );
  }
  add1() {
    this.navCtrl.push('LunchfoodPage');
  }
}
