// Reading Path parameters in Node.js

// Importing the below modules
const express = require("express");
const path = require('path');
const app = express();
const fs = require("fs");
const https = require("https");

var PORT = process.env.port || 8080;

var apiKey = '';
try{
   apiKey = fs.readFileSync('./apiKey').toString().trimEnd();
}
catch (err) {
   console.error(err)
   console.log("There was a problem opening the 'apiKey' file. Make sure the file exists and the user has access to it.")
   process.exit(1);
}

// console.log(apiKey);


app.get('/', function(req, res) {
   // console.log(req.query);
   const zip = Number.parseInt(req.query.zip);
   // console.log("Zip Code received is: " + zip);
   if(zip > 10000 && zip < 99999){ //simple test for zip code validation

      https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${apiKey}`, (response) =>{
         let responseText = '';

         response.on('data', (chunk) => {
            responseText += chunk;
         });

         response.on('end', () => {
            // console.log(JSON.parse(responseText));
            res.statusCode = JSON.parse(responseText).cod;
            res.json(JSON.parse(responseText));
         })
      })

   }
   else{
      res.status(400)
      res.send(JSON.parse("{\"error\": \"invalid 5 digit zip code.\"}"));
   }
});

app.listen(PORT, function(error){
   if (error) throw error
   console.log("Server running successfully on PORT : ", PORT)
})

