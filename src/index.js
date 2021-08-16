module.exports = function toReadable (number) {
  const array = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"]
	const dozen = [ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
	let dozenNum;
	let str = String(number);
	
	if (number === 0) {
		return array[0];
	
  } else if (number < 20) {
		return array[number];
	
  } else if (number < 100) {
		
		dozenNum = number % 10;
		return `${dozen[str[0]]} ${array[dozenNum]}`.trim()
	}





}
