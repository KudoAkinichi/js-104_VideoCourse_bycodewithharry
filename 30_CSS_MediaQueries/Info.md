https://www.codewithharry.com/videos/web-development-in-hindi-30/


CSS Tutorial: Media Queries Explained | Web Development Tutorials #30
In this tutorial, we will discuss media queries in CSS.

What Is Media Query?
Media queries are used when we want to customize our website's presentation according to the user's screen size. With the help of media queries, you can display different markups based upon the device's general type(mobile, desktop, tablet).
A media query is a logical operation. Whenever a media query becomes true, then the related CSS is applied to the target element.
Syntax Of Media Query :
A media query is composed of two things: media type and expression. A media query can contain one or more expressions. 

Syntax :

@media media-type and (media-feature)
{
/* CSS Rules to be applies*/
}
Example: 

@media screen and (max-width: 800px)
{
#contents{width:90%}
}
Let's understand this example :

@media: A media query always starts with @media.
Screen: It is the applicable media type.
max-width: It is the media feature. 
#contents{width:90%} : It is the CSS to be applied when the conditions are met.
Now, we will spend some time understanding how to use media queries on a website.

First of all, we have used the below CSS to design four divs.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Media Query</title>
    <style>
        .box {
            text-align: center;
            background-color: rgba(255, 196, 0, 0.959);
            color: white;
            font-size: 50px;
        }
 </style>
</head>
<body>
    <div class="box" id="box1"> Windows</div>
    <div class="box" id="box2"> MacOS</div>
    <div class="box" id="box3"> Kali Linux</div>
    <div class="box" id="box4">Android</div>
</body>
</html>
Here is the output :




Now, we are changing the display value to display:none; and then we will apply the media queries. Here is the CSS :

 <style>
        .box {
            text-align: center;
            background-color: rgba(255, 196, 0, 0.959);
            color: white;
            font-size: 50px;
             display: none;
        }
 </style>   
Now, it's time to apply our very first media query. Here is the CSS used :

 @media (min-width: 400px){
            #box1{
                display: block;
            }
        }
In the above code, we have applied the media query to id=box1. So, whenever the page's width is 400px or more than 400px, then the display value of the box1 will be changed from display:none; to display:block; and applied CSS will be visible to the user.

Output:



In the above image, I have used the chrome developer tools to change the page's width. You can see that the media query is applied when the page's width is set to 400px. So whenever the page width is 400px or more than 400px, then the media query for the box1 will be applied because we have set the minimum width to 400px. Similarly, we have applied a media query for the box2. Here is the CSS used:

/* @media (min-width: 400px){
            #box1{
                display: block;
            }
        } */
         @media (min-width: 450px) and (max-width: 600px){
            #box2{
                display: block;
                background-color: teal; 
            }
        }
In the above code, we have set minimum width to 450px and maximum width to 600px. So the media query for the box2 will be applied whenever the screen's width is between 450px and 600px.

Output :



So, that's how you can easily include different media queries depending upon your requirements. Note that we have used and operator to combine two queries to be true. You can also use other operators such as not, only, and comma(,). So, this is all for this tutorial, and I hope you have got the basic knowledge of media queries in CSS. Feel free to ask your queries in the QnA section.