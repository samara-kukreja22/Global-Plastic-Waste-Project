const fs = require('fs');
const ejs = require('ejs');

let country_info = fs.readFileSync('data/plasticData.json', 'utf8');//read JSON string (array of objects) and store it here
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');

console.log(country_info);
let data = JSON.parse(country_info);//convert JSON string into a JS object

let index_html = ejs.render(index_template, {//renders the macropage
    filename: __dirname + '/views/index.ejs',
    data: JSON.parse(country_info)
  });

fs.writeFileSync('build/index.html', index_html, 'utf8');//save the file in the build folder

for(let object of data){//going through the values of data
  let microHTML = ejs.render(micro_template, {//renders the file
      filename: __dirname + '/views/micro.ejs',
      data: object
    });
  fs.writeFileSync('build/'+ object.entity +'.html', microHTML, 'utf8');
}
