//WHILE LOOP

/*

var age = 5;

while (age < 10){

console.log("Your age is less than 10");
age++;
}

document.write("You are now over 10");

*/

//FOR LOOPS

/*
for (age = 5; age < 10; age++){

console.log("Your age is less than 10");
}

document.write("You are now over 10");
*/




/*
var links = document.getElementsByTagName("a");


for (i = 0; i <= links.length; i++){

    console.log("This is link number" + i);
    }
    
    document.write("All links now looped");
    */

    for (i = 0; i < 10; i++){
        if (i === 5 || i ===3){

            continue;
        }

        console.log(i);
        
        if (i === 7){

            break;
        }
    }

    console.log("I have broken out of the loop");