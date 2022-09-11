https://www.codewithharry.com/videos/web-development-in-hindi-57/


JavaScript Tutorial: Events & Listening to Events | Web Development Tutorials #57
In this tutorial, we are going to learn how we can make browser events come into action and how should we use them. An HTML event can be something the browser does or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

Here is a list of some common HTML events-

Onchange-  An HTML element has been changed
Onclick- The user clicks an HTML element
Onmouseover-   The user moves the mouse over an HTML element
Onmouseout-The user moves the mouse away from an HTML element
Onkeydown- The user pushes a keyboard key
Onload- The browser has finished loading the page

Make a new file as tut57.html and add the boilerplate to get the HTML template. Then give the title as JS Events under the <title> tag. Let us now write some HTML to begin the work. We will simply add the paragraph and heading and the result will be as follows-

Now will make a button and we want to hide that button if someone clicks on it. But before that we can add some CSS to it to make it look attractive.

If we want that while clicking the button the paragraph should hide and by again clicking, it should come back, then we can write as follows-

<button id="btn" onclick="toggleHide()">Show/Hide</button>
function toggleHide(){
        let btn = document.getElementById('btn');
        let para = document.getElementById('para'); 
        if(para.style.display != 'none'){
        para.style.display = 'none';
        }
        else{
        para.style.display = 'block';
        }
    }
The result will be as follows-






In the same way, there is another event listener known as a mouseover. For example, if we want to alert when the mouse pointer is on the paragraph, then we can write the code as follows-

let para = document.getElementById('para');
        para.addEventListener('mouseover', function run(){
            alert('Mouse Inside')
        });
The result of the above code will be that whenever the mouse pointer will be over the paragraph, it will make an alert as shown below-



In the same way, if we want to alert when the pointer is outside the paragraph, we can write the code as follows-

para.addEventListener('mouseout', function run(){
            alert('Mouse now went outside')
        });
In the same way, you can try out with all the other events and practice more. In the further tutorials, we will practice some more event handlers in our websites. Till then stay with the tutorials. 