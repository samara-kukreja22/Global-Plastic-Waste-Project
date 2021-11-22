const fs = require('fs');
const ejs = require('ejs');

let country_info = fs.readFileSync('data/plasticData.json', 'utf8');//read JSON object and sotre it here
let index_template = fs.readFileSync('views/index.ejs', 'utf8');

for(let i in country_info){
  eval("index"+i+"_html" = ejs.render(index_template, {//renders the file
    filename: __dirname + '/views/index.ejs',
    data: JSON.parse(country_info[i]);)
  }));

  /*let 'index'+i+'_html' = ejs.render(index_template, {//renders the file
    filename: __dirname + '/views/index.ejs',
    data: JSON.parse(country_info[i]);
  });*/

  //fs.writeFileSync('build/'+i+'index.html', 'index'+i+'_html', 'utf8');//save the file in the build folder
}
