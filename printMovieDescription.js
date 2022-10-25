let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie {
    constructor(language, numCharacters, lengthInMinutes) {
        this.language = language
        this.numCharacters = numCharacters
        this.lengthInMinutes = lengthInMinutes
    }
    run() {
        let a = "This is a " + this.language;
        let b = " movie with " + this.numCharacters;
        let c = " characters and is " + this.lengthInMinutes + " minutes long.";
        return [a + b + c]

    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie = new Movie(language, numCharacters, lengthInMinutes)
console.log(movie.run());