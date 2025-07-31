let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'violet'];
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColor');

const gradients = [
  'linear-gradient(135deg, #f04babff, #630063ff)',
  'linear-gradient(135deg, #800080, #27e927ff)',
  'linear-gradient(135deg, #f61a88ff, #ff9100ff)'
];

let gradientIndex = 0;

changeColorBtn.addEventListener('click', () => {
  gradientIndex = (gradientIndex + 1) % gradients.length;
  colorBox.style.background = gradients[gradientIndex];
});

const quotes = [
  "It doesn't have to make sense to anyone but you!",
  "Everything you love makes you who you are.",
  "Be so you that it inspires others to try!",
  "Everything is connected even when you don't realize it.",
  "The only way out is in."
];

const showQuoteBtn = document.getElementById('showQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

showQuoteBtn.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = randomQuote;
});
