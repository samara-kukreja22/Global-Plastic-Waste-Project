const fs = require('fs');
const ejs = require('ejs');

let country_info = fs.readFileSync('data/plasticData.json', 'utf8');//read JSON object and sotre it here
let index_template = fs.readFileSync('views/index.ejs', 'utf8');

let index_html = ejs.render(index_template, {//renders the file
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(country_info)
});

fs.writeFileSync('build/index.html', index_html, 'utf8');//save the file in the build folder
