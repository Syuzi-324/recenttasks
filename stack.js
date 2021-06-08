
//6,գրել ֆունկցիա, որը կկատարի stack -ի դեր

let arr = [7, 8, 9];

function stack(arr, action, elem){
	
	if(action == 'get') {
		arr.pop();
	}
   if(action == 'set') {
   		arr.push(elem);
   }

   return arr;
}

stack(arr, 'get', 3);
stack(arr, 'get', 3)


console.log(stack(arr, 'set', 2));

