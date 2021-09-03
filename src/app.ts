import { QuotesView } from './views/quote';

const initViews = (): void => {
    const quotesView = new QuotesView();
    const quotesContainer = document.getElementById('random-quotes');
    quotesView.renderRandomQuotes(quotesContainer);
}

window.addEventListener('DOMContentLoaded', function(){
    initViews();
})