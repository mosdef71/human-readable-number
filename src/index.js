module.exports = function toReadable (number) {
  const array = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"]
	const dozen = [ "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
	let str = String(number);
	let dozenNum = number % 10;
	let firstHundredNum = number / 100;
	let lastHundredNum = number % 100;
	
	if (number === 0) {
		return "zero";
	
	} else if (number < 20) {
		return array[number];

	} else if (number < 100) {
		return `${dozen[str[0]]} ${array[dozenNum]}`.trim()
    
	} else if (number > 100 && dozenNum < 20) {
		return `${array[Math.floor(firstHundredNum)]} hundred ${array[lastHundredNum]}`.trim()
	}




}
