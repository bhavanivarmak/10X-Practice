// abc odd
// You are given integers A and B, each between 1 and 3 (inclusive).

// Determine if there is an integer C between 1 and 3 (inclusive) such that A×B×C is an odd number.

// Constraints
// 1 <= A,B <= 3
// Input
// Two space seperated integers, denoting A,B respectively.

// Output
// If there is an integer C between 1 and 3 that satisfies the condition, print Yes; otherwise, print No.

// Example
// Input1:

// 3 1
// Output1:

// Yes
// Explanation1:

// Let C = 3. Then, A×B×C = 3×1×3 = 9, which is an odd number..

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = readLine().split(" ").map(Number);

let A = n[0];
let B = n[1];
let result = 0;
//1 <= A,B <= 3
for(i = 1; i <= 3; i++){ //3*1*3 = 9%2 = 4.5 !== 0 result is 1 if it is 1 then Yes otherwise No
    if((A * B * i)%2 !== 0){
    result = 1;
    break;
    }
}
//console.log(result);
if(result === 1){
    console.log("Yes");
} else{
    console.log("No");
}