https://www.codewithharry.com/videos/web-development-in-hindi-27/



CSS Tutorial: Visibility & z-index Explained | Web Development Tutorials #27
In this tutorial, we will discuss the visibility and z-index property of CSS.

CSS Visibility Property: 
First of all, let's create four boxes of different colours. Here is the CSS used :

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visibility and Z-Index Property In CSS</title>
    <style>
        .box {
            width: 170px;
            height: 170px;
            border: 2px solid black;
        }
        #box1 {
            background-color: greenyellow;
        }
        #box2 {
            background-color: rebeccapurple;
        }
        #box3 {
            background-color: blue;
        }
        #box4 {
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <div class="box" id="box1"></div>
    <div class="box" id="box2"></div>
    <div class="box" id="box3"></div>
    <div class="box" id="box4"></div>
</body>
</html>
Output :  



Now, let's start our discussion on visibility property :

Visibility property is used to hide or show an HTML element without changing the layout of the page.
The hidden element uses the space on the page because it is still there, but it is not visible to the user.
Now, we will change the visibility from visible to hidden of box2 for a better understanding of visibility property. Here is the CSS used :

<style>
        .box {
            width: 170px;
            height: 170px;
            border: 2px solid black;
        }
        #box1 {
            background-color: greenyellow;
        }
        #box2 {
            background-color: rebeccapurple;
            visibility: hidden;
        }
        #box3 {
            background-color: blue;
        }
        #box4 {
            background-color: lightcoral;
        }
You can see in the image given below that the box2 is not visible anymore, but it is still occupying the space on the page.


Difference Between display:none; and visibility:hidden; 
There is a minor difference between the display: none; and visibility:hidden; property of CSS. Let's understand this difference with the help of the boxes that we created earlier.

Use the following CSS for box2 :

 #box2 {
            background-color: rebeccapurple;
            display: none;
        }
In the above code, we have changed the display value of box2. Here are the results :

In the above image, you can clearly see that box2 is completely removed from the webpage, and there is no empty space left on the page. But, when we used the visibility: hidden property, the box2 element was still occupying the space.

display:none; - It completely removes an HTML tag from the web page like it was never there.
visibility:hidden;  - It makes the tag invisible but will not remove the element, and it will still occupy the space on the page.
Z-Index Property In CSS :
At the starting of this tutorial, we created four boxes of different colours. Now, try to answer this question: What if one box overlaps the other? Which box will be visible to the user? This is where z-index property comes into the picture. So, whenever HTML elements collapse with each other, then the element with smaller z-index value will be covered by the element with larger z-index value.

Note: Z-index does not work on static position value. It only works on the elements with position: relative, absolute, fixed, or sticky.  We are changing the positions of box1 and box2 by applying the CSS given below: 

  #box1 {
            top: 69px;
            position: relative;
            background-color: greenyellow;
        }
        #box2 {
            top: 34px;
            position: relative;
            background-color: rebeccapurple;
        }
Output: 



You can see in the above image that the box2 overlaps the box1. Now, we will give z-index value to box1 and box2. Here is the CSS used :

       #box1 {
            top: 69px;
            position: relative;
            background-color: greenyellow;
            z-index: 1;
        }
        #box2 {
            top: 34px;
            position: relative;
            background-color: rebeccapurple;
            z-index: 0;
        }
In the above code, we have set the z-index value of box1 and box 2, respectively. Here are the results :



You can see that the box1 is overlapping the box2 because the z-index value of box1 is greater than the z-index value of box2. So, that's how you can easily change the visibility and z-index value of an HTML element.

This tutorial ends here and I will see in you in the next tutorial.