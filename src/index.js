module.exports = function toReadable (number) {
  const array = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"]
	const dozen = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

	if (number === 0) {
		return array[0];
	} else if (number < 20) {
		return array[number];
	}





}
