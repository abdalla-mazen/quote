var quotes = [
    {quote: "“Be yourself; everyone else is already taken.”", writer: "― Oscar Wilde" },
    {quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", writer: "― Marilyn Monroe" },
    {quote: "“So many books, so little time.”", writer: "― Frank Zappa" },
    {quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", writer: "― Albert Einstein" },
    {quote: "“A room without books is like a body without a soul.”", writer: "― Marcus Tullius Cicero" },
    {quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", writer: "― Bernard M. Baruch" },
    {quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”", writer: "― William W. Purkey" },
    {quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", writer: "― Dr. Seuss" },
    {quote: "“You only live once, but if you do it right, once is enough.”", writer: "― Mae West" },
    {quote: "“Be the change that you wish to see in the world.”", writer: "― Mahatma Gandhi" },
    {quote: "“In three words I can sum up everything I've learned about life: it goes on.”", writer: "― Robert Frost" },
    {quote: "“Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.”", writer: "― Albert Camus" }
  ];

 display();


function display() {
    var randomNumber = Math.floor(Math.random() * quotes.length);  
    var curtona = `
        <div class="quote">
            <p class="main-text">${quotes[randomNumber].quote}</p>
            <span class="main-text">${quotes[randomNumber].writer}</span>
        </div>
    `;
    document.getElementById("data").innerHTML = curtona;
}
display();
