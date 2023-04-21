const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

let i = 0; //To store the value before we pop it out of the array.

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1]) {
		i = first[first.length - 1];
		first.pop();
		return i;
	} 
	else if (third[third.length - 1] < second[second.length - 1]) {
		let i = second[second.length - 1];
		second.pop();
		return i;
	}
	else {
		
		let i = third[third.length - 1];
		third.pop();
		return i;
	}	
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)