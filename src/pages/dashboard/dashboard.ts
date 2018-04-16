import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//imported
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  email: string;

  constructor(private _db: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.email = this._db.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
