//  an app to explore and refresh on modules simply going through
//  it so that I remain consistent with the course;

const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js!');

const appendToFile = (fileName, data) => {
  fs.appendFileSync(fileName, data);
};

appendToFile('hello.txt', ' This is a new line!');