
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// let ep = parseInt(readLine());
// let maxi = 0;
// let mini = 0;
// for (let i = 0; i < ep; i++){
//     let num = parseInt(readLine());
//  maxi = Math.max(num); 
//  mini = Math.min(num); 

// }
// console.log(maxi);
// console.log(mini);
let input = parseInt(readLine());
let array = [];
for(let i = 0; i<input; i++){
    array[i] = parseInt(readLine());
}
console.log(Math.max(...array));
console.log(Math.min(...array));

