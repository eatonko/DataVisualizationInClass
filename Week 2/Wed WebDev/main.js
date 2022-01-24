// import dependencies
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {

    // Load the cars
    const data = await csv().fromFile("cars.csv");

    // Show the cars
    console.log(data);

})();