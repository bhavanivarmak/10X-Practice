let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine())
let nums = []
let indices = []
for (let i = 0; i < n * 2; i++) {
    if (i < n) {
        nums.push(parseInt(readLine()))
    }
    else {
        indices.push(parseInt(readLine()))
    }
}
let answer = []
let a = []
for (let i = 0; i < n; i++) {
    a = answer.splice(indices[i])
    answer.push(nums[i])
    answer = answer.concat(a)
}
for (let i = 0; i < n; i++) {
    console.log(answer[i])
}