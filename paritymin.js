let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//---------------------------------------------------------

let input = parseInt(readLine());
let array = [];
for (let i = 0; i < input; i++) {
  array[i] = parseInt(readLine()); //34 23 12 24
}
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
let sum = 0;
while (min != 0) {
  let rem = min % 10;
  sum = sum + rem;
  min = parseInt(min / 10);
}
if (sum % 2 == 0) {
  console.log(1);
} else console.log(0);