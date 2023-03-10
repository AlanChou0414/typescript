"use strict";
const helloUser = (user) => (`${user} Hello~`);
const sumNum = (a, b) => a + b;
const twoSum = (a, b) => a + b;
const sayHelloUser = (user, str) => (str + ' ' + user);
// Generics
const add = (arg) => arg;
add(12);
add('Alan');
add(false);
const addArray = (ary) => ary;
addArray([1, 2, 3]);
addArray(['1', '2', '3']);
addArray([true, false]);
const addObject = (obj) => obj;
const person = { name: 'Alan', age: 27 };
addObject(person);
