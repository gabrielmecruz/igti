var inputR = null,
  inputG = null,
  inputB = null,
  rangeR = null,
  rangeG = null,
  rangeB = null,
  divBox = null;

function start() {
  rangeR = document.querySelector('#rangeRed');
  rangeG = document.querySelector('#rangeGreen');
  rangeB = document.querySelector('#rangeBlue');

  inputR = document.querySelector('#inputRed');
  inputG = document.querySelector('#inputGreen');
  inputB = document.querySelector('#inputBlue');

  divBox = document.querySelector('#box');

  rangeR.addEventListener('input', colorir);
  rangeG.addEventListener('input', colorir);
  rangeB.addEventListener('input', colorir);

  colorir();
}

function colorir() {
  var red = parseInt(rangeR.value, 10);
  var green = parseInt(rangeG.value, 10);
  var blue = parseInt(rangeB.value, 10);

  inputR.value = red;
  inputG.value = green;
  inputB.value = blue;

  var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';
  console.log(rgbCSS);

  divBox.style.backgroundColor = rgbCSS;
}

start();
