function convertToBinary(word){
	return word.split('').map(symbol => {
		return symbol.charCodeAt(0).toString(2).padStart(8, '0')
	})
}

console.log(convertToBinary("Captain"))
console.log(convertToBinary("Meme"))
console.log(convertToBinary("Sparrow"))
console.log(convertToBinary("Savvy?"))