import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  closeModal(remove = false){
    this.viewCtrl.dismiss(remove);
  }

  ionViewDidLoad() {
    this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

}
