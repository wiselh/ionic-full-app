import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

//imported
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { DashboardPage } from './../dashboard/dashboard';

import { AngularFireAuth } from 'angularfire2/auth';
// import { firebase } from 'firebase';
import * as firebase from 'firebase/app';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

const bannerConfig: AdMobFreeBannerConfig = {
    // id: 'ca-app-pub-2630608963246770/6012945756',
    isTesting: true,
    autoShow: true
    };

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private fire_auth: AngularFireAuth,
    private admob: AdMobFree,
  private platform: Platform) {}

  ionViewDidLoad(){
    if(this.platform.is('cordova')) {

      this.admob.banner.config(bannerConfig);
      this.admob.banner
        .prepare()
        .then(() => {})
        .catch(e => console.log(e));
    }
  }

  signIn() {
    this.navCtrl.push(LoginPage);
  }
  signUp() {
    this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook() {
    this.fire_auth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
        this.navCtrl.setRoot(DashboardPage);
      });
  }

  logoutOfFacebook() {
    this.fire_auth.auth.signOut();
  }
}
