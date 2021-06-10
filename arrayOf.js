

function array(...args){

	let arr = [];
	arr.push(args);
	return arr;
}


console.log(array(1, 4, '55, 64, [1, 2]', 7, '8', 42, {name:'Joe'}, 7,  [6, 45], 68));
