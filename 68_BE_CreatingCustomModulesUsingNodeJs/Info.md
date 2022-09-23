https://www.codewithharry.com/videos/web-development-in-hindi-68/


Backend Tutorial: Creating Custom Modules in Node Using NodeJs | Web Development Tutorials #68
In this tutorial, we are going to learn how to create our own custom modules in Node using NodeJs. The purpose of creating our own modules is to help other creators to use them in their code which can help them. 

We can start by making a new folder as tut68. Inside the folder, we will make two files as index.js and mod.js. Inside index.js, we will make a file that will use modules, and inside mod.js, we will make our own modules.

We will start by making the module first and the code for it goes as follows-

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
In the above example, we have created a simple average function that takes the value as arr and returns the average.

Now to import this module, we have to write as follows in index.js-

const mod = require("./mod");
console.log(mod.name)
After executing this, one thing to notice is, the code gets executed but we still do not get the function back. To get back the function, we have to make the function to behave explicitly in mod.js file. We can do this as follows-

module.exports = average;
Now when we run the function, we get it back as follows-




To get the average of any two numbers, we can pass the values as follows-

const average = require("./mod");
console.log(average([3,4])
When we run the function now, we get the output as follows-



We can also create an object and make it as a module. For example, we can write as follows-

module.exports = {
     avg: average,
     name: "Harry",
     repo: "GitHub"
 }
We can call this module in index.js file as follows-

const mod = require("./mod");
console.log(mod.avg([3,4]))

In the same way, we can export multiple objects and create our own modules with the help of NodeJs. However, there is another method to call the above object. If we write as follows in mod.js file-

module.exports.name = "Harry";
And call the object in the following way in index.js as follows-

console.log(mod.name)
We get the output as “Harry” as follows-



In this way, NodeJs help us to create different other modules to make our work easier. I hope you must have got an idea of how to create custom modules. You can try to create different other modules and practice more.

