const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("OpenWeatherMap API Key: ", (key) => {
    console.log(`API Key: '${key}'. This can be changed later in the 'apiKey' file.`);
    if(!fs.existsSync('./apiKey')){
        fs.writeFileSync('./apiKey', key);
        rl.close();
    }
    else{
        console.log('========================================');
        
        rl.question("It seems that './apiKey' already exists.\n\nDo you wish to overwrite the contents of that file? [Y/n] ", (reply) => {
            console.log(`DEBUG: ANSWER WAS ${reply}`)
            let invalidAnswer = true;
            if(reply.toLowerCase() == 'y' || reply == ''){
                fs.truncateSync('./apiKey');
                fs.writeFileSync('./apiKey', key);
                invalidAnswer = false;
            }
            if(reply.toLowerCase() == 'n'){
                console.log("we got here");
                console.log("File will not be overwritten.");
                invalidAnswer = false;
            }
            rl.close();
        })
    }
})
rl.on('close', () => {
    process.exit(0);
});
