https://www.codewithharry.com/videos/web-development-in-hindi-49/


Strings in JavaScript | Web Development Tutorials #49
Strings In JavaScript
In this tutorial, we are going to learn about Strings in JavaScript and how to make them, what are the methods to manipulate those Strings, and how to display them in the browser using JavaScript. A JavaScript string is zero or more characters written inside the quotes. The String object is used to represent and manipulate a sequence of characters.

Start by making a new file as tut49.html and add the boilerplate to get the basic HTML code. Name the file as JavaScript | String and String Methods under the <title> tag.

To start, we will add the basic HTML code as shown below-

<div class="container">
        <h1>Lorem ipsum dolor sit.</h1>
        <div id="content"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi, quaerat corrupti quas, illum nobis tempore sequi cumque laboriosam magni expedita earum? Similique corrupti nam magni reprehenderit quia vero, reiciendis eius officiis doloremque ipsa?</p>
    </div>
To write the JavaScript we will include a <script> tag. For example, if we write-

var string = "this";
We will see that the “this” word is reflected back on the console tab in the browser. However, apart from the double quotes, we can also write a Sting in a single quote as ‘this’. It is recommended to use double quotes when we are using single quotes between the strings. For example-

var string = 'thi"s';
If we declare new variables with strings and concatenate them with a ‘+’ sign as shown here-

var string = 'thi"s';
var name = 'Harry';
var message = 'Harry is a good boy';
Then the result will be that all the three strings will be merged together as shown below-



 


Let us now understand what are template literals. These are written under ` sign. If we write the code as below-

var name = 'Harry';
var channel = 'CodeWithHarry';
var message = 'Harry is a good boy';
var temp = `${name} is a 'nice' person "and" he has a channel called ${channel}`;
$ symbol is used here to pick that particular string from the variable. And if we do, 

console.log(temp);
Then the result will be as follows-



The main benefit of using this method is, we can use both double quotes or single quotes to identify the strings.

To extract the number of characters in a particular string we can take the help of length function as shown below-

var len = name.length;
console.log(`Length of name is ${len}`)
It will return the number of characters in the variable name. We also have escape sequence characters in the Strings. For example, if we write-

console.log("Hello world\nHarry");
The result will be as follows-



“\n” is an escape sequence that is used to take the string after it in the next line. It’s a new line character.

So I hope you must have got a basic understanding of Strings of JavaScript. In the next tutorials, we will learn the different methods of creating strings. Therefore, stay with tutorials to learn more. 