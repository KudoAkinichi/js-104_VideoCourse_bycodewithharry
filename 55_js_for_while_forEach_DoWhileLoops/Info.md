https://www.codewithharry.com/videos/web-development-in-hindi-55/


JavaScript Tutorial: for, while, forEach, Do While Loops | Web Development Tutorials #55
In this tutorial, we are going to learn about different loops used in JavaScript and how to use them to iterate through the arrays. Make a new file as tut55.html and add the boilerplate to the basic HTML template. Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.

Let us start by understanding for loops. It loops through a block of code a number of times.  If we write the code as follows-

let i = 0;
     for(i=0; i<3;i++){
         console.log(i);
     }
In the above example, the for loop will print the value of i until it is less than 3. The output of the above code is as follows-



Let us now see how to use for loop to iterate an array. If we write the code as follows-

let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
     for (let index = 0; index < friends.length; index++) {
         console.log("Hello friend, " + friends[index]);
     }
In this example, as the value of index increases, the name of all the friends will be printed until it becomes equal to the length of an array. The output will be as follows-




However, there is another simpler way to write the same loop with the help of forEach. It is written as follows-

friends.forEach(function f(element){
         console.log("Hello Friend, " + element + " to modern JavaScript");
     });
There is one more way of writing it using for/of loops. It loops through the values of an iterable object. It is written as follows-

for (element of friends){
         console.log("Hello Friend, " + element + " to modern JavaScript again");
     }
To iterate through an object, we can use for/in loops. Let us understand with the example below-

let employee = {
        name: "Harry",
        salary: 2,
        channel: "CWH"
    }

    // Use this loop to iterate over objects in JavaScript
    for(key in employee){
        console.log(`The ${key} of employee is ${employee[key]}`);
    }
This loop will iterate through all the elements of an object employee and the result will be as follows-




Now we will see how to use while loops in JavaScript. The while loop loops through a block of code as long as a specified condition is true. The syntax is as follows-

let i =0;
    while(i<4){
        console.log(`${i} is less than 4`);
        i++;
    }
This loop will execute until the value of i is less than 4. The output will be as follows-



There is another loop known as do-while loops. It is a variant of the while loop. It will execute the code block once, before checking the condition, then it will repeat the loops as long as the condition is true. The example is as follows-

let j =34;
    do{
        console.log(`${j} is less than 4 and we are inside do while loop`);
        j++;
    }while(j<4);
So I hope you must have understood about different loops used in JavaScript. From the next tutorials, we will do some practical implementation from these loops and understand them better.