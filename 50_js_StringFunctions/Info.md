https://www.codewithharry.com/videos/web-development-in-hindi-50/


String Functions in JavaScript | Web Development Tutorials #50
 
String Functions In JavaScript
In this tutorial, we are going to learn about different string functions that are mostly used in JavaScript. These functions are really helpful in extracting the strings either from DOM manipulation or from APIs or AJAX sources. Make a new file as tut50.html and add an instant boilerplate to get the HTML template. Then title it as JavaScript String Functions under the <title> tag.

We will begin by writing a very simple JavaScript code under the <script> tag as follows-

var str = "This is a string";
console.log(str);
Now let us see those functions of strings by which we can either modify, alter, slice, break, etc. the strings.

Suppose we want to locate the position of any word in the string, then we can do as follows-
// First occurrence of a substring
var position = str.indexOf('is');
console.log(position)
indexOf() function is used here to locate the position of any string It gives the first occurrence of the substring. Here the position of “is” is 2, therefore the output will be as follows-



 

To get the position of the last substring, we can use the function lastIndexOf() as follows-
// Last occurence of a substring
position = str.lastIndexOf('is');
console.log(position)
Here the output will be 5 as follows-



To get a substring from a string we can use the slice() function as follows-
var substr = str.slice(1,7);
console.log(substr)
Here you will get the output of the substring from index numbers 1 to 7 as follows-




However, there are other functions that help to get the substrings like-

var substr = str.substring(1,7);
var substr1 = str.substr(1,3);
We can also replace a particular string to another string with the help of replace() function as follows-
var replaced = str.replace('string', 'Harry');
console.log(str)
console.log(replaced)
In this example, the string “This is a string” has been now been changed to “This is a Harry” and is saved to a variable replaced. The original string is still saved in the variable str.

We can also convert the whole strong to an uppercase or lowercase letters as shown below-

console.log(str.toUpperCase());
console.log(str.toLowerCase());
To concat any two strings, we can take the help of concat() function as follows-
var newString = str.concat('New String')
console.log(newString)
To remove all the white spaces in the string, we can use trim() function as shown below-
var strWithWhitespaces = "   this contains        whitespaces   ";
console.log(strWithWhitespaces)
console.log(strWithWhitespaces.trim())
The result will be as follows-



To extract any character from a string, we can use charAt() function as follows-
var char2 = str.charAt(2);
console.log(char2)
It will return ‘i’ as the output.

So I believe, you must have understood how these various JavaScript functions work on a website. In the future, we will make very good websites equipped with these functions. Till then, stay tuned with the tutorials, and keep practicing.