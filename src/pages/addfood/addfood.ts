import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, Keyboard, } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
/**
 * Generated class for the AddfoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addfood',
  templateUrl: 'addfood.html',
})
export class AddfoodPage {

  nadalist: any;
  foods:any;
  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
    public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private http: Http, public toastCtrl: ToastController, public navp: NavParams) {

    //this.banslider();
   // this.ban();

  }
  // ban() {
  //   // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

  //   //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

  //   let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/breakfirstfood_view";
  //   console.log(url);

  //   let body = JSON.stringify({ appkey: "t@ftc2o18" });
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   //let photo = '';
  //   this.http
  //     .post(url, body, options)
  //     .subscribe(
  //       data => {

  //         let dataval = data.json();
  //         /*   console.log(dataval['status']);
  //         console.log(dataval.status); */
  //         console.log(dataval[0])
  //         this.nadalist = dataval[0]
  //         if (dataval.status == 'error') { }
  //         else if (dataval.status == '1') { }
  //         else if (dataval.status == 'success') { }
  //         else { }
  //       },
  //       err => {
  //         console.log("ERROR!: ", err);
  //       }
  //     );
  // }

  bd(a,b,c,d,e,f) {
    this.navCtrl.push('FooddetailsPage',{a1:a,b1:b,c1:c,d1:d,e1:e,f1:f})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfoodPage');
  }
  search(){
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/food_search";
    console.log(this.foods);
   
    let body = JSON.stringify({ appkey: "t@ftc2o18",foodid:this.foods });
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
           this.nadalist=dataval[0]
        if (dataval.status== 'error') {	   }
        else if (dataval.status== '1') {		 }			   
        else if(dataval.status=='success') {   }
        else{   }	 
      },
      err => {
        console.log("ERROR!: ", err);
      }
      );
    }  
}


