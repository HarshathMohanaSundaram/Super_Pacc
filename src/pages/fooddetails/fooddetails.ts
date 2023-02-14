import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, Keyboard, } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

/**
 * Generated class for the FooddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fooddetails',
  templateUrl: 'fooddetails.html',
})
export class FooddetailsPage {
  tabID = 1;
  qty = 1;
  k:any;
  l:any;
  m:any;
  n:any;
  restaurants = [
    {
        img : 'assets/imgs/food1.jpg'
    },
    {
        img : 'assets/imgs/food2.jpg'
    },
    {
        img : 'assets/imgs/food3.jpg'
    },
    {
        img : 'assets/imgs/food4.jpg'
    },
  ];
  sno:any;
food_id:any;
foodname:any;
quantity:any;
description:any;
foodprice:any;
passenger_id:any;
pay:any;
status:any;
seat:any;
pname:any;
phone:any;
sqty:any;
image:any;
totquanamt:any
constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
  public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
  private http: Http, public toastCtrl: ToastController, public navp: NavParams) {

    this.sno = this.navp.get('a1'); this.food_id = this.navp.get('b1');
    this.foodname = this.navp.get('c1'); this.quantity = this.navp.get('d1');
    this.description = this.navp.get('e1');this.foodprice = this.navp.get('f1');
    this.image = this.navp.get('g1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooddetailsPage');
  }
  plus() {
    this.qty = this.qty + 1
    this.totquanamt =this.foodprice * this.qty;
    console.log(this.totquanamt);
}

minus() {
    if(this.qty > 1) {
        this.qty = this.qty - 1
        this.totquanamt =this.foodprice * this.qty;
        console.log(this.totquanamt);
    }
}
submitForm() {

  let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodreq";
  console.log(url);
  let loading = this.loadingCtrl.create({
  });
  loading.present();
  let body = JSON.stringify({
    appkey: "t@ftc2o18", foodname: this.foodname,food_id: this.food_id,
     quantity: this.quantity, description: this.description,foodprice: this.totquanamt, payment: this.pay,
    status: this.status,seatno:this.seat,passname:this.pname,mobile:this.phone,counting:this.sqty
  });
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
          // localStorage.setItem('orderid', dataval[0].orderid);
          this.presentToast('Your Food Request sent');
          this.navCtrl.setRoot('PassengerPage');

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
          // this.navCtrl.setRoot('HLoginPage');     



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
goToPaymemt(){

  this.navCtrl.push('SuccessPage')
}
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 5000,
    position: 'bottom'
  });
  toast.present();
}
goToSuccess(){
  this.presentToast('Sorry Not Available in now');
}
}
