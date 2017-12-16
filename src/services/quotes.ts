import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favouriteQuotes: Quote[] = [];

  addQuoteToFavourites(quote: Quote) {
    if(this.isFavouriteQuote(quote)) return false;
    this.favouriteQuotes.push(quote);
    console.table(this.favouriteQuotes)
  }

  removeQuoteFromFavourites(quote: Quote){
    const position = this.favouriteQuotes.findIndex( (quoteEl: Quote) => {
      return quote.id == quoteEl.id;
    })
    this.favouriteQuotes.splice(position, 1)
  }

  getFavouriteQuotes() {
    return this.favouriteQuotes.slice();
  }

  isFavouriteQuote(quote: Quote){
    return this.favouriteQuotes.find( (quoteEl: Quote) => {
      return quote.id == quoteEl.id;
    });
  }
}