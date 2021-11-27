function getCountChars(text){
	return  [...text].reduce((a, b) => a + "aeiouAEIOU".includes(b), 0);
}

console.log(getCountChars('Captain'))
console.log(getCountChars('Meme'))
console.log(getCountChars('Sprrow'))