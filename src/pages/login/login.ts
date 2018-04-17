import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardPage } from '../dashboard/dashboard';


// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _db: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loggedIn() {
    this.navCtrl.setRoot(DashboardPage);

    // this._db.auth
    //   .signInWithEmailAndPassword(this.email.value, this.password.value)
    //   .then(data => {
    //     this.alert('Logged in successefuly');
    //     this.navCtrl.setRoot(DashboardPage);
    //   })
    //   .catch(error => {
    //     this.alert('Error : '+ error);
    //   });
  }

  alert($message) {
      this.alertCtrl.create({
            title: 'Info!',
        subTitle: $message,
            buttons: ['OK']
          }).present();
    }

}
