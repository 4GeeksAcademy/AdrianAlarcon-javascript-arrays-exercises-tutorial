function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let i = 0; i < theArray.length; i++) {
		total = total + theArray[i];
	}
	return total;
}

console.log(sumTheElements([1,2,3,4,5,6]))