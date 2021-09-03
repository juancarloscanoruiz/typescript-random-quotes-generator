import { QuotesController } from '../controllers/quotes';

export class QuotesView {
    private quotesController: QuotesController;

    constructor() {
        this.quotesController = new QuotesController();
    }

    public async renderRandomQuotes(container: Element) {
       const randomQuotes = await this.quotesController.getRandomQuotes();
       let htmlQuotes = '';
        randomQuotes.forEach((quote) => {
            htmlQuotes += `
                <div class="card">
                    <blockquote>${quote.text}</blockquote>
                    <figcaption> — ${quote.author}</figcaption>
                </div>
            `;
        })
        container.insertAdjacentHTML('beforeend', htmlQuotes);
    }
}