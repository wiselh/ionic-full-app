import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  email: string;
  chatMessage: string;
  messages: any[];
  chatSubscribe;
  // socialMessage;

  constructor(
    private _db_auth: AngularFireAuth,
    private _db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    // this.email = this.navParams.get('email');
    this.chatSubscribe = this._db
      .list('/chat')
      .valueChanges()
      .subscribe(data => {
        this.messages = data;
      });
  }

  // To get ID
  /**
   * import { Observable } from 'rxjs/observable';
   *
   * items: Observable<Item[]>;
   *
   * this.items = this._db
      .collection("items")
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      });
   */

  ionViewDidLoad() {
    this.alert(this.email);

    this.email = this._db_auth.auth.currentUser.email;

    // this._db.list('/chat').push({
    //   socialMessage: true,
    //   chatMessage: `${this.email} has joined the Chat`
    // });
  }

  ionViewWillLeave() {
    // this.chatSubscribe.unsubscribe();
    // this._db.list('/chat').push({
    //   socialMessage: true,
    //   chatMessage: `${this.email} has left the Chat`
    // });
  }

  send() {
    this.alert(this.email);
    this._db
      .list('/chat')
      .push({
        email: this._db_auth.auth.currentUser.email,
        message: this.chatMessage
      });
    this.chatMessage = '';
  }

  alert($message) {
    this.alertCtrl
      .create({
        title: 'Info!',
        subTitle: $message,
        buttons: ['OK']
      })
      .present();
  }
}
