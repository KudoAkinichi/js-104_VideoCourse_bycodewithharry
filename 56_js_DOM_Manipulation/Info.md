https://www.codewithharry.com/videos/web-development-in-hindi-56/


JavaScript Tutorial: Navigation The DOM | Web Development Tutorials #56
In this tutorial, we are going to learn how we can do DOM manipulation in JavaScript. Let us start by making a new file as tut56.html and then add the boilerplate to get the HTML code. Then give the title as Manipulating DOM under the <title> tag. 

The HTML DOM (Document Object Model) is a standard object model and programming interface for HTML. It defines:

The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements
In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

Let us begin with our HTML code as follows-

 <div id="main" class="container">
        <ul id="nav">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>More About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
The most common way to access an HTML element is to use the id of the element. For example, if we write as follows-
let main = document.getElementById('main');
console.log(main);
By writing getElementById, we can target the HTML through its id. Therefore, the result of the above code will look like-




Let us see another example. I want to target the elements under the id nav, we can write this as follows-

let nav = document.getElementById('nav');
console.log(nav);
For DOM to work, keep in mind that while selecting the elements with its id, there should be a unique id for every element in the HTML code. You cannot work with two same ids for different elements otherwise it will create a problem.

The easiest way to get the content of an element is by using the innerHTML property. It is useful for getting or replacing the content of HTML elements. The example is shown below-



However, we can also extract the elements from HTML with the help of class name. If we want to find all the elements with same class name, use getElementsByClassName(). Let us understand this with an example. If we write as follows-
let containers = document.getElementsByClassName('container');
console.log(containers);
The output of the above code will be as follows-



Here, we can see two container class as have made two container classes. But if we write as container(0) or container(1) then we will get the first and second containers respectively. 

 


If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelector()  method. For example, if we write-
let sel = document.querySelector('container’);
console.log("Selector returns ", sel)
In this example, the first element which matches with the selector will be returned as follows-



We can use all the selectors that we have learned till now. We can also use querySelectorAll() to target the elements. For example, if we want to select all the ids, we can write as follows-
let sel = document.querySelectorAll('#nav');
console.log("Selector returns ", sel)
In the upcoming tutorials, we will see some more selectors. Till then practice these because they are the most important selectors that are mostly used.