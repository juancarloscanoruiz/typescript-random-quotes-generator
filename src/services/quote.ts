import { Quote } from "../models/quote";
import { Request } from '../helpers/Request';

export class QuoteService {
    private request: Request;

    constructor() {
        this.request = new Request();
    }

    public async getRandomQuotes(): Promise<Quote[]> {
        const quotes = await (await this.request.get('https://goquotes-api.herokuapp.com/api/v1/random?count=5')).data.quotes;
        const formatedQuotes = quotes.map((quote) => new Quote(quote.author, quote.tag, quote.text)) 
        return formatedQuotes;
    }
}