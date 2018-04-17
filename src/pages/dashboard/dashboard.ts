import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  email: string = 'hakim@mail.com';
  chatMessage: string;
  messages: any[];
  data;

  constructor(private _db_auth: AngularFireAuth, private _db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    // this.email = this.navParams.get('email');
    // this.email = this._db_auth.auth.currentUser.email;

    this.data = this._db.list('/chat').valueChanges().subscribe(data => {
      this.messages = data;
    });
  }

  ionViewDidLoad() {

  }
  send(){
    this._db.list('/chat').push({
      email: this.email,
      message: this.chatMessage
    });
    this.chatMessage = '';
  }

}
