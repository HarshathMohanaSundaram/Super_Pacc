import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController, ToastController, } from 'ionic-angular';
//import { IonicPage, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aregister',
  templateUrl: 'aregister.html',
})
export class AregisterPage {
  tname:any;
  aname:any;
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

  submitForm() {
    localStorage.setItem('aname', this.phone); 
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foo_train_reg";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18", username: this.aname, password: this.pass, fname:this.phone });
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
          if (dataval.status== 'error') {
            this.presentToast('உங்கள் உள்ளீட்டைச் சரிபார்க்கவும்');
          }
          else if (dataval.status== '1') {
            this.presentToast('நிர்வாகியைத் தொடர்பு கொள்ளவும்');
          }
          else if (dataval.status== '2') {
           this.presentToast('பயனர் ஏற்கனவே பதிவுசெய்துள்ளார்');
         }             
          else if(dataval.status=='success') {
           this.storage.set('nms', dataval[0].sellername);
           localStorage.setItem('aname', dataval[0].mobile);   
           localStorage.setItem('userid', dataval[0].sel_id);   

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
           this.navCtrl.setRoot('PassengerPage');     

           console.log("userid",dataval[0].user_id);          
                   

          }
          else{
            this.presentToast('உங்கள் உள்ளீட்டைச் சரிபார்க்கவும்');

          }


        },
        err => {
          loading.dismiss();
          console.log("ERROR!: ", err);
        }
      );
  }


  submitForm2() {
       
    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodsel_reg";
    console.log(url);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18",trainid:this.tname, sellername: this.aname,
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
           localStorage.setItem('aname', dataval[0].sellername);   
           localStorage.setItem('userid', dataval[0].mobile);  
           localStorage.setItem('userid', dataval[0].email);   
           localStorage.setItem('userid', dataval[0].address);   
           localStorage.setItem('userid', dataval[0].password);   
           localStorage.setItem('userid', dataval[0].sel_id);   

           this.navCtrl.setRoot('PassengerPage');

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
          // this.navCtrl.setRoot('HLoginPage');     

           console.log("selid",dataval[0].selleridid);          
                  

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
    console.log('ionViewDidLoad AregisterPage');
  }
  log(){
    this.navCtrl.push('AloginPage')
  }
  reg(){
    this.navCtrl.push('AdminPage')
  }
  
}
