let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let n = parseInt(readLine());
// console.log(n);

let result = [];
for (let i = 1; i <= n; i++) {
    let array = [];
    for (let j = 0; j < i; j++) {
        if (j === 0 || j === i - 1) {
            array.push(1);
        } else {
            array.push((result[i - 2][j - 1] + result[i - 2][j]));
        }
    }
    result.push(array);
}
console.log(result[n - 1].join("\n"));