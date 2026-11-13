const path = require('path');

console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join(__dirname, 'users.json'))