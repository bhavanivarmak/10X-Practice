let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
///////////////////
function addition(a, b) {
    let add = a + b;
    return add;
}
let a = parseInt(readLine());
let b = parseInt(readLine());

let sum = addition(a, b);
console.log(sum);











// let n = parseInt(readLine());
// let addition = 0;
// let array = [];
// for (let i = 0; i < n; i++) {
//     array[i] = parseInt(readLine());
//     addition += array[i]
// }
// console.log(addition);
