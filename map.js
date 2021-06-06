let Arr=[7,9,12,4,6];


function map(arr){
	for(let i=0;i <arr.length; ++i){
		arr[i]*=10;
	}
	return arr;
}


console.log(map(Arr));