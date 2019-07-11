// var arr = ['movie-this','concert-this','spotify-this'];
// Value at index 0 = 'movie-this';

console.log(process.argv); 
// process.argv is an array with 2 elements
// process.argv[0] - the program node
// process.argv[1] - file path to the current application you're running
/* EX: 
    [ 
    '/usr/local/bin/node',
    '/Users/markghoprial/Desktop/code/repositories/github/liri/blank.js' 
    ]
*/

var command = process.argv[2]; 
// var input = process.argv[3].slice(3).join(" ");
console.log(command);

switch (command) {
    
    case 'concert-this':
    console.log('You did it!');
    break;
}