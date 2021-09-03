export class Quote {
    author: string;
    tag: string;
    text: string;

    constructor(author: string, tag: string, text: string) {
        this.author = author;
        this.tag = tag;
        this.text = text
    }
}