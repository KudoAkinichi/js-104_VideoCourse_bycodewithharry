https://www.codewithharry.com/videos/web-development-in-hindi-59/


JavaScript Tutorial: Date & Time In JavaScript | Web Development Tutorials #59
In this tutorial, we are going to learn about the date object. We will learn how to set, initialize, and get the date through JavaScript. Make a new file as tut59.html and add the boilerplate to get the HTML template. Then give the title as JavaScript Dates under the <title> tag. 

To add a date, we can write as-

let now = new Date();
console.log(now);
This is a constructor and date here is an object. The output from the above code that we get is as follows-



But if we write like this-

let dt = new Date(1000);
console.log(dt);
The output we get is as follows-



The value inside the date object gives the time after that particular milliseconds from where the reference is taken.


To initialize the date of any given time, we can write as follows-

let newDate = new Date("2029-09-30");
console.log(newDate)
After writing the above code, we get the output as-



However, there is another way to initialize the date. If we write as follows-

  // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
        let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
        console.log(newDate);
Through this constructor, we can initialize the date in the given format. There are some more functions which help us to know the year, month, date, and time directly. The functions are as follows-

let yr = newDate.getFullYear();
console.log("The year is ", yr);

let dat = newDate.getDate();
console.log("The date is ", dat);

let month = newDate.getMonth();
console.log("The month is ", month);

let hours = newDate.getHours();
console.log("The hours is ", hours);
If we write the above functions, the output we get is as follows-



We can also set date and time manually with the functions like setDate() and newMinutes as follows-

newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate)
If we write the value inside the setDate() function more than 31, then the JavaScript automatically treats it as a new date and gives it a new value starting from 1. For example, if we write the value as 32, then it will automatically be converted to 1 and so on.


If we want to add the clock on our website, we can do this with the help of the above functions. But before that, we have to add the HTML which goes like this-

<div class="container">
        Current time is <span id="time"></span>
    </div>
Then we will define the above functions and create an inner HTML as follows-

newDate.setDate(8);
        newDate.setMinutes(29);
        console.log(newDate)
        setInterval(updateTime, 1000);

        function updateTime() {
            time.innerHTML = new Date();
        }
If we modify it using some CSS as follows-

.container {
        font-size: 23px;
        background-color: blanchedalmond;
        border: 2px solid grey;
        padding: 34px;
        margin: 4px;
        text-align: center;
    }

    #time {
        font-weight: bold;
    }
Then the output will look as-



So I hope you must have understood how to use date and time functions on our website. Now you can try various ways to add date and time on your own website and make it look interesting. 