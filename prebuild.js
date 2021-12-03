const fs = require('fs');

let readJSON = fs.readFileSync('data/plasticData.json', 'utf8');
let data = JSON.parse(readJSON);

for(let object of data){
  fs.unlink('build/' + object.entity +'.html');
}
