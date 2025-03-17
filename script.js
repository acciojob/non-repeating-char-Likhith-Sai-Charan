function firstNonRepeatedChar(str) {
 // Write your code here
	const freq={};

	for(let char of str){
		freq[char]=(freq[char]||0)+1;
	}

	for(let char of str){
		if(freq[char]===1) return char;
	}

	return null
}

console.log(firstNonRepeatedChar('aabbcdd'))
console.log(firstNonRepeatedChar('aabbcc'))
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
