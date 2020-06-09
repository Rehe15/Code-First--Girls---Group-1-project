var quotes = [
    '\"Everything you can imagine is real.\" - Pablo Picasso',
    '\"Life isn\'t about finding yourself. Life is about creating yourself\" - George Bernard Shaw',
    '\"Do what you can, with what you have, where you are\" - Theodore Roosevelt',
    '\"Peace Begins with a Smile\" - Mother Theresa',
    '\"What lies behind us and what lies before us are tiny matters compared to what lies within us\"     - Ralph Waldo Emerson',
    '\"Whatever you are, be a good one.\" - Abraham Lincoln',
    '\"Don\'t live the same year 75 times and call it a life \" - Robin Sharma',
    '\"What you get by achieving your goals is not as important as what you become by achieving your goals.\"-  Henry David Thoreau',
    '\"Always keep your eyes open. Keep watching. Because whatever you see can inspire you. \"       - Grace Coddington'

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}

alert('just before you leave....')