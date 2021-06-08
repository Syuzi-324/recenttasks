
let str='how are you?'

function arrayFrom(str) {
	let arr = [];
	for(let i = 0; i < str.length; ++i) {
		arr.push(str[i]);
	}
	return arr;
}

console.log(arrayFrom(str));