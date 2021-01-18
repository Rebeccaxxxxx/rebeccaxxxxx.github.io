//Greeting based on time of the day

let today = new Date();
let hour = today.getHours();
console.log(hour);
let firstWord; 
let secondWord;
let left = document.getElementById('left'); 
let right = document.getElementById('right'); 
console.log(left);
console.log(right);

if (hour >= 18 || hour <= 5) {
	firstWord = 'GOOD';
	secondWord = 'EVENING';
} else if (hour > 12) {
	firstWord = 'GOOD';
	secondWord = 'AFTERNOON';
} else if (hour > 5) {
	firstWord = 'GOOD';
	secondWord = 'MORNING';
} else {
	firstWord = 'HELLO';
	secondWord = 'OLLEH';
}

left.textContent = firstWord;
right.textContent = secondWord;

