// 7.գրել ֆունկցիա, որը կկատարի queue -ի դեր



let arr = [7, 8, 9];

function queue(arr, action, elem){
	
	if(action == 'get') {
		console.log(arr.shift());
	}
   if(action == 'set') {
   		arr.push(elem);
   }

   return arr;
   
}
queue(arr, 'get', 3);
queue(arr, 'get', 3);
queue(arr, 'get', 2);
console.log(queue(arr, 'set', 3));



