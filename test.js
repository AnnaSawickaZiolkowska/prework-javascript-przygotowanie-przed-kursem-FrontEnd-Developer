/*
var myString = "I am a string";

var mySrting1 = 'I am a "fun" string';

var myString2 = 'I\'m a "fun" string';

console.log(myString)

console.log(myString.length);
console.log(myString.toUpperCase());

console.log(myString.indexOf("fun"));

if (myString.indexOf("ninja") === -1){

    console.log("the world ninja is not in the string");
}else {

    console.log("the world ninja starts at position " + myString.indexOf("ninja"));
}

*/

var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2);   //FALSE
console.log(string1.toLowerCase() === string2.toLowerCase());   //TRUE