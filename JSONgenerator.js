const fs = require('fs');//like dice or scorecard

let totalWasteGeneration = [];

let macroWasteGen_csv = fs.readFileSync('data/macro-totalWasteGeneration.csv', 'utf8');//storing csv: organizes data into a table format
//universal text format 8 bits
//stored in that variable

let totalWasteGeneration = macroWasteGen_csv.split("\n");//is an array, each row is a different element

totalWasteGeneration.forEach(function(countries) {
  let country_info = country.split(',');
  let country = {};
  country['entity'] = country_info[1];
  country['code'] = country_info[2];
  country['year'] = country_info[3];
  country['pwg'] = country_info[4];
  //much easier to label specific info about each character
  //figure out how to go from csv to JSON


fs.writeFileSync('data/macroPlasticWaste.json', JSON.stringify(totalWasteGeneration), 'utf8');//stringify and save it and then you can also parse it
