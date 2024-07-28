// this is a file with some utils for the "app"

console.log('utils.js is running');

const name = 'Andrew';

const greet = (name) => {
    return `Hello, ${name}`;
    }

module.exports = {
    greet
};