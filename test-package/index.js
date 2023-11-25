const calculator = require('noman54-simple-calculator');

console.log('Add: '+calculator(15,5,'add'));
console.log('Add: '+calculator(25,5,'+'));

console.log('Subtract: '+calculator(25,3,'subtract'));
console.log('Subtract: '+calculator(45,12,'-'));

console.log('Multiply: '+calculator(2,11,'multiply'));
console.log('Multiply: '+calculator(6,3,'*'));

console.log('Divide: '+calculator(4,2,'divide'));
console.log('Divide: '+calculator(1,5,'/'));

console.log('Modulus: '+calculator(4,2,'modulus'));
console.log('Modulus: '+calculator(5,3,'%'));