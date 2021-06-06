let Arr=[40,60,10,3,2];

function filter(arr){
	let array=[];
	for(let i=0; i<arr.length; ++i){
		if(find(arr[i],i,arr)){
			array.push(find(arr[i],i,arr));
			
		}
	}
	
	


function find(val,i,innerArr){
	if(val<10){
		return val;
	} 
}
return array;
}

const result=filter(Arr);
console.log(result);