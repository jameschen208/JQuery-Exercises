// Create a script with two variables assigned to two numbers. 
// Add them together and output the result to the console
var x = 10
var y = 20

alert(x + y)

// // Try to add two strings together and output the result to an alert
var stringone = "James "
var stringtwo = "Chen"

alert(stringone + stringtwo)

// Write a program that checks if a variable is less than 10. 
// If it is, alert the user that their variable is less than 10. 
// If it is not, let the user know what the variable was 
// and that it was greater than 10.
var num;

function numcheck(num){
	if (num < 10){
		alert("your number is less than ten!")
	}
	else if (num > 10){
		alert("your number is greater than ten!")
	}
	else{
		alert("your number is ten!")
	}
}