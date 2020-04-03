const fs = require('fs');

const data = fs.readFileSync('1-json.json');
const databuffer = data.toString();    // converted data to json

const datab= JSON.parse(data)      // converted from json  to normal obj

var age = datab.age;
datab.age = 34

const strindata =JSON.stringify(datab);   // by this line datab is convertintg to json onject with updated value
fs.writeFileSync('1-json.json',strindata)

