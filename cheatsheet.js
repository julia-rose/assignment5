//Julia's JavaScript Cheat Sheet

//How to define variables
var x = 10;
var y = 2;
var z = 5;

//Alerts
//This creates a pop-up window to appear showing your output.
alert("hi!");

//Comments in javascript
//This allows you to make notes in your code so you can explain to yourself what you were trying to do.

/* multiline comments in javascript
asdlfkjasdf
asdflkjsdf
sdffd*/

//Logging messages to the console
console.log("message");

//Data types
//Strings: must be surrounded by quotation marks
//Numbers: are numbers lol
//Boolean: true or false
//Undefined: ?
//Arrays: groups of data. Can include other arrays!

//array1 is an array of strings
var array1 = ["SpongeBob", "Patrick", "Squidward"];

//array2 is an array of numbers
var array2 = [9, 4, 5006.5];

//array3 is an array of strings and numbers
var array3 = [3, "SpongeBob", 98, "Mr. Krabs"];

//array4 is an array of arrays
var array4 = [array1, array2, array3];


//If-else statements
if (5>10) {
	console.log("You'll never see this because 5 is not greater than 10");
}
else {
	console.log("You will see this message because 5 is not greater than 10");
}


//If, Else-If, Else statements
var sampleVar = 5;

if (sampleVar < 10 ) {
	alert("Your number, " + sampleVar + ", is less than 10.");
}

else if (sampleVar > 10) {
	alert("Your number, " + sampleVar + ", is greater than 10.");
}

else if (sampleVar === 10) {
	alert("Your number is 10, you sneaky bastard.");
}

else {
	alert("You didn't put in a number!");
}

//Testing
var string1 = "Hey";
var string2 = "Heyo";

if(string1 === string2) {
	alert("Your strings are the same.");
}

else{
	alert("Your strings are different.");
}

//Functions
//declare it once, and then you can invoke it later
//can take a user-submitted argument and create output based on that

function alwaysOneMore(ThanYou) {
	return console.log(ThanYou + 1);
}

alwaysOneMore(3);
alwaysOneMore(230498343323);

function chooseADoor(Number) {
	if (Number === 1) {
		alert("You've chosen door #1, and you win the power of flight!")
	}
	else if (Number === 2) {
		alert("You've chosen door #2, and you win the gift of shape-shifting!")
	}
	else if (Number === 3) {
		alert("You've chosen door #3, and you win the ability to sense the nearest bathroom!")
	}
	else {
		alert("Choose a door from 1 to 3.")
	}
}

function canYouDrink(Age) {
	if (Age >= 21){
		alert("Congrats! You can legally drink in the U.S.")
	}
	else {
		alert("Sorry, little one. You can only illegally drink in the U.S.")
	}
}

