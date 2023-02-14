import { HomePage } from './../pages/home/home';

import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
 


  constructor(public events: Events,
    public platform: Platform,
    public statusBar: StatusBar,private http: Http,
    public splashScreen: SplashScreen, private alertCtrl: AlertController ) {
   // this.initializeApp();
    if (localStorage.getItem('aname')) {
      this.rootPage = 'PassengerPage';      //this.rootPage = PseaFormPage;
    } else {
      this.rootPage = HomePage;
    }
    // if (localStorage.getItem('name')) {
    //   this.rootPage = 'HbNewsPage';      //this.rootPage = PseaFormPage;
    // } else {
    //}
    

  } 

 
  // initializeApp() {

  //   //this.statusBar.backgroundColorByHexString("#fecd03");

  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.

  //     //*** Control Splash Screen
  //     // this.splashScreen.show();
  //     // this.splashScreen.hide();

  //     //*** Control Status Bar
  //     this.statusBar.styleDefault();
  //     this.statusBar.overlaysWebView(false);

  //     //*** Control Keyboard
  //   });
  //}
  
  
  
}


  

  

