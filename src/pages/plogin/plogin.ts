import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plogin',
  templateUrl: 'plogin.html',
})
export class PloginPage {
  username: any;
  pass: any;
  constructor(public storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController, public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, public toastCtrl: ToastController) {
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }
  log1() {
    localStorage.setItem('name', this.username[0].sellername);
    localStorage.setItem('selid', this.pass[0].sellerid);
    this.navCtrl.setRoot('PassengerPage');
     this.presentToast('Passenger Login Successfully');
  //   let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodpas_log";
  //   console.log(url);
  //  // console.log(this.username,this.password);
  //   let loading = this.loadingCtrl.create({
  //   });
  //   loading.present();
  //   let body = JSON.stringify({ appkey: "t@ftc2o18", passengername: this.username, password: this.pass });
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   // let photo = '';
  //   this.http
  //     .post(url, body, options)
  //     .subscribe(
  //       data => {
  //         loading.dismiss();
  //         let dataval = data.json();
  //         /*   console.log(dataval['status']);
  //           console.log(dataval.status); */
  //         console.log("data", dataval.status)
  //         if (dataval.status == 'error') {
  //           this.presentToast('Please Check Username and Password');
  //         }
  //         else if (dataval.status == '1') {
  //           this.presentToast('Contact Your Admin ');
  //         }
  //         else if (dataval.status == '2') {
  //           this.presentToast('User has Already Logined');
  //         }
  //         else if (dataval.status == 'success') {

  //           this.presentToast('Thank You for login');

  //           //this.storage.set('nms', dataval[0].name);
  //           localStorage.setItem('name', dataval[0].sellername);
  //           localStorage.setItem('selid', dataval[0].sellerid);
  //           this.navCtrl.setRoot('PassengerPage');

  //           // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
  //           // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
  //           // this.navCtrl.setRoot('HLoginPage');     

  //           console.log("userid", dataval[0].sellerid);

  //         }
  //         else {
  //           this.presentToast('Please Check Username and Password');

  //         }
  //       },
  //       err => {
  //         loading.dismiss();
  //         console.log("ERROR!: ", err);
  //       }
  //     );
   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PloginPage');
  }
  log(){
    this.navCtrl.push('PassengerPage')
  }
  reg(){
    this.navCtrl.push('PregisterPage')
  }
  
}
