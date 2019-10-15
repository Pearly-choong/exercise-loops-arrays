console.log('testing');

var n = 4;
var names = [''];
var project = [];

var i = 0;
do {
  document.getElementByID('result').innerHTML += names[i];
  i++;
} while(i>n);
