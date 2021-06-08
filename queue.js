//7.գրել ֆունկցիա, որը կկատարի queue -ի դեր



let arr = [7, 8, 9];

function queue(arr, action, elem){
	
	if(action == 'get') {
		arr.shift();
	}
   if(action == 'set') {
   		arr.push(elem);
   }

   return arr;
   
}
queue(arr, 'get', 3);
queue(arr, 'get', 3);

console.log(queue(arr, 'set', 3));

