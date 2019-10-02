import $ from 'jquery';
import { random } from './helpers/random';

// Create betting carpet
for (let i = 1; i <= 36; i++) {
  const numberDiv = `<div id="nb${i}" class="number">${i}</div>`;
  $('.number-wrap').append(numberDiv);
}

const zeroDiv = '<div id="nb0" class="number">0</div>';
$('.number-wrap').prepend(zeroDiv);

const bet = [];

$('.number').on('click', function () {
  // const thisNumber =
  bet.push(parseInt(($(this).text()), 10));
  const coin = '<div class="coin">1€</div>';
  $(this).append(coin);
});

$('#run').on('click', function () {
  $('#result').remove();
  const result = random(0, 36);
  const resultDiv = `<div id="result">${result}</div>`;
  $('.game-area').append(resultDiv);
});
console.log(bet);
