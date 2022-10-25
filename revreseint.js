let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//-------------------------------------

let input = readLine().split(",");
let reverse = 0;
while(input !=0)
{
    let digitValue = input%10;
    reverse = reverse*10 + digitValue;
    input = parseInt(input/10);
}
console.log(reverse);
