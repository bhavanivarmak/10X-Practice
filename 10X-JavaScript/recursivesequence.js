
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------


function recursive(n) {


    return
}

let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let num = parseInt(readLine());
    console.log(recursive(num));
}