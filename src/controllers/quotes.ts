import { AxiosResponse } from "axios";
import { Quote } from "../models/quote";
import { QuoteService } from "../services/quote";

export class QuotesController {
    private QuoteService: QuoteService
    constructor() {
        this.QuoteService = new QuoteService();
    }

    public async getRandomQuotes(): Promise<Quote[]> {
        return await this.QuoteService.getRandomQuotes()
    }
}