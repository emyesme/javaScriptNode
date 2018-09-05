
const isPrime = require('prime-number')
let arrayGenerator = require('array-generator')

var doSomething = function(n) {
	var a = [];
	if (isPrime (n)){
		a = doOther(n, 0, n);
	}
	return a;
}

var doOther = function(n) {
	return arrayGenerator(n,0,n);
}

module.exports = {f: doSomething, g: doOther};
