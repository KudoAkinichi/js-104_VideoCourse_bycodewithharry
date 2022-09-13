https://www.codewithharry.com/videos/web-development-in-hindi-61/



JavaScript Tutorial: Math Object In JavaScript | Web Development Tutorials #61
JavaScript Tutorial- Math Object in JavaScript
In this tutorial, we are going to see different Math objects used in JavaScript. These are important for them who want to use different mathematical functions in their browser. This function allows us to perform mathematical tasks on numbers.

Make a new file as tut61.html and add the boilerplate to get the HTML template. Then give the title as Math Object under the <title> tag. If we write the following code under the <script> tag, then we will get the list of all those Math functions that are used in JavaScript.

let m = Math;
    console.log(m)
Let us now print the values of some constants using the Math functions.

// Printing the constants from Math Object
    console.log("The value of Math.E is ", Math.E)
    console.log("The value of Math.PI is ", Math.PI)
    console.log("The value of Math.LN2 is ", Math.LN2)
    console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2)
    console.log("The value of Math.LOG2E is ", Math.LOG2E)
After executing the above JavaScript code, we will see the values of these constants in the output as follows-




Now let us see how to print the functions with the help of Math Object. Here we will initialize two variables and then call them under different functions as follows-

let a = 34.64534;
let b = 89;

console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));
The output we get, is as follows-



Math.round is used to round the values to the nearest integer. Then there are Math.pow() and Math.sqrt() functions that are used to return the power and square root of any number respectively. There are other functions like ceil and floor. Ceil is used to round up the number to the nearest integer whereas floor is used to round down to the nearest integer.

console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8)) 
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8))
In the above example, 5.8 is rounded up and rounded down as follows-




Now let us see some trignometric functions. The values given here will be in radians as follows-

// Trinonometric Functions
    console.log("The value of sin(pi) is ", Math.sin(Math.PI/2))
    console.log("The value of tan(pi) is ", Math.tan(Math.PI/2))
    console.log("The value of cos(pi) is ", Math.cos(Math.PI/2))
The output of the following code will be as follows-



We can take the help of min and max functions to find the minimum and maximum numbers respectively. 

console.log("Minimum value of 4, 5, 6 is ", Math.min(4,5, 6));
console.log("Maximum value of 4, 5, 6 is ", Math.max(4,5, 6));
This code will return the minimum and maximum number between 4, 5, and 6.


Let us now see how to generate random numbers in JavaScript. We use Math.random() to generate any random number as follows-

let r = Math.random();
console.log("The random number is ", r)
It will generate any random number between 0-1 as follows-



But to generate a random number between a and b, we can use this particular formula and write as follows-

let a1 = 50;
let b1 = 60;
let r50_60 = a1 + (b1-a1)*Math.random();
console.log("The random number is ", r50_60)
It will generate the random number between 50 and 60.

This was all about different Math functions and you can use these functions to account with any mathematical related issues on your website. You can learn more by practicing.