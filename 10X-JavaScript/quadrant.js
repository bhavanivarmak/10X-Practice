let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
   idx++;
   return data[idx - 1].trim();
}

// ---------------------------------------
let ep = parseInt(readLine());
let array = [];
for (let i = 1; i <= ep; i++) {
   let point = readLine().split(" ");
   array.push(point);
}
console.log(array);
for (let j = 0; j < array.length; j++) {
   if (array[j][0] > 0 && array[j][1] > 0) {
      console.log("Q1");
   }
   else if (array[j][0] < 0 && array[j][1] > 0) {
      console.log("Q2");
   }
   else if (array[j][0] < 0 && array[j][1] < 0) {
      console.log("Q3");
   }
   else if (array[j][0] > 0 && array[j][1] < 0) {
      console.log("Q4");
   }
}
/*
let point1 = readLine().split(" ");
let point2 = readLine().split(" ");
for(let i = 1; i < ep; i++)
{
   if( point1[0] > 0 && point1[1] > 0 )
{
   console.log("Q1");
} 
else if ( point1[0] < 0 && point1[1] > 0 )
{
   console.log("Q2");
}
else if ( point1[0] < 0 && point1[1] < 0 )
{
   console.log("Q3");
}
else if ( point1[0] > 0 && point1[1] < 0 )
{
   console.log("Q4");
}
}

for(let i = 1; i < ep; i++)
{
   if( point2[0] > 0 && point2[1] > 0 )
{
   console.log("Q1");
} 
else if ( point2[0] < 0 && point2[1] > 0 )
{
   console.log("Q2");
}
else if ( point2[0] < 0 && point2[1] < 0 )
{
   console.log("Q3");
}
else if ( point2[0] > 0 && point2[1] < 0 )
{
   console.log("Q4");
}
}
*/