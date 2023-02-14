import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, Keyboard, } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
/**
 * Generated class for the PassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passenger',
  templateUrl: 'passenger.html',
})
export class PassengerPage {
fname:any;

  foodSlider = [
    {
      img: 'assets/imgs/food1.jpg'
    },
    {
      img: 'assets/imgs/food2.jpg'
    },
    {
      img: 'assets/imgs/food3.jpg'
    },
    {
      img: 'assets/imgs/food4.jpg'
    },
    {
      img: 'assets/imgs/food5.jpg'
    },
    {
      img: 'assets/imgs/food6.jpg'
    },
    {
      img: 'assets/imgs/food7.jpg'
    },
    {
      img: 'assets/imgs/dosa.jpg'
    },
    {
      img: 'assets/imgs/biriyani.jpg'
    },
    {
      img: 'assets/imgs/idli.jpg'
    },
    {
      img: 'assets/imgs/meals.jpg'
    },
    {
      img: 'assets/imgs/pongal.jpg'
    },
    {
      img: 'assets/imgs/poori.jpg'
    },
    {
      img: 'assets/imgs/sappathi.jpg'
    },
    {
      img: 'assets/imgs/snacks.jpg'
    },
  ];

  nadalist: any;
  nadalist1: any;
  nadalist2: any;
  nadalist3: any;



  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController,
    public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private http: Http, public toastCtrl: ToastController, public navp: NavParams) {

    //this.banslider();
    this.ban();
    this.ban1();
    this.ban2();
    this.ban3();


  }

      // for(let file of result){ //list of all files and directories
  
      //   if(file.isDirectory == true && file.name !='.' && file.name !='..'){
  
      //   }else if(file.isFile == true){
      //     this.items.push({
      //       title: this.fileDirectory+file.name //full path to file
      //     });
  
      //   }
      // }
 
  ban() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/snacksfood_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18" });
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
  ban1() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/breakfirstfood_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18" });
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
          this.nadalist1 = dataval[0]
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
  ban2() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/lunchfood_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18" });
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
          this.nadalist2 = dataval[0]
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
  // test(){

  //   if (this.fname =='Idly' ) {
  //     img: 'assets/imgs/idli.jpg'

  //   }
  // }

  ban3() {
    // let url = "http://sputnikinfotech.com/nms/index.php/api/nms_profile"; 

    //let url = "http://sputnikinfotech.com/nms/index.php/api/nmsregister";
   
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/dinnerfood_view";
    console.log(url);

    let body = JSON.stringify({ appkey: "t@ftc2o18" });
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
          this.nadalist3 = dataval[0]
          if (dataval.status == 'error') {



           }
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
    console.log('ionViewDidLoad PassengerPage');
  }
  goToRest(a, b, c, d, e, f,g) {
    this.navCtrl.push('FooddetailsPage', { a1: a, b1: b, c1: c, d1: d, e1: e, f1: f,g1:g });
    // this.route.navigate(['/trending']);
  }

  goToTrending() {
    this.navCtrl.push('FooddetailsPage');
  }
  home() {
    this.navCtrl.push('PassengerPage');
  }
  search() {
    this.navCtrl.push('AddfoodPage');
  }
  order() {
    this.navCtrl.push('MyorderPage');
  }
 
}






