// // 1

const firstName = prompt(`enter your firstname`);
const lastName = prompt(`enter your lastname`);
const birthYear = prompt(`enter your birthyear`);
const thisYear = 2029;
const age = `Aš esu ${firstName} ${lastName}. Man yra ${birthYear - thisYear} metai`;
document.getElementById('age').innerHTML = age;

// // 2

const randomNumber1 = Math.floor(Math.random() * 5555 + 1000);
const randomNumber2 = Math.floor(Math.random() * 5555 + 1000);
const randomNumber3 = Math.floor(Math.random() * 5555 + 1000);
const randomNumber4 = Math.floor(Math.random() * 5555 + 1000);
const randomNumber5 = Math.floor(Math.random() * 5555 + 1000);
const randomNumber6 = Math.floor(Math.random() * 5555 + 1000);
let randomNumbers = [ randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5, randomNumber6 ];
randomNumbers.sort();
let stringNumbers = `${randomNumbers}`;
document.getElementById('randomNumber').innerHTML = stringNumbers;

// 3

function generatePassword() {
	charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let exclude = charset.replace(prompt(`what to exclude`));
	let length = prompt(`enter length`);
	
    retVal = '';
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}
document.getElementById('function').innerHTML = generatePassword()
