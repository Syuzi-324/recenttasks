

let arr = [1, 4, [55, 64, [1, 2]], 7, [8, 42, [{name:'Joe'}, 7,  [6, 45], 68]] ];
let newArr = [] ;
function flat(arr) {


   
	for(let i = 0; i < arr.length ; ++i) {
		if(Array.isArray(arr[i]) == true) {
			
				 flat(arr[i]);
		
		} else newArr.push(arr[i]);

	}
	
	return newArr;

}



console.log(flat(arr));