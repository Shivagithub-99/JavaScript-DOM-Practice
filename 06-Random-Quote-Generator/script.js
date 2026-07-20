const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        quote: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu"
    },
    {
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    }
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("button");
const count = document.querySelector("#count");


function generateQuote(){

    let quoteNumber = Math.floor(Math.random() * quotes.length);

    let quoteObj = quotes[quoteNumber];

    quote.innerText = `"${quoteObj.quote}"`;

    author.innerText = `- ${quoteObj.author}`;

    count.innerText = `Quote ${quoteNumber + 1} of ${quotes.length}`;
}


button.addEventListener("click", generateQuote);


generateQuote();
