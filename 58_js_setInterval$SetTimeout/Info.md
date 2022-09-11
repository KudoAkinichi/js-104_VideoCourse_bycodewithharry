https://www.codewithharry.com/videos/web-development-in-hindi-58/


JavaScript Tutorial: setInterval & setTimeOut | Web Development Tutorials #58
In this tutorial, we are going to learn about setInterval and setTimeOut functions and how they are useful in JavaScripts. Make a new file as tut58.html and add the instant boilerplate to get the basic HTML template. Then give the title as JavaScript SetTimeout and ClearTimeOut under the <title> tag.

Now write the HTML code to get started with the work-

<div class="container">
        Time now is <span id="time"></span>
    </div>
Now we are going to write the Javascript under the <script> tag. We can check if the JavaScript is working or not by writing a very simple code as-

<script>
    console.log("This is tutorial 58");
If we get the following output then everything is fine.



There are times when we want a particular function should run after a specific interval of time or it should run repeatedly after certain intervals. In that case, we can use setTime and setInterval functions respectively.


The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. This function is only executed once. Use the clearTime() method to prevent the function running.

If we write as follows-

function greet(){
        console.log("Hello Good Morning ");
    }
setTimeout(greet, 5000);
If we run the above code then the message will be displayed as follows after 5000ms (5sec).



We can also pass more arguments in this function. One thing to note here is we can never pass the function in setTimeout. Else it returns the output immediately irrespective of what time interval you have set.

To clear the timeout, we can use the function clearTimeout() as follows-

console.log(timeOut);
Now let us see how the setInterval function is used. It calls a function or evaluates an expression at specified intervals in milliseconds. It will continue calling the function until clearInterval() function is called or the window is closed. Let us understand with an example.


If we write as follows-

setInterval(greet, 1000, "Harry", "Good Night");
After running this function, you will notice that the message is being returned after every single second as follows-



To stop this, we have to use clearInterval() as follows-

clearInterval(intervalId);
Let us now see another example of the above codes. If we write as follows-

function displayTime(){
        time = new Date();
        console.log(time);
        document.getElementById('time').innerHTML = time;
    }
    setInterval(displayTime,  1000);
If we run the above code, we will see that after every second the current time is being displayed as follows-



With the help of these functions, we can create many websites or even websites that display a stopwatch. So I hope you must have understood these concepts. In the upcoming videos, we will see some more practical implementation of them.