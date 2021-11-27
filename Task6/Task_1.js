function convertNormal(arrays) {
	let normalArray = [];
    for (const item of arrays) {
    	normalArray.push(...item);
    }
    return normalArray.sort()
}

console.log(convertNormal([[6, 2, 1], [1, 3, 5], [], [2, 7, 3]]))
console.log(convertNormal([[], [1]]))
console.log(convertNormal([[1, 8], [-1,-2], [-2, 4, 2]]))