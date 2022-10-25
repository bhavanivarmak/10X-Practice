let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

let product = 1;
let sum = 0;
let input = readLine().split('');
for (let i = 0; i < input.length; i++) {
    product *= parseInt(input[i]);
    sum += parseInt(input[i]);
}
console.log(parseInt(product - sum));