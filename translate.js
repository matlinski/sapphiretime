const fs = require('fs');

const file = fs.readFileSync('otherfile.js', 'utf8');
console.log(file);
