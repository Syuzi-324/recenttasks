const Arr=[2,7,9,16,74,92,101];


function binarySearch(arr,start,end,elem){

	
	
	middle=Math.floor(start+end/2)
	
	if(start>end){
		return -1;
	}
	
 
  	else if(elem ==arr[middle]){
		return middle;

	}else if(elem<arr[middle]){
		
		return binarySearch(arr,start,middle-1,elem)
	
	} else {
		
		return binarySearch(arr,middle,end,elem)
	}

 
	

}


console.log(binarySearch(Arr,0,7,101));