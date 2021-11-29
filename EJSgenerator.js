const fs = require('fs');
const ejs = require('ejs');

let country_info = fs.readFileSync('data/plasticData.json', 'utf8');//read JSON object and sotre it here
let index_template = fs.readFileSync('views/index.ejs', 'utf8');

let parsedObject = JSON.parse(country_info);
console.log(country_info);
//console.log(JSON.parse(country_info)[1]);

let index_html = ejs.render(index_template, {//renders the macropage
    filename: __dirname + '/views/index.ejs',
    data: JSON.parse(country_info)
  });

fs.writeFileSync('build/index.html', index_html, 'utf8');//save the file in the build folder */ //standard w/out loop

for(let object of parsedObject){
  let microHTML = ejs.render(index_template, {//renders the file
      filename: __dirname + '/views/micro.ejs',
      data: object
    });
  fs.writeFileSync('build/'+ object.entity +'.html', microHTML, 'utf8')
}
