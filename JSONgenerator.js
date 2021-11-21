const fs = require('fs');//like dice or scorecard

let plasticData = [];

let totalPlasticData_csv = fs.readFileSync('data/plasticData.csv', 'utf8');
/*let macroWasteGen_csv = fs.readFileSync('data/macro-totalWasteGeneration.csv', 'utf8');//storing csv: organizes data into a table format
let perCapita_csv = fs.readFileSync('data/barChart-PerCapita.csv', 'utf8');
let inadequateWaste_csv = fs.readFileSync('data/piChart-inadequate.csv', 'utf8');
let mismanagedWaste_csv = fs.readFileSync('data/piChart-GlobalMismanaged.csv', 'utf8'); */

let totalPlasticData = totalPlasticData_csv.split("\n");//is an array, each row is a different element

/*
let totalWasteGeneration = macroWasteGen_csv.split("\n");//is an array, each row is a different element
let perCapitaWaste = perCapita_csv.split("\n");
let inadequateWaste = inadequateWaste_csv.split("\n");
let mismanagedWaste = mismanagedWaste_csv.split("\n");


totalWasteGeneration.forEach(function(countries) {
  let country_info = countries.split(',');
  let country = {};
  country['entity'] = country_info[1];
  country['pwg'] = country_info[4];
});*/

totalPlasticData.forEach(function(countries) {
  let country_info = countries.split(',');
  let country = {};
  country['entity'] = country_info[0];
  country['year'] = country_info[1];
  country['pwg'] = country_info[2];
  country['mismanaged'] = country_info[3];
  country['inadequate'] = country_info[4];
  country['perCapita'] = country_info[5];

  plasticData.push(country);
});

  //much easier to label specific info about each character
  //figure out how to go from csv to JSON


fs.writeFileSync('data/plasticData.json', JSON.stringify(plasticData), 'utf8');//stringify and save it and then you can also parse it
