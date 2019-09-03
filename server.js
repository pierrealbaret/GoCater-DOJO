const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: fs.createReadStream("./test-data-10-exp-5.list")
});

let uniqLastName = {};
let uniqFirstName = {};
let uniqFullName = {};
let commonFirstNames = {};
let commonLastNames = {};

rl.on("line", function(line) {

  // We might have a First Name and Last Name
  if(/.*(,).*(--)/.test(line)) {
    const firstName =  line.match(/(.*),/)[1].trim().toUpperCase();
    const lastName =  line.match(/,(.*)--/)[1].trim().toUpperCase();

    if(!uniqFirstName[firstName]) {
      uniqFirstName[firstName] = firstName;
    } else {
      commonFirstNames[firstName] = (commonFirstNames[firstName]) ? 0 : commonFirstNames[firstName] +=1;
    }

    if(!uniqLastName[lastName]) {
      uniqLastName[lastName] = lastName;
    }  else {
      commonLastNames[lastName] = (commonLastNames[lastName]) ? 0 : commonLastNames[lastName] +=1;
    }

    if(!uniqFullName[firstName] && !uniqFullName[firstName] !== lastName) {
      uniqFullName[firstName] = lastName;
    }
  }

});

rl.on('close', function() {
  console.log(`There is ${Object.keys(uniqFullName).length} unique full name`);
  console.log(`There is ${Object.keys(uniqFirstName).length} unique first name`);
  console.log(`There is ${Object.keys(uniqLastName).length} unique last name`);
});
