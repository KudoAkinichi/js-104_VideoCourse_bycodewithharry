https://www.codewithharry.com/videos/web-development-in-hindi-62/


JavaScript Tutorial: Working with JSON in JavaScript | Web Development Tutorials #62
JavaScript Tutorial- Working with JSON in JavaScript
In this tutorial, we are going to learn about the concept of JSON in JavaScript. JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

What is JSON?

JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is language independent
JSON is "self-describing" and easy to understand
The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. The code for reading and generating JSON data can be written in any programming language.

Make a new file as tut62.html and add an instant boilerplate to get the basic HTML template as usual. Then give the title as JSON Tutorial under the <title> tag. Now let us initialize the JSON object and see what the output comes in the console?

let jsonObj = {
            name: "Harry",
            channel: "CWH",
            friend: "Rohan Das",
            food: "Bhindi" //#bhindiLoverSquad
        } 
        console.log(jsonObj)
The output we get will be as follows-




Now if we want to transport these properties using JSON, the question arises, we can do it normally one by one; why there is need for JSON? In some cases, we will have nested objects. Then, in that case, it is difficult to transport each property of the object and convert it into a string to parse them. In such cases, we take the help of JSON.

Let us now see, how to stringify the above object. If we write as follows-

let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);
We will now see an output as follows which is now converted into a string-



The stringify function is used to convert a valid JavaScript object into a string.

Once, this object is converted into a string, we can apply all the string functions to it. For example, if we want to replace Harry with Larry, then we can write as follows-

myJsonStr = myJsonStr.replace('Harry', 'Larry');
console.log(myJsonStr)
Now to convert this string again into an object, we can write as follows-

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj
The final output which you will see will be as follows-



So I believe, you must have understood the concept of JSON. It is very important and is used almost in all programming languages to transport the objects. 