const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = parseInt(readLine());
let array = [];
array = readLine().split(" ");
let sum = 0;
for(i=0; i<input; i=i+2)
{
    let value = parseInt(array[i]);
    sum = sum + value;
}
console.log(sum);