// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// let input = parseInt(readLine());
// let array = [];
// for(let i = 0; i < input; i++)
// {
//     array[i] = parseInt(readLine())
// }
// let count = 0;
// for(let j =0;j<array.length;j++)
// {
    
//     for (let i = 0; i<array.length;i++)
//     {
//         if(array[j]==array[i])
//         {
//             count++;
//         }

//     }
//     if(count === array[j])
//     {
//         console.log(parseInt(array[j]))
//         break;
//     }
//     console.log(-1)

// } 




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let input = parseInt(readLine());
let count = 1;
for(let i = 0; i < input; i++)
{
    let input1 = parseInt(readLine());
    for(j = 1; j < input; j++){
        let input2 = parseInt(readLine());
        if(input1 == input2){
            count++;
        }
    }
    if(input1 == count){
        console.log(input1);
    }
 
}
