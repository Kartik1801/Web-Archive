console.log('Hello Args')
// process.argv returns an array of
// 1. path where node is installed at index 0
// 2. path where our file that is being run is present at index 1  
// 3 space seprated command line arguments from index 2 to ...
// (ie node args.js a b c -- returns ["path","path where args.js is present"],'a','b','c').
console.log(process.argv)