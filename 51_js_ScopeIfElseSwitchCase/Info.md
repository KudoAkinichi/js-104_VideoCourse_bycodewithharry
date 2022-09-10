https://www.codewithharry.com/videos/web-development-in-hindi-51/


Scope, If-else Conditionals & Switch Case in JavaScript | Web Development Tutorials #51
In this tutorial, we will learn about scoping in JavaScript and then we will move on to If-Else and Switch Case conditions. Make a new file as tut51.html and add the boilerplate to get the basic HTML template. Then give a title as Scope and Conditionals under the <title> tag.

Let us now write the JavaScript under the <script> tag and understand the scope. If we write the following code-

var string1 = "This is a string";
     console.log(string1);
We will expect the output as “This is a string”. But if we update it as-

var string1 = "This is a string2";
     console.log(string1);
Then the output will be as follows-



 


 

So here, we have noticed that the value of the variable gets easily changed and it can create a problem if we do not remember the initial value given the variable. It is because the scope of var is global here. But if we declare the var inside any function, then its scope will remain under that function. 

If we write as follows-
let a = "u";
     {
     let a = "u6";
     console.log(a)
     }
     console.log(a)
In this example, the value of a is ‘u6’ under a particular scope but the value of a declared outside the scope is ‘u’. You will get the output as follows-



However, it is highly recommended to use let instead of var to avoid confusion of the scope of the variable.

If we write as follows-
const a = "This cannot be changed";
a = "I want to change this. This cannot be changed";
console.log(a);
We will see the output as-



In the above example, we have declared a as a constant, therefore, its value cannot be changed further by any means. Hence, it shows an error.


Now let us move towards conditional statements. If we write the code as follows-
let age = 5;
     if(age>18){
         console.log("You can drink water");
     }
     else if(age==2){
         console.log("Age is 2")
     }
     else if(age==5){
         console.log("Age is 5")
     }
     else{
         console.log("You can drink Cold Drink");
     }
The output of the above code will be 5 as shown below-



It is because we set the age initially as 5 and it prints the condition which is true for that particular statement. It is known as an if-else ladder.

Let us now understand switch-case statements. If we write as follows-
const cups = 41; 
    switch (cups) {
        case 4:
            console.log("The value of cups is 4")
            break;

        case 41:
            console.log("The value of cups is 41")
            break;

        case 42:
            console.log("The value of cups is 42")
            break;

        case 43:
            console.log("The value of cups is 43")
            break;
    
        default:
            console.log("The value of cups is none of 4, 41, 42, 43")
            break;
    }
Here you will see the output as-



It is because the case has matched exactly with the value of cups. However, if we remove the break statement then all the values will be printed. And in case, no value matches with any case, then the default statement will be printed.

So I believe, you have understood the concepts of scope and conditional statements. In the upcoming videos, we will learn some more advanced concepts in JavaScripts. Till then keep practicing and stay with the tutorials.