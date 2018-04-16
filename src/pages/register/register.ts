import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';

//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _db: AngularFireAuth
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this._db.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.alert('Registred successefuly');
        this.navCtrl.setRoot(LoginPage);
      })
      .catch(error => {
        this.alert('Error : '+ error);
      });
  }

  alert($message) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: $message,
      buttons: ['OK']
    }).present();
  }
}
