import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//imported
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { DashboardPage } from './../dashboard/dashboard';

import { AngularFireAuth } from 'angularfire2/auth';
// import { firebase } from 'firebase';
import * as firebase from 'firebase/app';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private fire_auth: AngularFireAuth
  ) {}

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
