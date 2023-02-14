import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alogin',
  templateUrl: 'alogin.html',
})
export class AloginPage {
  username: any;
  pass: any;

    showPassword = false;

  isActiveToggleTextPassword: Boolean = true;

  constructor(public storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController, public forgotCtrl: AlertController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, public toastCtrl: ToastController) {
  }
   public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}
 toggleShow() {
    this.showPassword = !this.showPassword;
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

    // localStorage.setItem('name', this.username[0].sellername);
    // localStorage.setItem('selid', this.pass[0].sellerid);
    // this.navCtrl.setRoot('AdminPage');
    // this.presentToast('Admin Login Successfully');

    let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodsel_log";
    console.log(url);
   // console.log(this.username,this.password);
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let body = JSON.stringify({ appkey: "t@ftc2o18", sellername: this.username, password: this.pass });
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
            this.presentToast('Please Check Username and Password');
          }
          else if (dataval.status == '1') {
            this.presentToast('Contact Your Admin ');
          }
          else if (dataval.status == '2') {
            this.presentToast('User has Already Logined');
          }
          else if (dataval.status == 'success') {

            this.presentToast('Thank You for login');

            //this.storage.set('nms', dataval[0].name);
            localStorage.setItem('name', dataval[0].sellername);
            localStorage.setItem('selid', dataval[0].sellerid);
            this.navCtrl.setRoot('AdminPage');

            // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
            // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
            // this.navCtrl.setRoot('HLoginPage');     

            console.log("userid", dataval[0].sellerid);

          }
          else {
            localStorage.setItem('name', dataval[0].sellername);
            localStorage.setItem('selid', dataval[0].sellerid);
            this.navCtrl.setRoot('AdminPage');

           // this.presentToast('Please Check Username and Password');

          }
        },
        err => {
          loading.dismiss();
          console.log("ERROR!: ", err);
        }
      );
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AloginPage');
  }
log(username:any){
  //  localStorage.setItem('name', this.username[0].sellername);
  //   localStorage.setItem('selid', this.pass[0].sellerid);
  //   this.navCtrl.setRoot('AdminPage');
  //   this.presentToast('Admin Login Successfully');
if(this.username=='admin' && this.pass=='admin123'){
  this.navCtrl.push('AdminPage');
   this.presentToast('Admin Login Successfully');

}
else if(this.username!='admin'){
  let url = "http://demo.sputnikinfotech.com/sputi/ion/index.php/api/foodsel_log";
  console.log(url);
 // console.log(this.username,this.password);
  let loading = this.loadingCtrl.create({
  });
  loading.present();
  let body = JSON.stringify({ appkey: "t@ftc2o18", sellername: this.username, password: this.pass });
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
          this.presentToast('Please Check Username and Password');
        }
        else if (dataval.status == '1') {
          this.presentToast('Contact Your Admin ');
        }
        else if (dataval.status == '2') {
          this.presentToast('User has Already Logined');
        }
        else if (dataval.status == 'success') {

          this.presentToast('Thank You for login');

          //this.storage.set('nms', dataval[0].name);
          localStorage.setItem('aname', "USER"+this.username);
      localStorage.setItem('pass', this.pass);
          this.navCtrl.setRoot('PassengerPage');

          // this.events.publish('user:created',dataval[0].name, dataval[0].photo, Date.now());
          // this.navCtrl.setRoot('HdashPage',{userid:dataval[0].user_id});     
          // this.navCtrl.setRoot('HLoginPage');     

          //console.log("userid", dataval[0].sellerid);

        }
        else {
          
          // this.navCtrl.setRoot('AdminPage');

         this.presentToast('Please Check Username and Password');

        }
      },
      err => {
        loading.dismiss();
        console.log("ERROR!: ", err);
      }
    );
} 
else{
  this.presentToast('check your username and password');

}
}
reg(){
  this.navCtrl.push('AregisterPage')
}
}
