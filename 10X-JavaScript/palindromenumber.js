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
let temp = input;
let backward = 0;
while(input!=0)
{
    let rem = input%10;
    backward = backward*10+rem
    input = parseInt(input/10)
}
if(temp == backward)
{
    console.log('True')
}
else console.log('False')