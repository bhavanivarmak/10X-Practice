let n = [1, 2, 3, 4, 5];

function recarray(n) {
    if (n.length === 0) {
        return;
    }
    console.log(n[0]);
    recarray(n.slice(1));
}
console.log(recarray([n]))

// let arr = [1,2,3,4,5];
// let n = arr.length;
// let i = 0;
// printArr( arr );

// function printArr( arr ) {
//     if ( i == n ) {
//         return;
//     }
//     console.log( arr[i] );
//     i++;
//     printArr( arr );
// }
