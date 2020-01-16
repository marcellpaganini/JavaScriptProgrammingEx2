let a1 = '~~~~~~~~~~~~~~~~~~';

let firstName = 'Stephen';
let lastName = 'Carter';
let age = 29;

console.log(a1);

//Concatenation
let messageConcatenation =
'My name is ' + firstName + ' ' + lastName + ' ' + 'and my age is ' + age + '.';
console.log(messageConcatenation);
console.log(a1);

//String Template Literals
let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(messageStringLiteral);
console.log(a1); 

//Escaping & new line

let a = 'Add a new line\nThis is another line';
console.log(a);
console.log(a1);

let b = 'I quoted the person as saying "I love Javascript"';
console.log(b);
console.log(a1);

console.log('String Functions');

let d = 'abcdefg';

//length of string
console.log(`Length of d - ${d.length}`);

//to upper
d = d.toUpperCase();
console.log(d);

//to lower
d= d.toLowerCase();
console.log(d);

//substr
let e = d.substr(2,4);
console.log(e);

//substring
let f = d.substring(3);
console.log(f);

//indexof
let index = d.indexOf('c');
console.log(index);