const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: fs.createReadStream("./test-data-10-exp-5.list")
});

const UserCollection = require('./factory/UserCollection');

let fullNameList = [];

rl.on("line", function(line) {

  // We might have a First Name and Last Name
  if(/.*(,).*(--)/.test(line)) {
    const firstName =  line.match(/(.*),/)[1].trim().toUpperCase();
    const lastName =  line.match(/,(.*)--/)[1].trim().toUpperCase();

    fullNameList.push({
      firstName,
      lastName,
    });
  }

});

rl.on('close', function() {
  console.log('fullNameList', fullNameList);

  const UserList = new UserCollection(fullNameList);
  console.log(UserList.getMostCommonFirstNames());
// UniqFullName
// UniqFirstName
// UniqLastName
  console.log('---------- START ----------');
  console.log(`There is ${UserList.getUniqFirstNameSet().size} unique first name`);
  console.log('---------------------------');
  console.log(`There is ${UserList.getUniqLastNameSet().size} unique last name`);
  console.log('---------------------------');
  console.log(`There is ${UserList.getUniqFullNameSet().size} unique full name`);
  console.log('---------------------------');
  console.log(`The 10 most common first name are ${UserList.getMostCommonFirstNames()}`)
  console.log('---------------------------');
  console.log(`The 10 most common names are ${UserList.getMostCommonLastNames()}`)
  console.log('---------- END ------------');
});
