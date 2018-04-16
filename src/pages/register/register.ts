import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('firstname') firstname;
  @ViewChild('lastname') lastname;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let alert = this.alertCtrl.create({
      title: 'Welcome successful!',
      subTitle: 'You are registered as : ' + this.username.value + " & " + this.password.value,
      buttons: ['OK']
    });
    alert.present();
  }

}
