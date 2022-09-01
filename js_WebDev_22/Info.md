https://www.codewithharry.com/videos/web-development-in-hindi-22/


CSS Tutorial: Styling Links & Buttons | Web Development Tutorials #22
In this tutorial, we are going to see how to style and design buttons in CSS and what pseudo-selectors are. We will start by making a new file as tut22.html and then adding the boilerplate to it. Give the title as Pseudo selectors and more designing in the <title> tag.

Let us now add the basic CSS code to style the HTML part-

 .container{
            border: 2px solid red;
            background-color: rgb(223, 245, 201);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
After writing it, you will observe the changes as follows-




We will now design two types of buttons. One will be a normal button and another will be linking to some website. The codes of both are as below-

<a href="https://yahoo.com" class="btn">Read more</a>
<button class="btn">Contact us</button>
You will observe that both the buttons will look different. Therefore, to make it look little attractive, we will do some styling in it with CSS.


.btn{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            background-color: crimson;
            padding:6px;
            border: none;
            cursor:pointer;
            font-size: 13px;
            border-radius: 4px;
        }
To remove the underline in the link part we have to style the anchor tag as-

  a{
            text-decoration: none;
            color: black;
        }
Let us now see what Pseudo Selectors are. A pseudo class is used to define a special state of an element.


Hover is used to change the color of text or background of a button as soon as you hover that part. The code for this is as below.
  a:hover{
            color: rgb(5, 0, 0);
            background-color: rgb(221, 166, 38);
        }
The next Pseudo selector is Visited. As soon as you visit the anchor tag button and click the link mentioned, it changes its color. To apply this property, write the code as follows-
a:visited{
            background-color: yellow;
        }
The next selector is Active. If you visit any button, and click it, it becomes active and showcases with different properties. The code for this is-
  a:active{
            background-color:darkblue;
        }
Similarly we can put pseudo selector in the ‘btn’ class as well. To apply it write the code as follows-


.btn:hover{
            color:darkgoldenrod;
            background-color:rgb(223, 245, 201);
            border: 2px solid black;
        }
To learn more about different buttons and pseudo selectors you can visit the website called Bootstrap. There you will find more buttons and properties related to them. You can see and practice some of the properties mentioned there and increase your skills. Till then you can visit the previous tutorials and practice all the things taught till now. In the upcoming tutorials, we are going to learn more and more CSS properties and make a website look more attractive from the scratch.