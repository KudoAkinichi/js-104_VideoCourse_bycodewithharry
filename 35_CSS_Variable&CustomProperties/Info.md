https://www.codewithharry.com/videos/web-development-in-hindi-35/


CSS Tutorial: Variables & Custom Properties | Web Development Tutorials #35
In this tutorial, we are going to learn about variables and custom properties used in CSS. We will start by making a new file as tut35.html and add an instant boilerplate to get the basic template. Give the title as CSS variables and custom properties in the <title> tag.

Now don’t get confused and start comparing these variables with the other programming languages. The variables in CSS are different than those of programming languages. For the HTML part, we will make a container and three boxes inside the divs as follows-

<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
Let us style the box as follows-

.box{
     width: 200px;
     height: 200px;
     background-color: blue;
     border: 2px solid red;
     margin: 2px 9px;
}
The result of the above code will be as follows-



Now we will understand the concept of variables. Suppose, we want to create a variable for the background color. We can create it by ‘--’ symbol. Variables in CSS helps us to assign the same properties to different elements. Let us analyze it with the code given below-

.box{
            --box-color: violet;
            width:200px;
            height: 200px;
            background-color: var(--box-color);
            border: 2px solid var(--box-color);
            box-shadow: 3px 3px var(--box-color);
            margin: 2px 9px;
        }
Here, we are using the variable properties to three elements i.e. background color, border, and box-shadow. The change will be as follows-




The important point to remember about these variables is it can be used within its scope only. To make it work, we can write it again or can use the --root property. To make it understand clearer, we can make a global variable in terms of programming language. Let us understand the code below-

:root{
            --primary-color: blue;
            --danger-color: red;
            --maxw: 333px;
        }
Any custom properties written in the root variable can be accessed anywhere in the code. In most of the cases, we use primary color and danger color as shown in the above example. We have to modify the violet color with the primary color and danger color in the box class as follows-

   .box{
            width:200px;
            height: 200px;
            background-color: var(--primary-color);
            border: 2px solid var(--danger-color);
            box-shadow: 3px 3px var(--box-color);
            margin: 2px 9px;
        }
Now let us modify the container and add the maxw property in it from the root with additional some properties. The code is as follows-

 .container{ 
            max-width: var(--maxw);
            margin: auto;
            background-color: var(--danger-color);
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: var(--box-color); */
        }
The container will look as follows-



So, I believe you must have understood the concepts of variables and custom properties in CSS and how they can be used to minimize our efforts. For more interesting upcoming tutorials, kindly stay tuned and keep practicing.