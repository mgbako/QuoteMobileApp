import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'

//Pages
import { QuotePage } from '../quote/quote';
//Services
import { QuotesService } from "../../services/quotes"
import { SettingsService } from '../../services/settings'

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavouriteQuotes();
  }

  viewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) =>{
      if (remove) {
        this.removeFromFavourite(quote);
      }
    })
  }

  removeFromFavourite(quote: Quote) {
    this.quotesService.removeQuoteFromFavourites(quote);
    const position = this.quotes.findIndex( (quoteEl: Quote) => {
      return quote.id == quoteEl.id;  
    });
    this.quotes.splice(position, 1);
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'newcolor';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
