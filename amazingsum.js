let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = parseInt(readLine());
let sum = parseInt(readLine());
let mark;
for (let i = 1; i <= input - 1; i++) {
    let a = parseInt(readLine());

    sum += a;
    if (sum > 100) {
        mark = 1;
        console.log("true");
        break;
    }
    sum = a;
}
if (mark != 1) {
    console.log("false");
}