/*
function getAverage (a,b, c, d, e, f){

    var average = (a + b + c + d + e + f) /2;
    console.log(average);
    return average;
}

var myResult = getAverage(7,8,9,10,11,12);
console.log("the averege is " + myResult);

*/


/*
function getAverage (a,b){

    var average = (a + b) /2;
    console.log(average);
    return average;

}

var myResult = getAverage(7,11);  //global variable
console.log("the averege is " + myResult);

*/


/* 
// 1 - z average local

function getAverage (a,b){

    var average = (a + b) /2;
    console.log(average);
    return average;

}

var myResult = getAverage(7,11);  //global variable

function logResult(){
    console.log("the averege is " + myResult + " inside the function");

}

logResult();
*/
// z average global
/*
var average = 0

function getAverage (a,b){

    average = (a + b) /2;
    console.log(average);
    return average;

}

var myResult = getAverage(7,11);  //global variable

function logResult(){
    console.log("the averege is " + myResult + " inside the function");

}

logResult();

*/


/* NUMBERS

var a = "5";
var b = 5;
console.log(a + b);
console.log(typeof (a + b) );

console.log(Math.round(7.8));

*/

/*
var a = "apple";
var b = 5;

if (isNaN(a)){

    console.log("that int even a number, thiclke");
} else {

    console.log("Meaning of life is " + (a * b));
}
*/
var a = "apple";
var b = 5;

//double nagative
if (isNaN(a)){

    console.log("that int even a number, thiclke");
} else {

    console.log("Meaning of life is " + (a * b));
}