
let arr = [1, 4, 7, 45];

function arrayIsArray(arr) {

	if(arr.length>0 && typeof arr != 'string' ) {
		return true;
	}
	else return false;
}



console.log(arrayIsArray([1, 5, 7]));