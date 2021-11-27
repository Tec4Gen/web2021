function ckeckUniqueSymbols(text) {
	let letters = text.toLowerCase().split('')
    return letters.every((letter, index) => index == letters.indexOf(letter));
}

console.log(ckeck.UniqueSymbols("Captain"))
console.log(ckeck.UniqueSymbols("Meme"))
console.log(ckeck.UniqueSymbols("Sparrow"))
console.log(ckeck.UniqueSymbols("Savvy?"))
console.log(ckeck.UniqueSymbols("a?"))