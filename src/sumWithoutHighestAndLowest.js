// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	// your code here
	lowest_number = Math.min(...array);
	highest_number = Math.max(...array);
	arr = array.filter(function(num){
		if (num !== lowest_number && num !== highest_number) {
			return num;
		}
	})
	sum = 0;
	for (num of arr) {
		sum += num
	}
	return sum
};

module.exports = sumWithoutHighestAndLowest;
