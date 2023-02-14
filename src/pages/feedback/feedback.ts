import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Events } from 'ionic-angular';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
//orderid:any;
//fb:any;

sno:any;
fid:any;
pid:any;
orderid:any;
fname:any;
qty:any;
desc:any;
fprice:any;
pay:any;
status:any;
seat:any;
fb:any;

 rate = '2';
  
  condition: number = 0;
  list: any[] = new Array(5);
  
  review(i) {
     this.condition = i + 1;
     // your code........
  }
  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
    public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private http: Http, public toastCtrl: ToastController, public navp: NavParams, public storage: Storage) {
  
      this.sno = this.navp.get('a1'); this.fid = this.navp.get('b1');
      this.pid = this.navp.get('c1'); this.orderid = this.navp.get('d1');
      this.fname = this.navp.get('e1');this.qty = this.navp.get('f1');
      this.desc = this.navp.get('g1'); this.fprice = this.navp.get('h1');
      this.pay = this.navp.get('i1');this.status = this.navp.get('j1');
      this.seat = this.navp.get('k1'); 
  
    }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }
  ratnow() {

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/food_update";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18",  order_id: this.orderid, feed: this.fb });
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
            this.presentToast('Contact Your Admin');
          }
          else if (dataval.status == '2') {
            this.presentToast('User has Already Logined');
          }
          else if (dataval.status == 'success') {
            // this.storage.set('nms', dataval[0].name);
            // localStorage.setItem('name', dataval[0].name);
            // localStorage.setItem('userid', dataval[0].user_id);
            ///console.log(this.bid)
            this.presentToast('Thanks For Ratting & your valuable time');


            // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
            // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
            // this.navCtrl.setRoot('HLoginPage');     

            console.log("userid", dataval[0].user_id);


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
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  ratnow1() {
    this.presentToast('Thanks For Ratting & your valuable time');
  }
  out(){
    this.navCtrl.push('AloginPage')

  }
}
