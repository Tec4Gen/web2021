function stringFormat(text) {
	let result =  text.split('').reduce((res, current, index) => {
		res += "-" + current.toUpperCase() + current.toLowerCase().repeat(index)
		return res
	})
	result = result[0].toUpperCase() + result.slice(1);
	return result;
}

console.log(stringFormat("Captain"))
console.log(stringFormat("Meme"))
console.log(stringFormat("Sparrow"))