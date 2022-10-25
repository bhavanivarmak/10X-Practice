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

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().split(' ');
    let peak_index = -1;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    if (n !== 1) {

        for (let i = 0; i < arr.length; i++) {

            if (i == 0) {
                if (arr[0] > arr[1]) {
                    peak_index = 0 + 1;
                    break;

                }
            } else if (i === arr.length - 1) {
                if (arr[n - 2] < arr[n - 1]) {
                    peak_index = n - 1 + 1;
                    break;
                }

            } else {

                if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
                    peak_index = i + 1;
                    break;
                }

            }

        }
        console.log(peak_index);
    }
    else if (n === 1) {
        console.log(1)
    }



}

