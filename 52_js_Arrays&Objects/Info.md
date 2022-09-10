https://www.codewithharry.com/videos/web-development-in-hindi-52/


Arrays & Objects in JavaScript | Web Development Tutorials #52
 
In the previous tutorial, we have seen the scope of the variable and different conditional statements like if-else and switch-case. Moving further, we are going to learn about Arrays and Objects used in JavaScript. Make a new file as tut52.html and add an instant boilerplate to get the HTML template. Give the title as Arrays and Objects under the <title> tag. 

The object class represents one of JavaScript’s data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor. we have two types of values used in JavaScript- primitive and reference. To be more simple, either we create objects or primitive data types. The primitive data types are as follows-

let myVar = 34;
        let myVar2 = "string";
        let myVar3 = true;
        let myVar4 = null;
        let myVar5 = undefined;
Apart from primitive data types, all the other are objects. Let us now see how to define objects. If we write as follows-

let employee = {
             name: "Harry",
             salary: 10,
             channel: "CodeWithHarry",
             "channel 2": "ProgrammingWithHarry",
         }
         console.log(employee);
From the above code, the output will be generated as follows-



In this example, an employee is an object that contains the name, salary, channel, and channel 2 inside it. This is an example, where we create objects manually by us. 


There is a special kind of object known as Arrays. The JavaScript Array class is a global object that is used in the construction of arrays; which are high level, list-like objects. An array is a special variable, which can hold more than one value at a time. 

We can declare an array as follows-

let names = [1, 2, 4, "Harry", undefined];
console.log(names);
An array can contain any type of value in it whether it is a string, integer, or boolean. After writing the above code, you will get the output as follows-



To print the value present at any index number, we can write as follows-

console.log(names[1])
It will print the value present at index number 1. Arrays are important because they make it easier to iterate through each and every element present in DOM. We can also create arrays with the help of a new keyword as follows-

let names = new Array(23);
In this way, an array will be treated as an object. The new keyword is used to create a new object. To know the length of an array, we can use the length function as follows-

console.log(names.length);
In this example, the output will be 5 because the array names contain 5 elements in it.

If we declare a new array as-

let names = new Array(41, 2, 4, "Harry", undefined);
It will be printed in the same order as follows-



However, to sort this array, we can use sort() function as follows-

names = names.sort();
This will sort all the elements in the array.

So I hope, you have understood the concepts of array and objects very well. Soon we will implement all these to make live websites. Till then keep practicing and learn new things.