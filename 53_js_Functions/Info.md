https://www.codewithharry.com/videos/web-development-in-hindi-53/



Functions in JavaScript | Web Development Tutorials #53
In this tutorial, we are going to learn about the JavaScript functions and why should we use them in JavaScript. A JavaScript function is a block of code designed to perform a particular task. They are one of the building blocks in JavaScript.

Make a new file as tut53.html and add the boilerplate for the HTML template. In this tutorial, we will create a new JavaScript file and attach it in the <script> tag as follows-

<script src= “tut53.js”></script>
To check whether our js file is attached or not, we can write 

console.log("This is tutorial 53");
If we get the result as follows, it means we are working correctly:



Let us now see how JavaScript functions help us. Assume that we have to repeatedly write the particular code for a certain task as shown below-

let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
console.log(name + “is a good boy”);
console.log(name1 + “is a good boy”);
console.log(name2 + “is a good boy”);
console.log(name3 + “is a good boy”);
As we can see in the above example, we are writing a particular set of codes every time. To avoid this JavaScript functions come into action. We can write the above code with the help of JavaScript functions as follows-

function greet(name){
          console.log(name + " is a good boy");
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
greet(name);
greet(name1);
greet(name2);
greet(name3);
By writing the above code, we will get the same output as follows-



We have increased the use of code reusability with the help of a JavaScript function. Also, we can increase more number of parameters in the JavaScript functions without writing the code again. Let us see the below code-

function greet(name, greetText){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
We have to pass “greetText ” also in the function to make it executed. The function will only be called till you pass the value to it otherwise it will never be called. The output of the above code will be as follows-



We also use some functions to make it return a particular value. Return value means it gives you some output in return. For example, if we write-

let returnVal = greet(name3);
console.log(returnVal)

The output will be undefined because the parameter greet does not return anything. It just prints the value through console.log. But if we make a new function as follows-

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal)
You will get the output 6 here because the variable d is being returned here by the function. 

So I hope you must have got some idea about JavaScript functions. Try to make some new functions by yourself like finding a maximum or minimum number in a group and keep practicing to make yourself better.