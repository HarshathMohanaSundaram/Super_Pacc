import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController, ToastController, } from 'ionic-angular';
//import { IonicPage, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregister',
  templateUrl: 'pregister.html',
})
export class PregisterPage {
  username:any;
  phone:any;
  emailid:any;
  pass:any;
  constructor(public storage:Storage,public navCtrl: NavController,public alertCtrl:AlertController, public forgotCtrl: AlertController,public navParams: NavParams,private loadingCtrl: LoadingController,private http:Http,public toastCtrl: ToastController) {
  
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }
  reg1() {
       
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodpas_reg";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18",passengername:this.username,
    mobile:this.phone, email:this.emailid,password: this.pass });
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
          console.log("data",dataval.status)
          if (dataval.status == 'error') {
            this.presentToast('Please Check Your Inputs');
          }
          else if (dataval.status == '1') {
            this.presentToast('Contact Your Admin ');
          }
          else if (dataval.status == '2') {
            this.presentToast('User has Already Logined');
         }             
          else if(dataval.status=='success') {
          // this.storage.set('nms', dataval[0].name);
          //  localStorage.setItem('aname', dataval[0].sellername);   
          //  localStorage.setItem('userid', dataval[0].mobile);  
          //  localStorage.setItem('userid', dataval[0].email);   
          //  localStorage.setItem('userid', dataval[0].address);   
          //  localStorage.setItem('userid', dataval[0].password);   
          //  localStorage.setItem('userid', dataval[0].sel_id);   

           this.navCtrl.setRoot('PassengerPage');

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
          // this.navCtrl.setRoot('HLoginPage');     

           console.log("selid",dataval[0].passengerid);          
                  

          }
          else{
          this.presentToast('Please Check Your Inputs');

          }


        },
        err => {
          loading.dismiss();
          console.log("ERROR!: ",err);
        }
      );
  }
  submitForm() {
         
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodpas_reg";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18",passengername:this.username,
    mobile:this.phone, email:this.emailid,password: this.pass});
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
          console.log("data",dataval.status)
          if (dataval.status == 'error') {
            this.presentToast('Please Check Your Inputs');
          }
          else if (dataval.status == '1') {
            this.presentToast('Contact Ypur Admin ');
          }
          else if (dataval.status == '2') {
            this.presentToast('User has Already Logined');
         }             
          else if(dataval.status=='success') {
          // this.storage.set('nms', dataval[0].name);
           localStorage.setItem('name', dataval[0].name);   
           localStorage.setItem('userid', dataval[0].user_id);   
           this.navCtrl.setRoot('PassengerPage');

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
          // this.navCtrl.setRoot('HLoginPage');     

           console.log("userid",dataval[0].user_id);          
                  

          }
          else{
          this.presentToast('Please Check Your Inputs');

          }


        },
        err => {
          loading.dismiss();
          console.log("ERROR!: ",err);
        }
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PregisterPage');
  }
  log(){
    this.navCtrl.push('PloginPage')
  }
  reg(){
    this.navCtrl.push('PassengerPage')
  }
}
